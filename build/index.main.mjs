// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Contract;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Object({
    creatorFee: ctc0,
    rewardToken: ctc1,
    stakeToken: ctc1,
    underlyingFarmId: ctc2
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Struct([['staked', ctc0], ['reward', ctc0]]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc6]);
  
  
  const v222 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './index.rsh:40:36:application',
    fs: ['at ./index.rsh:38:15:application call to [unknown function] (defined at: ./index.rsh:38:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v223 = v222.creatorFee;
  const v224 = v222.rewardToken;
  const v225 = v222.stakeToken;
  const v226 = v222.underlyingFarmId;
  const v231 = stdlib.tokenEq(v225, v224);
  const v232 = v231 ? false : true;
  stdlib.assert(v232, {
    at: './index.rsh:41:11:application',
    fs: ['at ./index.rsh:38:15:application call to [unknown function] (defined at: ./index.rsh:38:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v225, v224, v226, v223],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:44:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc2, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v234, v235, v236, v237], secs: v239, time: v238, didSend: v44, from: v233 } = txn1;
      
      const v240 = stdlib.tokenEq(v234, v235);
      const v241 = v240 ? false : true;
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v234
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v235
        });
      ;
      
      const v262 = v238;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v235
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v234
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v234, v235, v236, v237], secs: v239, time: v238, didSend: v44, from: v233 } = txn1;
  const v240 = stdlib.tokenEq(v234, v235);
  const v241 = v240 ? false : true;
  stdlib.assert(v241, {
    at: './index.rsh:44:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  ;
  ;
  ;
  stdlib.protect(ctc4, await interact.deployed(), {
    at: './index.rsh:57:22:application',
    fs: ['at ./index.rsh:56:7:application call to [unknown function] (defined at: ./index.rsh:56:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  let v262 = v238;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v295], secs: v297, time: v296, didSend: v138, from: v294 } = txn2;
    undefined /* setApiDetails */;
    const v299 = v295[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
    ;
    ;
    ;
    const v330 = null;
    await txn2.getOutput('stake', 'v330', ctc4, v330);
    const v339 = undefined /* Remote */;
    await txn2.getOutput('internal', 'v339', ctc7, v339);
    const cv262 = v296;
    
    v262 = cv262;
    
    continue;
    
    }
  return;
  
  
  };
export async function User(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Struct([['staked', ctc2], ['reward', ctc2]]);
  const ctc6 = stdlib.T_Tuple([ctc2, ctc4, ctc5]);
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v234, v235, v236, v237], secs: v239, time: v238, didSend: v44, from: v233 } = txn1;
  const v240 = stdlib.tokenEq(v234, v235);
  const v241 = v240 ? false : true;
  stdlib.assert(v241, {
    at: './index.rsh:44:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  ;
  ;
  ;
  stdlib.protect(ctc3, await interact.deployed(), {
    at: './index.rsh:57:22:application',
    fs: ['at ./index.rsh:56:7:application call to [unknown function] (defined at: ./index.rsh:56:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  let v262 = v238;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v295], secs: v297, time: v296, didSend: v138, from: v294 } = txn2;
    undefined /* setApiDetails */;
    const v299 = v295[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
    ;
    ;
    ;
    const v330 = null;
    await txn2.getOutput('stake', 'v330', ctc3, v330);
    const v339 = undefined /* Remote */;
    await txn2.getOutput('internal', 'v339', ctc6, v339);
    const cv262 = v296;
    
    v262 = cv262;
    
    continue;
    
    }
  return;
  
  
  };
export async function stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Struct([['staked', ctc2], ['reward', ctc2]]);
  const ctc6 = stdlib.T_Tuple([ctc2, ctc3, ctc5]);
  
  
  const [v234, v235, v236] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1]);
  const v268 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:66:11:application call to [unknown function] (defined at: ./index.rsh:66:11:function exp)', 'at ./index.rsh:66:11:application call to [unknown function] (defined at: ./index.rsh:66:11:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v269 = v268[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v234, v235, v236, v268],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:21:decimal', stdlib.UInt_max, '0'), [[v269, v234], [stdlib.checkedBigNumberify('./index.rsh:69:48:decimal', stdlib.UInt_max, '0'), v235]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v295], secs: v297, time: v296, didSend: v138, from: v294 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "stake"
        });
      const v299 = v295[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
      ;
      sim_r.txns.push({
        amt: v299,
        kind: 'to',
        tok: v234
        });
      ;
      const v330 = null;
      const v331 = await txn1.getOutput('stake', 'v330', ctc4, v330);
      
      const v339 = [stdlib.checkedBigNumberify('./index.rsh:73:86:application', stdlib.UInt_max, '0'), [stdlib.checkedBigNumberify('./index.rsh:73:86:application', stdlib.UInt_max, '0')], ((sim_r.txns.push({
        accs: [],
        bills: stdlib.checkedBigNumberify('./index.rsh:73:86:application', stdlib.UInt_max, '2'),
        fees: stdlib.checkedBigNumberify('./index.rsh:73:86:application', stdlib.UInt_max, '0'),
        kind: 'remote',
        obj: v236,
        pays: stdlib.checkedBigNumberify('./index.rsh:73:86:application', stdlib.UInt_max, '0'),
        toks: [v235]
        })), undefined)];
      await txn1.getOutput('internal', 'v339', ctc6, v339);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v295], secs: v297, time: v296, didSend: v138, from: v294 } = txn1;
  undefined /* setApiDetails */;
  const v299 = v295[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
  ;
  ;
  ;
  const v330 = null;
  const v331 = await txn1.getOutput('stake', 'v330', ctc4, v330);
  if (v138) {
    stdlib.protect(ctc4, await interact.out(v295, v331), {
      at: './index.rsh:65:7:application',
      fs: ['at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:7:function exp)', 'at ./index.rsh:71:17:application call to "callback" (defined at: ./index.rsh:70:27:function exp)', 'at ./index.rsh:70:27:application call to [unknown function] (defined at: ./index.rsh:70:27:function exp)'],
      msg: 'out',
      who: 'stake'
      });
    }
  else {
    }
  
  const v339 = undefined /* Remote */;
  await txn1.getOutput('internal', 'v339', ctc6, v339);
  return;
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`stake(uint64)byte[0]`],
    pure: [],
    sigs: [`stake(uint64)byte[0]`]
    },
  appApproval: `BiAIAAEIoI0GBAIDECYCAAEAIjUAMRhBAf0oZEkiWzUBJFs1AjYaABdJQQAUIjUEIzUGgb//kc4KEkQ2GgFCABg2GgIXNQQ2GgM2GgEXSSEFDEAAxyEFEkQhBjQBEkQ0BEkiEkw0AhIRRClkSTUDSUkiWzX/JFs1/iEHWzX9STUFNfyABByGT+U0/FCwNPwXNP+IAaOACAAAAAAAAAFKsCg1B4AFYXBwSUQ0/RZQAzX6MgpgMgp4CRYyCjT+cABIFlA1+bEisgGBBrIQNP2yGIAEO0tVFbIaNP6yMLMyCmAyCngJNPkiWwkWMgo0/nAASDT5JFsJFlC3AD5XBABQNfuACAAAAAAAAAFTNPtQsDT7NP80/jT9MgZCAIYiEkQiNAESRDQESSISTDQCEhFESTUFSUoiWzX/JFs1/iEHWzX9gRhbNfyABPbtq9I0/xZQNP4WUDT9FlA0/BZQsCWIAL80/zT+E0QliAC1sSKyASKyEiEEshAyCrIUNP+yEbMliACdsSKyASKyEiEEshAyCrIUNP6yEbM0/zT+NP0yBkIAADX/Nf41/Uk1/BY0/RZQNP4WUClLAVcAGGdIIQY1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 24,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 calls a remote object at /app/index.rsh:73:86:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v234",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v235",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v236",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v237",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v234",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v235",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v236",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v237",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T6",
                "name": "v295",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v330",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "elem1",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "staked",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "elem2",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v339",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T6",
                "name": "v295",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "stake",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620010fd380380620010fd83398101604081905262000026916200032c565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b0390811684860152918101518216606080850191909152818501519092166080840152015160a082015290517f1a84b6d33adbb38783b04efaa2ffe06ea539960deafff888215f729e2570d4339181900360c00190a1620000e48160200151602001516001600160a01b03168260200151600001516001600160a01b031614620000d9576001620000dc565b60005b60076200017a565b620000f2341560086200017a565b6200012d6040805160a08101825260008183018181526060830182905260808301829052825282516020818101909452908152909182015290565b602080830180515183516001600160a01b03918216905281518301518451908216908401529051604090810151845192169101528101514390526200017281620001a4565b505062000421565b81620001a05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b039081168088528951850151821684528951890151821683526003909555436001558751808501959095529151821684880152511682840152845180830390930183526080909101909352805191926200022d926002929091019062000232565b505050565b8280546200024090620003e4565b90600052602060002090601f016020900481019282620002645760008555620002af565b82601f106200027f57805160ff1916838001178555620002af565b82800160010185558215620002af579182015b82811115620002af57825182559160200191906001019062000292565b50620002bd929150620002c1565b5090565b5b80821115620002bd5760008155600101620002c2565b604051608081016001600160401b03811182821017156200030957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200032757600080fd5b919050565b600081830360a08112156200034057600080fd5b604080519081016001600160401b03811182821017156200037157634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200038b57600080fd5b62000395620002d8565b9150620003a5602085016200030f565b8252620003b5604085016200030f565b6020830152620003c8606085016200030f565b6040830152608093909301516060820152602083015250919050565b600181811c90821680620003f957607f821691505b602082108114156200041b57634e487b7160e01b600052602260045260246000fd5b50919050565b610ccc80620004316000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f114610054578063763740c414610078578063832307571461008b578063a694fc3a146100a0578063ab53f2c6146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046109c3565b6100e6565b34801561009757600080fd5b50600154610065565b6100b36100ae3660046109db565b610111565b604051901515815260200161006f565b3480156100cf57600080fd5b506100d8610153565b60405161006f929190610a24565b60408051602081019091526000815261010d61010736849003840184610ac6565b826101f0565b5050565b604080516020810190915260008082529061012a610879565b604080518082019091526020808201868152825282015261014b81836101f0565b505192915050565b60006060600054600280805461016890610b1d565b80601f016020809104026020016040519081016040528092919081815260200182805461019490610b1d565b80156101e15780601f106101b6576101008083540402835291602001916101e1565b820191906000526020600020905b8154815290600101906020018083116101c457829003601f168201915b50505050509050915091509091565b610200600360005414600e6105ce565b815161021b90158061021457508251600154145b600f6105ce565b60008080556002805461022d90610b1d565b80601f016020809104026020016040519081016040528092919081815260200182805461025990610b1d565b80156102a65780601f1061027b576101008083540402835291602001916102a6565b820191906000526020600020905b81548152906001019060200180831161028957829003601f168201915b50505050508060200190518101906102be9190610b6e565b90506102c86108ab565b60408051338152855160208083019190915286015151518183015290517face91d8311c1d42194ceea7a64ba4f6f1d530122abc027407da2595ed96d68e19181900360600190a161031b341560096105ce565b81516020850151515161033b91610334913391906105f4565b600a6105ce565b61035561034e33846020015160006105f4565b600b6105ce565b604051600081527f57172cd225e68388d8d1f6622da271e802d546ed08fb7ea915730ac4a499eb7d9060200160405180910390a160008352602082015161039c903061060c565b604082015281516000906103b0903061060c565b6103ba9190610be8565b60608201526103ca600047610be8565b602080830191909152604080516004815260248101825291820180516001600160e01b0316634e71d92d60e01b17905283810151905160009182916001600160a01b0390911690829061041e908690610c0d565b60006040518083038185875af1925050503d806000811461045b576040519150601f19603f3d011682016040523d82523d6000602084013e610460565b606091505b50915091506104718282600d6106d8565b5060608401518551610483903061060c565b61048d9190610be8565b608085018190526104a09015600c6105ce565b83604001516104b386602001513061060c565b6104bd9190610be8565b8451602090810151919091528401516104d69047610be8565b84515280516104ee9082016020908101908301610c29565b8451604090810191909152845181518151815260208083015151818301529183015180518285015290910151606082015290517f9618a1e6269878ffcb4bbcc94dd248ba124e2e19d368c8efa14236a414a43bbb9181900360800190a16105856040805160a08101825260008183018181526060830182905260808301829052825282516020818101909452908152909182015290565b855181516001600160a01b039182169052602080880151835190831690820152604080890151845193169201919091528101514390526105c481610713565b5050505050505050565b8161010d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006106028385308561079f565b90505b9392505050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b17905291516000928392839291871691839161066791610c0d565b60006040518083038185875af1925050503d80600081146106a4576040519150601f19603f3d011682016040523d82523d6000602084013e6106a9565b606091505b50915091506106ba828260066106d8565b50808060200190518101906106cf9190610c5b565b95945050505050565b606083156106e7575081610605565b8251156106f75782518084602001fd5b60405163100960cb60e01b8152600481018390526024016105eb565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b0390811680885289518501518216845289518901518216835260039095554360015587518085019590955291518216848801525116828401528451808303909301835260809091019093528051919261079a92600292909101906108e0565b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161080691610c0d565b60006040518083038185875af1925050503d8060008114610843576040519150601f19603f3d011682016040523d82523d6000602084013e610848565b606091505b5091509150610859828260016106d8565b508080602001905181019061086e9190610c74565b979650505050505050565b6040518060400160405280600081526020016108a660408051808201909152600060208201908152815290565b905290565b6040518060a001604052806108be610964565b8152602001600081526020016000815260200160008152602001600081525090565b8280546108ec90610b1d565b90600052602060002090601f01602090048101928261090e5760008555610954565b82601f1061092757805160ff1916838001178555610954565b82800160010185558215610954579182015b82811115610954578251825591602001919060010190610939565b506109609291506109ae565b5090565b60405180606001604052806000815260200161098c6040518060200160405280600081525090565b81526020016108a6604051806040016040528060008152602001600081525090565b5b8082111561096057600081556001016109af565b6000604082840312156109d557600080fd5b50919050565b6000602082840312156109ed57600080fd5b5035919050565b60005b83811015610a0f5781810151838201526020016109f7565b83811115610a1e576000848401525b50505050565b8281526040602082015260008251806040840152610a498160608501602087016109f4565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff81118282101715610a8f57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610a8f57634e487b7160e01b600052604160045260246000fd5b60008183036040811215610ad957600080fd5b610ae1610a5e565b833581526020601f1983011215610af757600080fd5b610aff610a95565b9150610b09610a95565b602094850135815282529283015250919050565b600181811c90821680610b3157607f821691505b602082108114156109d557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b6957600080fd5b919050565b600060608284031215610b8057600080fd5b6040516060810181811067ffffffffffffffff82111715610bb157634e487b7160e01b600052604160045260246000fd5b604052610bbd83610b52565b8152610bcb60208401610b52565b6020820152610bdc60408401610b52565b60408201529392505050565b600082821015610c0857634e487b7160e01b600052601160045260246000fd5b500390565b60008251610c1f8184602087016109f4565b9190910192915050565b600060408284031215610c3b57600080fd5b610c43610a5e565b82518152602083015160208201528091505092915050565b600060208284031215610c6d57600080fd5b5051919050565b600060208284031215610c8657600080fd5b8151801515811461060557600080fdfea2646970667358221220a0e9887b1151c3dde4f4f457a8bb362cd6436e3d6aadc0010ca87c39567f364464736f6c634300080c0033`,
  BytecodeLen: 4349,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:79:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:60:56:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "User": User,
  "stake": stake
  };
export const _APIs = {
  stake: stake
  };
