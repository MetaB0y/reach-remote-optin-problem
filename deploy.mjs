import * as backend from "./build/index.main.mjs";
import * as farm from "./deploy_farm.mjs";
import { parseBigNumber, getContractId } from "./common.mjs";

console.log(farm);

const accountsNumber = 2;
const { creatorAcc, userAccs, tokens } = await farm.init(accountsNumber);
const { stakeToken, rewardToken } = tokens;

const deployedFarm = await farm.deploy(
  creatorAcc,
  userAccs,
  stakeToken,
  rewardToken
);

const farmContractId = deployedFarm.contractId;
const farmUserCtcs = deployedFarm.userCtcs;

console.log(`The farm is deployed as = ${farmContractId}`);

export async function deploy(
  creatorAcc,
  stakeToken,
  rewardToken,
  underlyingFarmId,
  creatorFee = 1
) {
  const creatorCtc = creatorAcc.contract(backend);
  const creatorInteract = {
    getParams: () => ({
      stakeToken: parseBigNumber(stakeToken.id),
      rewardToken: parseBigNumber(rewardToken.id),
      underlyingFarmId,
      creatorFee,
    }),
    deployed: async () => {
      throw ["done", {}];
    },
  };

  try {
    await creatorCtc.p.Creator(creatorInteract);
  } catch (e) {
    if (e[0] !== "done") {
      throw e;
    }
  }

  const contractId = await getContractId(creatorCtc);

  return contractId;
}

const optimizerContractId = await deploy(
  creatorAcc,
  stakeToken,
  rewardToken,
  farmContractId
);
console.log(`The optimizer is deployed as = ${optimizerContractId}`);

const userCtcs = userAccs.map((acc) =>
  acc.contract(backend, optimizerContractId)
);

async function stake(account, amount) {
  const api = userCtcs[account].a;
  return await api.stake(amount);
}

async function stakeDirectly(account, amount) {
  const api = farmUserCtcs[account].a;
  return await api.stake(amount);
}

const farmRetval = await stakeDirectly(1, 100);
console.log("Farm after direct stake:", farmRetval);

const retval1 = await stake(1, 100);
/*
Error: stake errored with Error: API call failed: {
  "type": "signAndPost",
  "e": {
    "status": 400,
    "response": {
      "message": "TransactionPool.Remember: transaction F7SQISBOHJ45DTRNW7TLNXJAAXUTJKOUHOKHJABE7A4IOA7WVJAQ: logic eval error: logic eval error: cannot fetch key, 3PYLU7CBUGDHB5U7NYAHO4KQURN4MHOKHYTYI5FSNZL5ZH63IYEDOX4YHM has not opted in to app 1095. Details: pc=426, opcodes=extract 18 9\nconcat\napp_local_put\n. Details: pc=220, opcodes=load 254\nitxn_field Assets\nitxn_submit\n"
    }
  },
  "es": "Error: Network request error. Received status 400: TransactionPool.Remember: transaction F7SQISBOHJ45DTRNW7TLNXJAAXUTJKOUHOKHJABE7A4IOA7WVJAQ: logic eval error: logic eval error: cannot fetch key, 3PYLU7CBUGDHB5U7NYAHO4KQURN4MHOKHYTYI5FSNZL5ZH63IYEDOX4YHM has not opted in to app 1095. Details: pc=426, opcodes=extract 18 9\nconcat\napp_local_put\n. Details: pc=220, opcodes=load 254\nitxn_field Assets\nitxn_submit\n"
}
    at /home/anonymous/github/reach-remote-optin-problem/node_modules/@reach-sh/stdlib/dist/cjs/shared_impl.js:306:34
    at processTicksAndRejections
*/
console.log({
  retval1,
});
