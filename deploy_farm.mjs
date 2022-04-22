import * as backend from "./build/farm.main.mjs";
import { stdlib, deployStandardContract, configureUsersAndTokens } from "./common.mjs";
import { BigNumber } from "ethers";
import log from "loglevel";

export async function init(accountsNumber) {
  const creatorAcc = await stdlib.newTestAccount(stdlib.parseCurrency(100));

  const userAccs = await stdlib.newTestAccounts(accountsNumber, stdlib.parseCurrency(10));
  log.trace("Accounts created and funded with ALGO");

  const stakeToken = await stdlib.launchToken(creatorAcc, "Staky", "STAKE");
  const rewardToken = await stdlib.launchToken(creatorAcc, "Rewardy", "REWARD");
  log.trace("Staking and reward tokens minted");

  await configureUsersAndTokens([creatorAcc, ...userAccs], [stakeToken, rewardToken]);

  const initalStakyBalance = BigNumber.from(1000000);
  for (const acc of userAccs) {
    await stdlib.transfer(creatorAcc, acc, initalStakyBalance, stakeToken.id);
  }
  log.trace("Stakers received STAKE token");

  return {
    creatorAcc,
    userAccs,
    tokens: {
      stakeToken,
      rewardToken,
    },
  };
}

export async function deploy(
  creatorAcc,
  userAccs,
  stakeToken,
  rewardToken,
  beginBlock = 0,
  blocksToRun = 1000,
  rewardPerBlock = 1000
) {
  const creatorCtc = creatorAcc.contract(backend);
  const contractId = await deployStandardContract(creatorCtc, {
    stakeToken: stakeToken.id,
    rewardToken: rewardToken.id,
    beginBlock,
    endBlock: beginBlock + blocksToRun,
    rewardPerBlock,
  });
  const userCtcs = userAccs.map((acc) => acc.contract(backend, contractId));

  return {
    contractId,
    creatorCtc,
    userCtcs,
  };
}
