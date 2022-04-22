"reach 0.1";

const InitialStateObj = {
  stakeToken: Token,
  rewardToken: Token,
  beginBlock: UInt,
  endBlock: UInt,
  rewardPerBlock: UInt,
};

const LocalState = Struct([
  ["staked", UInt],
  ["reward", UInt],
]);

export const main = Reach.App(() => {
  setOptions({
    untrustworthyMaps: false,
  });

  const Common = {
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

  const State = View({
    local: Fun([Address], LocalState),
  });

  const Api = API({
    stake: Fun([UInt], LocalState),
    claim: Fun([], LocalState),
  });

  init();

  Creator.only(() => {
    const { stakeToken, rewardToken, beginBlock, endBlock, rewardPerBlock } =
      declassify(interact.getParams());
    assume(stakeToken != rewardToken);

    assume(beginBlock < endBlock);
  });

  Creator.publish(
    stakeToken,
    rewardToken,
    beginBlock,
    endBlock,
    rewardPerBlock
  );
  const totalRewardAmount = (endBlock - beginBlock) * rewardPerBlock;
  commit();
  Creator.pay([[totalRewardAmount, rewardToken]]);

  const stakedM = new Map(UInt); const staked = (p) => fromSome(stakedM[p], 0);
  const rewardM = new Map(UInt); const reward = (p) => fromSome(rewardM[p], 0);
  const rewardPerTokenPaidM = new Map(UInt); const rewardPerTokenPaid = (p) => fromSome(rewardPerTokenPaidM[p], 0);

  const getLocalState = (addr) => {
    return LocalState.fromObject({
      staked: staked(addr),
      reward: reward(addr),
    });
  };
  
  each([Creator, User], () => {
    interact.deployed();
  });

  const [
    totalStaked,
    lastUpdateBlock,
    rewardPerTokenStored,
    rewardsPaid,
    currentBlock,
  ] = parallelReduce([0, 0, 0, 0, 0])
    .define(() => {
      State.local.set(getLocalState);
    })
    .invariant(
      totalStaked == stakedM.sum() && currentBlock >= lastUpdateBlock
    )
    .while(true)
    .paySpec([stakeToken, rewardToken])
    .api(
      Api.stake,
      (_) => {
        check(currentBlock <= endBlock);
      },
      (toStake) => [0, [toStake, stakeToken], [0, rewardToken]],
      (toStake, callback) => {
        check(currentBlock <= endBlock);
        stakedM[this] = staked(this) + toStake;

        callback(getLocalState(this));
        return [
          totalStaked + toStake,
          lastUpdateBlock,
          rewardPerTokenStored,
          rewardsPaid,
          currentBlock,
        ];
      }
    )
    .api(
      Api.claim,
      () => {
        check(reward(this) < balance(rewardToken));
      },
      () => [0, [0, stakeToken], [0, rewardToken]],
      (callback) => {
        check(reward(this) < balance(rewardToken));

        const claimedReward = reward(this);
        rewardM[this] = 0;

        callback(getLocalState(this));
        if (claimedReward < balance(rewardToken)) {
          transfer([[claimedReward, rewardToken]]).to(this);
        }

        return [
          totalStaked,
          lastUpdateBlock,
          rewardPerTokenStored,
          rewardsPaid + claimedReward,
          currentBlock,
        ];
      }
    )
  commit();
});
