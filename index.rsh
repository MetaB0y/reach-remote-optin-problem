"reach 0.1";

const InitialStateObj = {
  stakeToken: Token,
  rewardToken: Token,
  underlyingFarmId: Contract,
  creatorFee: UInt,
};

export const main = Reach.App(() => {
  const Common = {
    ...hasConsoleLogger,
    deployed: Fun([], Null),
  };

  const Creator = Participant("Creator", {
    ...Common,
    getParams: Fun(
      [],
      Object({
        ...InitialStateObj,
      })
    ),
  });

  const User = Participant("User", {
    ...Common,
  });

  void User;

  const Api = API({
    stake: Fun([UInt], Null),
  });

  init();

  Creator.only(() => {
    const { stakeToken, rewardToken, underlyingFarmId, creatorFee } =
      declassify(interact.getParams());
    assume(stakeToken != rewardToken);
  });

  Creator.publish(stakeToken, rewardToken, underlyingFarmId, creatorFee);

  const FarmLocalState = Struct([
    ["staked", UInt],
    ["reward", UInt],
  ]);

  const underlyingFarmCtc = remote(underlyingFarmId, {
    stake: Fun([UInt], FarmLocalState),
    claim: Fun([], FarmLocalState),
  });

  each([Creator, User], () => {
    interact.deployed();
  });

  const [totalStaked, lastUpdateBlock] = parallelReduce([0, 0])
    .invariant(true)
    .while(true)
    .paySpec([stakeToken, rewardToken])
    .api(
      Api.stake,
      (_) => {
        assume(true);
      }, // TODO
      (toStake) => [0, [toStake, stakeToken], [0, rewardToken]],
      (toStake, callback) => {
        callback(null);

        const stateOfUnderlyingFarm = underlyingFarmCtc.claim.withBill([rewardToken])();

        return [totalStaked + toStake, lastUpdateBlock + 1];
      }
    )

  commit();
});
