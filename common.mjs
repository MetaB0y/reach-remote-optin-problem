import { BigNumber } from "ethers";
import log from "loglevel";
import { loadStdlib } from "@reach-sh/stdlib";

export const stdlib = loadStdlib(process.env);

export const fmt = (x) => stdlib.formatCurrency(BigNumber.from(x), 4);
export const getBalance = async (acc) => fmt(await stdlib.balanceOf(acc));
export const isBigNumber = (n) => Object.prototype.hasOwnProperty.call(n, "_isBigNumber");

export const parseBigNumber = (bn) => {
  const hex = bn._hex.slice(2);
  return parseInt(hex, 16);
};

export const getContractId = async (ctc) => {
  const info = await ctc.getInfo();
  if (isBigNumber(info)) {
    return parseBigNumber(info);
  } else {
    return JSON.stringify(info);
  }
};

/**
 * Deploy a contract which has a standard structure (`InitialState` + `deployed` + `Api`)
 * @param creatorCtc Reach backend interface for the creator account
 * @param initialState `InitialStateObj` of the contract
 */
export async function deployStandardContract(
  creatorCtc,
  initialState,
  additionalCreatorMethods = {}
) {
  const creatorInteract = {
    getParams: () => initialState,
    deployed: async () => {
      throw ["done", {}];
    },
    ...additionalCreatorMethods,
  };

  try {
    await creatorCtc.p.Creator(creatorInteract);
  } catch (e) {
    if (e[0] !== "done") {
      throw e;
    }
  }

  return getContractId(creatorCtc);
}

/**
 * Initializes gas limit for users (for ETH/CFX connectors) or opts users
 * into listed tokens (for ALGO connector).
 * Uses the connector from stdlib (derived from REACH_CONNECTOR_MODE env var) by default.
 * @param {[*]} users List of Reach user accounts to configure
 * @param {[*]} tokens List of tokens (for users to opt-in for Algorand)
 */
export async function configureUsersAndTokens(
  users,
  tokens,
  { connector = stdlib.connector, gasLimit = 5000000, logger = log } = {}
) {
  if (connector === "ETH" || connector === "CFX") {
    for (const acc of users) {
      acc.setGasLimit(gasLimit);
    }
  } else if (connector === "ALGO") {
    for (const acc of users) {
      for (const token of tokens) {
        await acc.tokenAccept(token.id);
      }
    }
    logger.trace("Participants opted in");
  } else {
    logger.error("Unsupported connector " + connector);
  }
}
