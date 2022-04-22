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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Struct([['staked', ctc2], ['reward', ctc2]]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc8;
  
  const map2_ctc = ctc8;
  
  
  return {
    infos: {
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v490, v491, v492, v494, v512, v515] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v491, v492, v494, v533, v544] = svs;
            return (await ((async (_v556 ) => {
                const v556 = stdlib.protect(ctc0, _v556, null);
              
              const v557 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v556), null);
              const v558 = stdlib.fromSome(v557, stdlib.checkedBigNumberify('./farm.rsh:71:77:decimal', stdlib.UInt_max, '0'));
              const v559 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v556), null);
              const v560 = stdlib.fromSome(v559, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
              const v561 = {
                reward: v560,
                staked: v558
                };
              
              return v561;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc5, ctc2],
      4: [ctc1, ctc1, ctc2, ctc2, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    beginBlock: ctc1,
    endBlock: ctc1,
    rewardPerBlock: ctc1,
    rewardToken: ctc3,
    stakeToken: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    claim0_122: ctc5,
    stake0_122: ctc6
    });
  const ctc8 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v469 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v470 = [v469, v469];
  const v476 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './farm.rsh:54:36:application',
    fs: ['at ./farm.rsh:52:15:application call to [unknown function] (defined at: ./farm.rsh:52:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v477 = v476.beginBlock;
  const v478 = v476.endBlock;
  const v479 = v476.rewardPerBlock;
  const v480 = v476.rewardToken;
  const v481 = v476.stakeToken;
  const v487 = stdlib.tokenEq(v481, v480);
  const v488 = v487 ? false : true;
  stdlib.assert(v488, {
    at: './farm.rsh:55:11:application',
    fs: ['at ./farm.rsh:52:15:application call to [unknown function] (defined at: ./farm.rsh:52:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v489 = stdlib.lt(v477, v478);
  stdlib.assert(v489, {
    at: './farm.rsh:57:11:application',
    fs: ['at ./farm.rsh:52:15:application call to [unknown function] (defined at: ./farm.rsh:52:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v481, v480, v477, v478, v479],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:60:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v491, v492, v493, v494, v495], secs: v497, time: v496, didSend: v48, from: v490 } = txn1;
      
      const v498 = stdlib.tokenEq(v491, v492);
      const v499 = v498 ? false : true;
      ;
      const v500 = v470[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '0')];
      const v502 = v500[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1')];
      const v503 = v500[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '2')];
      const v504 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v502, v503];
      const v505 = stdlib.Array_set(v470, stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '0'), v504);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v491
        });
      const v507 = v505[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1')];
      const v509 = v507[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1')];
      const v510 = v507[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '2')];
      const v511 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v509, v510];
      const v512 = stdlib.Array_set(v505, stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1'), v511);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v492
        });
      ;
      const v514 = stdlib.sub(v494, v493);
      const v515 = stdlib.mul(v514, v495);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v491, v492, v493, v494, v495], secs: v497, time: v496, didSend: v48, from: v490 } = txn1;
  const v498 = stdlib.tokenEq(v491, v492);
  const v499 = v498 ? false : true;
  stdlib.assert(v499, {
    at: './farm.rsh:60:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v500 = v470[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '0')];
  const v502 = v500[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1')];
  const v503 = v500[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '2')];
  const v504 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v502, v503];
  const v505 = stdlib.Array_set(v470, stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '0'), v504);
  ;
  const v507 = v505[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1')];
  const v509 = v507[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1')];
  const v510 = v507[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '2')];
  const v511 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v509, v510];
  const v512 = stdlib.Array_set(v505, stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1'), v511);
  ;
  ;
  const v514 = stdlib.sub(v494, v493);
  const v515 = stdlib.mul(v514, v495);
  const txn2 = await (ctc.sendrecv({
    args: [v490, v491, v492, v494, v512, v515],
    evt_cnt: 0,
    funcNum: 1,
    lct: v496,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '0'), [[v515, v492]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v518, time: v517, didSend: v57, from: v516 } = txn2;
      
      ;
      const v519 = v512[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '1')];
      const v520 = v519[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '0')];
      const v521 = stdlib.add(v520, v515);
      const v524 = v519[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '1')];
      const v525 = v519[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '2')];
      const v526 = [v521, v524, v525];
      const v527 = stdlib.Array_set(v512, stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '1'), v526);
      sim_r.txns.push({
        amt: v515,
        kind: 'to',
        tok: v492
        });
      const v528 = stdlib.addressEq(v490, v516);
      ;
      
      const v533 = stdlib.checkedBigNumberify('./farm.rsh:92:35:decimal', stdlib.UInt_max, '0');
      const v538 = v517;
      const v544 = v527;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v492
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v491
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
    tys: [ctc9, ctc3, ctc3, ctc1, ctc12, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v518, time: v517, didSend: v57, from: v516 } = txn2;
  ;
  const v519 = v512[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '1')];
  const v520 = v519[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '0')];
  const v521 = stdlib.add(v520, v515);
  const v524 = v519[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '1')];
  const v525 = v519[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '2')];
  const v526 = [v521, v524, v525];
  const v527 = stdlib.Array_set(v512, stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '1'), v526);
  ;
  const v528 = stdlib.addressEq(v490, v516);
  stdlib.assert(v528, {
    at: './farm.rsh:69:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './farm.rsh:83:22:application',
    fs: ['at ./farm.rsh:82:7:application call to [unknown function] (defined at: ./farm.rsh:82:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  let v533 = stdlib.checkedBigNumberify('./farm.rsh:92:35:decimal', stdlib.UInt_max, '0');
  let v538 = v517;
  let v544 = v527;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v638], secs: v640, time: v639, didSend: v305, from: v637 } = txn3;
    switch (v638[0]) {
      case 'claim0_122': {
        const v641 = v638[1];
        undefined /* setApiDetails */;
        ;
        const v689 = v544[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v690 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v694 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v695 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
        const v696 = [v690, v694, v695];
        const v697 = stdlib.Array_set(v544, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0'), v696);
        ;
        const v698 = v697[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v699 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v703 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v704 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
        const v705 = [v699, v703, v704];
        const v706 = stdlib.Array_set(v697, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1'), v705);
        ;
        const v708 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v637), null);
        const v709 = stdlib.fromSome(v708, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
        const v710 = v706[stdlib.checkedBigNumberify('./farm.rsh:128:37:application', stdlib.UInt_max, '1')];
        const v711 = v710[stdlib.checkedBigNumberify('./farm.rsh:128:37:application', stdlib.UInt_max, '0')];
        const v712 = stdlib.lt(v709, v711);
        stdlib.assert(v712, {
          at: './farm.rsh:128:14:application',
          fs: ['at ./farm.rsh:127:18:application call to [unknown function] (defined at: ./farm.rsh:127:18:function exp)'],
          msg: null,
          who: 'Creator'
          });
        await stdlib.mapSet(map1, v637, stdlib.checkedBigNumberify('./farm.rsh:131:25:decimal', stdlib.UInt_max, '0'));
        const v715 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v637), null);
        const v716 = stdlib.fromSome(v715, stdlib.checkedBigNumberify('./farm.rsh:71:77:decimal', stdlib.UInt_max, '0'));
        const v719 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          staked: v716
          };
        await txn3.getOutput('claim', 'v719', ctc8, v719);
        const v736 = stdlib.sub(v711, v709);
        const v739 = v710[stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '1')];
        const v740 = v710[stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '2')];
        const v741 = [v736, v739, v740];
        const v742 = stdlib.Array_set(v706, stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '1'), v741);
        ;
        const cv533 = v533;
        const cv538 = v639;
        const cv544 = v742;
        
        v533 = cv533;
        v538 = cv538;
        v544 = cv544;
        
        continue;
        break;
        }
      case 'stake0_122': {
        const v769 = v638[1];
        undefined /* setApiDetails */;
        const v784 = v769[stdlib.checkedBigNumberify('./farm.rsh:101:9:spread', stdlib.UInt_max, '0')];
        ;
        const v817 = v544[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v818 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v819 = stdlib.add(v818, v784);
        const v822 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v823 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
        const v824 = [v819, v822, v823];
        const v825 = stdlib.Array_set(v544, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0'), v824);
        ;
        const v826 = v825[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v827 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v831 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v832 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
        const v833 = [v827, v831, v832];
        const v834 = stdlib.Array_set(v825, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1'), v833);
        ;
        const v877 = stdlib.le(v533, v494);
        stdlib.assert(v877, {
          at: './farm.rsh:108:14:application',
          fs: ['at ./farm.rsh:107:27:application call to [unknown function] (defined at: ./farm.rsh:107:27:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v878 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v637), null);
        const v879 = stdlib.fromSome(v878, stdlib.checkedBigNumberify('./farm.rsh:71:77:decimal', stdlib.UInt_max, '0'));
        const v880 = stdlib.add(v879, v784);
        await stdlib.mapSet(map0, v637, v880);
        const v883 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v637), null);
        const v884 = stdlib.fromSome(v883, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
        const v885 = {
          reward: v884,
          staked: v880
          };
        await txn3.getOutput('stake', 'v885', ctc8, v885);
        const cv533 = v533;
        const cv538 = v639;
        const cv544 = v834;
        
        v533 = cv533;
        v538 = cv538;
        v544 = cv544;
        
        continue;
        break;
        }
      }
    
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Data({
    claim0_122: ctc4,
    stake0_122: ctc5
    });
  const ctc7 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v469 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v470 = [v469, v469];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v491, v492, v493, v494, v495], secs: v497, time: v496, didSend: v48, from: v490 } = txn1;
  const v498 = stdlib.tokenEq(v491, v492);
  const v499 = v498 ? false : true;
  stdlib.assert(v499, {
    at: './farm.rsh:60:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v500 = v470[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '0')];
  const v502 = v500[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1')];
  const v503 = v500[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '2')];
  const v504 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v502, v503];
  const v505 = stdlib.Array_set(v470, stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '0'), v504);
  ;
  const v507 = v505[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1')];
  const v509 = v507[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1')];
  const v510 = v507[stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '2')];
  const v511 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v509, v510];
  const v512 = stdlib.Array_set(v505, stdlib.checkedBigNumberify('./farm.rsh:60:11:dot', stdlib.UInt_max, '1'), v511);
  ;
  ;
  const v514 = stdlib.sub(v494, v493);
  const v515 = stdlib.mul(v514, v495);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v518, time: v517, didSend: v57, from: v516 } = txn2;
  ;
  const v519 = v512[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '1')];
  const v520 = v519[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '0')];
  const v521 = stdlib.add(v520, v515);
  const v524 = v519[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '1')];
  const v525 = v519[stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '2')];
  const v526 = [v521, v524, v525];
  const v527 = stdlib.Array_set(v512, stdlib.checkedBigNumberify('./farm.rsh:69:11:dot', stdlib.UInt_max, '1'), v526);
  ;
  const v528 = stdlib.addressEq(v490, v516);
  stdlib.assert(v528, {
    at: './farm.rsh:69:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './farm.rsh:83:22:application',
    fs: ['at ./farm.rsh:82:7:application call to [unknown function] (defined at: ./farm.rsh:82:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  let v533 = stdlib.checkedBigNumberify('./farm.rsh:92:35:decimal', stdlib.UInt_max, '0');
  let v538 = v517;
  let v544 = v527;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v638], secs: v640, time: v639, didSend: v305, from: v637 } = txn3;
    switch (v638[0]) {
      case 'claim0_122': {
        const v641 = v638[1];
        undefined /* setApiDetails */;
        ;
        const v689 = v544[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v690 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v694 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v695 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
        const v696 = [v690, v694, v695];
        const v697 = stdlib.Array_set(v544, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0'), v696);
        ;
        const v698 = v697[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v699 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v703 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v704 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
        const v705 = [v699, v703, v704];
        const v706 = stdlib.Array_set(v697, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1'), v705);
        ;
        const v708 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v637), null);
        const v709 = stdlib.fromSome(v708, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
        const v710 = v706[stdlib.checkedBigNumberify('./farm.rsh:128:37:application', stdlib.UInt_max, '1')];
        const v711 = v710[stdlib.checkedBigNumberify('./farm.rsh:128:37:application', stdlib.UInt_max, '0')];
        const v712 = stdlib.lt(v709, v711);
        stdlib.assert(v712, {
          at: './farm.rsh:128:14:application',
          fs: ['at ./farm.rsh:127:18:application call to [unknown function] (defined at: ./farm.rsh:127:18:function exp)'],
          msg: null,
          who: 'User'
          });
        await stdlib.mapSet(map1, v637, stdlib.checkedBigNumberify('./farm.rsh:131:25:decimal', stdlib.UInt_max, '0'));
        const v715 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v637), null);
        const v716 = stdlib.fromSome(v715, stdlib.checkedBigNumberify('./farm.rsh:71:77:decimal', stdlib.UInt_max, '0'));
        const v719 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          staked: v716
          };
        await txn3.getOutput('claim', 'v719', ctc7, v719);
        const v736 = stdlib.sub(v711, v709);
        const v739 = v710[stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '1')];
        const v740 = v710[stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '2')];
        const v741 = [v736, v739, v740];
        const v742 = stdlib.Array_set(v706, stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '1'), v741);
        ;
        const cv533 = v533;
        const cv538 = v639;
        const cv544 = v742;
        
        v533 = cv533;
        v538 = cv538;
        v544 = cv544;
        
        continue;
        break;
        }
      case 'stake0_122': {
        const v769 = v638[1];
        undefined /* setApiDetails */;
        const v784 = v769[stdlib.checkedBigNumberify('./farm.rsh:101:9:spread', stdlib.UInt_max, '0')];
        ;
        const v817 = v544[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v818 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v819 = stdlib.add(v818, v784);
        const v822 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v823 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
        const v824 = [v819, v822, v823];
        const v825 = stdlib.Array_set(v544, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0'), v824);
        ;
        const v826 = v825[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v827 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
        const v831 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
        const v832 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
        const v833 = [v827, v831, v832];
        const v834 = stdlib.Array_set(v825, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1'), v833);
        ;
        const v877 = stdlib.le(v533, v494);
        stdlib.assert(v877, {
          at: './farm.rsh:108:14:application',
          fs: ['at ./farm.rsh:107:27:application call to [unknown function] (defined at: ./farm.rsh:107:27:function exp)'],
          msg: null,
          who: 'User'
          });
        const v878 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v637), null);
        const v879 = stdlib.fromSome(v878, stdlib.checkedBigNumberify('./farm.rsh:71:77:decimal', stdlib.UInt_max, '0'));
        const v880 = stdlib.add(v879, v784);
        await stdlib.mapSet(map0, v637, v880);
        const v883 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v637), null);
        const v884 = stdlib.fromSome(v883, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
        const v885 = {
          reward: v884,
          staked: v880
          };
        await txn3.getOutput('stake', 'v885', ctc7, v885);
        const cv533 = v533;
        const cv538 = v639;
        const cv544 = v834;
        
        v533 = cv533;
        v538 = cv538;
        v544 = cv544;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    claim0_122: ctc7,
    stake0_122: ctc8
    });
  const ctc10 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v491, v492, v494, v533, v544] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc6]);
  const v575 = ctc.selfAddress();
  const v577 = stdlib.protect(ctc7, await interact.in(), {
    at: './farm.rsh:1:23:application',
    fs: ['at ./farm.rsh:123:10:application call to [unknown function] (defined at: ./farm.rsh:123:10:function exp)', 'at ./farm.rsh:92:21:application call to "runclaim0_122" (defined at: ./farm.rsh:121:9:function exp)', 'at ./farm.rsh:92:21:application call to [unknown function] (defined at: ./farm.rsh:92:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v579 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v575), null);
  const v580 = stdlib.fromSome(v579, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
  const v581 = v544[stdlib.checkedBigNumberify('./farm.rsh:124:37:application', stdlib.UInt_max, '1')];
  const v582 = v581[stdlib.checkedBigNumberify('./farm.rsh:124:37:application', stdlib.UInt_max, '0')];
  const v583 = stdlib.lt(v580, v582);
  stdlib.assert(v583, {
    at: './farm.rsh:124:14:application',
    fs: ['at ./farm.rsh:123:10:application call to [unknown function] (defined at: ./farm.rsh:123:10:function exp)', 'at ./farm.rsh:123:10:application call to [unknown function] (defined at: ./farm.rsh:123:10:function exp)', 'at ./farm.rsh:92:21:application call to "runclaim0_122" (defined at: ./farm.rsh:121:9:function exp)', 'at ./farm.rsh:92:21:application call to [unknown function] (defined at: ./farm.rsh:92:21:function exp)'],
    msg: null,
    who: 'claim'
    });
  const v586 = ['claim0_122', v577];
  
  const txn1 = await (ctc.sendrecv({
    args: [v491, v492, v494, v533, v544, v586],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:126:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./farm.rsh:126:18:decimal', stdlib.UInt_max, '0'), v491], [stdlib.checkedBigNumberify('./farm.rsh:126:35:decimal', stdlib.UInt_max, '0'), v492]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v638], secs: v640, time: v639, didSend: v305, from: v637 } = txn1;
      
      switch (v638[0]) {
        case 'claim0_122': {
          const v641 = v638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v689 = v544[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
          const v690 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
          const v694 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
          const v695 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
          const v696 = [v690, v694, v695];
          const v697 = stdlib.Array_set(v544, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0'), v696);
          ;
          const v698 = v697[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
          const v699 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
          const v703 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
          const v704 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
          const v705 = [v699, v703, v704];
          const v706 = stdlib.Array_set(v697, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1'), v705);
          ;
          const v708 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v637), null);
          const v709 = stdlib.fromSome(v708, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
          const v710 = v706[stdlib.checkedBigNumberify('./farm.rsh:128:37:application', stdlib.UInt_max, '1')];
          const v711 = v710[stdlib.checkedBigNumberify('./farm.rsh:128:37:application', stdlib.UInt_max, '0')];
          const v712 = stdlib.lt(v709, v711);
          ;
          await stdlib.simMapSet(sim_r, 1, v637, stdlib.checkedBigNumberify('./farm.rsh:131:25:decimal', stdlib.UInt_max, '0'));
          const v715 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v637), null);
          const v716 = stdlib.fromSome(v715, stdlib.checkedBigNumberify('./farm.rsh:71:77:decimal', stdlib.UInt_max, '0'));
          const v719 = {
            reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            staked: v716
            };
          const v721 = await txn1.getOutput('claim', 'v719', ctc10, v719);
          
          const v736 = stdlib.sub(v711, v709);
          const v739 = v710[stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '1')];
          const v740 = v710[stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '2')];
          const v741 = [v736, v739, v740];
          const v742 = stdlib.Array_set(v706, stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '1'), v741);
          sim_r.txns.push({
            amt: v709,
            kind: 'from',
            to: v637,
            tok: v492
            });
          const v1347 = v533;
          const v1349 = v742;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stake0_122': {
          const v769 = v638[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc6, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v638], secs: v640, time: v639, didSend: v305, from: v637 } = txn1;
  switch (v638[0]) {
    case 'claim0_122': {
      const v641 = v638[1];
      undefined /* setApiDetails */;
      ;
      const v689 = v544[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
      const v690 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
      const v694 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
      const v695 = v689[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
      const v696 = [v690, v694, v695];
      const v697 = stdlib.Array_set(v544, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0'), v696);
      ;
      const v698 = v697[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
      const v699 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
      const v703 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
      const v704 = v698[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
      const v705 = [v699, v703, v704];
      const v706 = stdlib.Array_set(v697, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1'), v705);
      ;
      const v708 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v637), null);
      const v709 = stdlib.fromSome(v708, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
      const v710 = v706[stdlib.checkedBigNumberify('./farm.rsh:128:37:application', stdlib.UInt_max, '1')];
      const v711 = v710[stdlib.checkedBigNumberify('./farm.rsh:128:37:application', stdlib.UInt_max, '0')];
      const v712 = stdlib.lt(v709, v711);
      stdlib.assert(v712, {
        at: './farm.rsh:128:14:application',
        fs: ['at ./farm.rsh:127:18:application call to [unknown function] (defined at: ./farm.rsh:127:18:function exp)'],
        msg: null,
        who: 'claim'
        });
      await stdlib.mapSet(map1, v637, stdlib.checkedBigNumberify('./farm.rsh:131:25:decimal', stdlib.UInt_max, '0'));
      const v715 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v637), null);
      const v716 = stdlib.fromSome(v715, stdlib.checkedBigNumberify('./farm.rsh:71:77:decimal', stdlib.UInt_max, '0'));
      const v719 = {
        reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        staked: v716
        };
      const v721 = await txn1.getOutput('claim', 'v719', ctc10, v719);
      if (v305) {
        stdlib.protect(ctc0, await interact.out(v641, v721), {
          at: './farm.rsh:122:7:application',
          fs: ['at ./farm.rsh:122:7:application call to [unknown function] (defined at: ./farm.rsh:122:7:function exp)', 'at ./farm.rsh:133:17:application call to "callback" (defined at: ./farm.rsh:127:18:function exp)', 'at ./farm.rsh:127:18:application call to [unknown function] (defined at: ./farm.rsh:127:18:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      const v736 = stdlib.sub(v711, v709);
      const v739 = v710[stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '1')];
      const v740 = v710[stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '2')];
      const v741 = [v736, v739, v740];
      const v742 = stdlib.Array_set(v706, stdlib.checkedBigNumberify('./farm.rsh:135:54:application', stdlib.UInt_max, '1'), v741);
      ;
      const v1347 = v533;
      const v1349 = v742;
      return;
      
      break;
      }
    case 'stake0_122': {
      const v769 = v638[1];
      return;
      break;
      }
    }
  
  
  };
export async function stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    claim0_122: ctc8,
    stake0_122: ctc7
    });
  const ctc10 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v491, v492, v494, v533, v544] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc6]);
  const v565 = stdlib.protect(ctc7, await interact.in(), {
    at: './farm.rsh:1:23:application',
    fs: ['at ./farm.rsh:103:11:application call to [unknown function] (defined at: ./farm.rsh:103:11:function exp)', 'at ./farm.rsh:92:21:application call to "runstake0_122" (defined at: ./farm.rsh:101:9:function exp)', 'at ./farm.rsh:92:21:application call to [unknown function] (defined at: ./farm.rsh:92:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v566 = v565[stdlib.checkedBigNumberify('./farm.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v569 = stdlib.le(v533, v494);
  stdlib.assert(v569, {
    at: './farm.rsh:104:14:application',
    fs: ['at ./farm.rsh:103:11:application call to [unknown function] (defined at: ./farm.rsh:103:11:function exp)', 'at ./farm.rsh:103:11:application call to [unknown function] (defined at: ./farm.rsh:103:11:function exp)', 'at ./farm.rsh:92:21:application call to "runstake0_122" (defined at: ./farm.rsh:101:9:function exp)', 'at ./farm.rsh:92:21:application call to [unknown function] (defined at: ./farm.rsh:92:21:function exp)'],
    msg: null,
    who: 'stake'
    });
  const v573 = ['stake0_122', v565];
  
  const txn1 = await (ctc.sendrecv({
    args: [v491, v492, v494, v533, v544, v573],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:106:21:decimal', stdlib.UInt_max, '0'), [[v566, v491], [stdlib.checkedBigNumberify('./farm.rsh:106:48:decimal', stdlib.UInt_max, '0'), v492]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v638], secs: v640, time: v639, didSend: v305, from: v637 } = txn1;
      
      switch (v638[0]) {
        case 'claim0_122': {
          const v641 = v638[1];
          
          break;
          }
        case 'stake0_122': {
          const v769 = v638[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v784 = v769[stdlib.checkedBigNumberify('./farm.rsh:101:9:spread', stdlib.UInt_max, '0')];
          ;
          const v817 = v544[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
          const v818 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
          const v819 = stdlib.add(v818, v784);
          const v822 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
          const v823 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
          const v824 = [v819, v822, v823];
          const v825 = stdlib.Array_set(v544, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0'), v824);
          sim_r.txns.push({
            amt: v784,
            kind: 'to',
            tok: v491
            });
          const v826 = v825[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
          const v827 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
          const v831 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
          const v832 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
          const v833 = [v827, v831, v832];
          const v834 = stdlib.Array_set(v825, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1'), v833);
          ;
          const v877 = stdlib.le(v533, v494);
          ;
          const v878 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v637), null);
          const v879 = stdlib.fromSome(v878, stdlib.checkedBigNumberify('./farm.rsh:71:77:decimal', stdlib.UInt_max, '0'));
          const v880 = stdlib.add(v879, v784);
          await stdlib.simMapSet(sim_r, 0, v637, v880);
          const v883 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v637), null);
          const v884 = stdlib.fromSome(v883, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
          const v885 = {
            reward: v884,
            staked: v880
            };
          const v887 = await txn1.getOutput('stake', 'v885', ctc10, v885);
          
          const v1356 = v533;
          const v1358 = v834;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc6, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v638], secs: v640, time: v639, didSend: v305, from: v637 } = txn1;
  switch (v638[0]) {
    case 'claim0_122': {
      const v641 = v638[1];
      return;
      break;
      }
    case 'stake0_122': {
      const v769 = v638[1];
      undefined /* setApiDetails */;
      const v784 = v769[stdlib.checkedBigNumberify('./farm.rsh:101:9:spread', stdlib.UInt_max, '0')];
      ;
      const v817 = v544[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
      const v818 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
      const v819 = stdlib.add(v818, v784);
      const v822 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
      const v823 = v817[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
      const v824 = [v819, v822, v823];
      const v825 = stdlib.Array_set(v544, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0'), v824);
      ;
      const v826 = v825[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
      const v827 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '0')];
      const v831 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1')];
      const v832 = v826[stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '2')];
      const v833 = [v827, v831, v832];
      const v834 = stdlib.Array_set(v825, stdlib.checkedBigNumberify('./farm.rsh:92:21:dot', stdlib.UInt_max, '1'), v833);
      ;
      const v877 = stdlib.le(v533, v494);
      stdlib.assert(v877, {
        at: './farm.rsh:108:14:application',
        fs: ['at ./farm.rsh:107:27:application call to [unknown function] (defined at: ./farm.rsh:107:27:function exp)'],
        msg: null,
        who: 'stake'
        });
      const v878 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v637), null);
      const v879 = stdlib.fromSome(v878, stdlib.checkedBigNumberify('./farm.rsh:71:77:decimal', stdlib.UInt_max, '0'));
      const v880 = stdlib.add(v879, v784);
      await stdlib.mapSet(map0, v637, v880);
      const v883 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v637), null);
      const v884 = stdlib.fromSome(v883, stdlib.checkedBigNumberify('./farm.rsh:72:77:decimal', stdlib.UInt_max, '0'));
      const v885 = {
        reward: v884,
        staked: v880
        };
      const v887 = await txn1.getOutput('stake', 'v885', ctc10, v885);
      if (v305) {
        stdlib.protect(ctc0, await interact.out(v769, v887), {
          at: './farm.rsh:102:7:application',
          fs: ['at ./farm.rsh:102:7:application call to [unknown function] (defined at: ./farm.rsh:102:7:function exp)', 'at ./farm.rsh:111:17:application call to "callback" (defined at: ./farm.rsh:107:27:function exp)', 'at ./farm.rsh:107:27:application call to [unknown function] (defined at: ./farm.rsh:107:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      const v1356 = v533;
      const v1358 = v834;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`claim()(uint64,uint64)`, `stake(uint64)(uint64,uint64)`],
    pure: [`local(address)(uint64,uint64)`],
    sigs: [`claim()(uint64,uint64)`, `local(address)(uint64,uint64)`, `stake(uint64)(uint64,uint64)`]
    },
  appApproval: `BiAMAAEIBKCNBhv6yu6lAZWqrdoDAxAYICYDAQAAAQEiNQAxGEEEtilkSSJbNQEkWzUCMRkjEkEACjEAKCEFr2ZCBIM2GgAXSUEAdCI1BCM1BkkhBgxAAFRJIQcMQAARIQcSRCk1/yg0/1Akr1BCAG0hBhJENAElEkQ2GgE1/yI0/4gEYlcACUk1/iNbNP4iVU0WIjT/iAROVwkJSTX+I1s0/iJVTRZQNQdCBCmBzcj6HhJENhoBNf8qNP9QQgAeNhoCFzUENhoDNhoBF0kjDEACk0khCAxAAhkhCBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJIls1/yRbNf4hCVs1/SEKWzX8VyAiNftJNQU1+oAEkfGnmjT6ULA0+iJVQAD9NPtXABFJNflXAAg0+VcICFA0+VcQAVA0+1cREVA1+DT4VxERNfc0+FcAETT3VwAINPdXCAhQNPdXEAFQUDX2IjEAiAN/VwkJSTX0I1s09CJVTTX1NPZXERFJNfQiWzXzNPU08wxEMQAoMQCIA1aACQEAAAAAAAAAADXySVcACTTyUExXEglQZoAIAAAAAAAAAs8iMQCIAyxXAAlJNfIjWzTyIlVNFiSvUFCwIjEAiAMTVwAJSTXyI1s08iJVTRYkr1A1B7EisgE09bISJbIQMQCyFDT+shGzNP80/jT9NPwyBjT2VwARNPM09QkWNPRXCAhQNPRXEAFQUEICPzT6VwEINfk0+Rc1+DT7VwARSTX3Ils0+AgWNPdXCAhQNPdXEAFQNPtXERFQNfY0+DT/iAK5NPZXERE19TT8NP0ORCIxAIgCf1cACUk18yNbNPMiVU00+Ag19DEAKDEAiAJlKjT0FlA181cJEjTzTFBmgAgAAAAAAAADdTT0FiIxAIgCQ1cJCUk18yNbNPMiVU0WUFCwNPQWIjEAiAIpVwkJSTXzI1s08yJVTRZQNQc0/zT+NP00/DIGNPZXABE09VcACDT1VwgIUDT1VxABUFBCAWwjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSYEoWzX/VzgiNf6BWls1/YAEmouRdLA0/lcRETX8NP00/4gB3TQDVwAgMQASRDQDIQtbNP80A4EwWyIyBjT+VwARNPwiWzT9CBY0/FcICFA0/FcQAVBQQgD5SCI0ARJENARJIhJMNAISEURJNQVJSkkiWzX/JFs1/iEJWzX9IQpbNfwhC1s1+4AETX4HJzT/FlA0/hZQNP0WUDT8FlA0+xZQsCEEiAFCgRGvSTX6SVA1+TT/NP4TRDT5VwARNfgkrzT4VwgIUDT4VxABUDT5VxERUDX3IQSIARCxIrIBIrISJbIQMgqyFDT/shGzNPdXERE19jT3VwARJK809lcICFA09lcQAVBQNfUhBIgA27EisgEishIlshAyCrIUNP6yEbM0/DT9CTT7CzX0MQA0/xZQNP4WUDT8FlA09VA09BZQKEsBVwBiZ0gjNQEyBjUCQgBLNf81/jX9Nfw1+0k1+hY0+xZQNPwWUDT9FlA0/1AoSwFXAEJnSCU1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/w0kxGGFAAAVIIQWviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 27,
  stateKeys: 1,
  stateSize: 98,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "name": "v491",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v492",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v493",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v494",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v495",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v491",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v492",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v493",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v494",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v495",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_122",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_stake0_122",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v638",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
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
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v719",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
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
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v885",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
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
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_122",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_stake0_122",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v638",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claim",
    "outputs": [
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
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v1359",
        "type": "address"
      }
    ],
    "name": "local",
    "outputs": [
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
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
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
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
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
  Bytecode: `0x60806040526040516200255338038062002553833981016040819052620000269162000565565b60008055436003556200003862000331565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291810151909116606080840191909152818401516080808501919091529082015160a0840152015160c082015290517f8742db521984f4fa3bc3bf8e2620c59a1433c50d25a2b74c21610a751ec525619181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152828101519081015190516200011a916001600160a01b039182169116146200010f57600162000112565b60005b600862000284565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015c9290620002ae565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a29190600190620002ae565b60a0820152620001b53415600962000284565b6020820151608081015160408201516060909201519091620001d7916200064e565b620001e3919062000668565b60c0820152620001f2620003d2565b33815260208084018051516001600160a01b039081168385015281518301511660408085019190915290516060908101519084015260a080850151608085015260c085015190840152600160008190554390555162000254918391016200068a565b604051602081830303815290604052600290805190602001906200027a9291906200041e565b5050505062000775565b81620002aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002b8620004ad565b60005b60028110156200030e57848160028110620002da57620002da62000622565b6020020151828260028110620002f457620002f462000622565b60200201528062000305816200071a565b915050620002bb565b508181846002811062000325576200032562000622565b60200201529392505050565b604080516101408101909152600060e08201818152610100830182905261012083019190915281526020810162000367620004ad565b8152604080516060810182526000808252602082810182905292820152910190815260200162000396620004ad565b81526040805160608101825260008082526020828101829052928201529101908152602001620003c5620004ad565b8152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001620003c5620004ad565b8280546200042c9062000738565b90600052602060002090601f0160209004810192826200045057600085556200049b565b82601f106200046b57805160ff19168380011785556200049b565b828001600101855582156200049b579182015b828111156200049b5782518255916020019190600101906200047e565b50620004a9929150620004fa565b5090565b60405180604001604052806002905b620004e3604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004bc5790505090565b5b80821115620004a95760008155600101620004fb565b60405160a081016001600160401b03811182821017156200054257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200056057600080fd5b919050565b600081830360c08112156200057957600080fd5b604080519081016001600160401b0381118282101715620005aa57634e487b7160e01b600052604160045260246000fd5b6040528351815260a0601f1983011215620005c457600080fd5b620005ce62000511565b9150620005de6020850162000548565b8252620005ee6040850162000548565b6020830152606084015160408301526080840151606083015260a08401516080830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101562000663576200066362000638565b500390565b600081600019048311821515161562000685576200068562000638565b500290565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501518185015260808086015161016086019492939291860160005b6002811015620007035782518051835285810151868401528401511515848301529184019190850190600101620006d1565b50505050505060a083015161014083015292915050565b600060001982141562000731576200073162000638565b5060010190565b600181811c908216806200074d57607f821691505b602082108114156200076f57634e487b7160e01b600052602260045260246000fd5b50919050565b611dce80620007856000396000f3fe60806040526004361061009a5760003560e01c8063817d57f311610061578063817d57f31461014a578063832307571461016a578063a694fc3a1461017f578063ab53f2c614610192578063c462630d146101b5578063cadc2e7a146101c857005b80630ff1680e146100a35780631e93b0f1146100e35780632c10a159146101025780633bc5b7bf146101155780634e71d92d1461014257005b366100a157005b005b3480156100af57600080fd5b506100c36100be36600461179a565b6101e8565b604080518251815260209283015192810192909252015b60405180910390f35b3480156100ef57600080fd5b506003545b6040519081526020016100da565b6100a16101103660046117b7565b610414565b34801561012157600080fd5b5061013561013036600461179a565b610438565b6040516100da9190611803565b6100c3610464565b34801561015657600080fd5b5061013561016536600461179a565b6104e4565b34801561017657600080fd5b506001546100f4565b6100c361018d366004611833565b61050a565b34801561019e57600080fd5b506101a7610597565b6040516100da929190611878565b6100a16101c33660046118b2565b610634565b3480156101d457600080fd5b506101356101e336600461179a565b610654565b6040805180820190915260008082526020820152600160005414156102b757600060028054610216906118c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610242906118c4565b801561028f5780601f106102645761010080835404028352916020019161028f565b820191906000526020600020905b81548152906001019060200180831161027257829003601f168201915b50505050508060200190518101906102a79190611a15565b90506102b56000600761067a565b505b60046000541415610403576000600280546102d1906118c4565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd906118c4565b801561034a5780601f1061031f5761010080835404028352916020019161034a565b820191906000526020600020905b81548152906001019060200180831161032d57829003601f168201915b50505050508060200190518101906103629190611ab0565b9050610384604080516060810182526000602082018181529282015290815290565b600161038f856106a0565b5160018111156103a1576103a16117cf565b146103ad5760006103bb565b6103b6846106a0565b604001515b81515260016103c985610772565b5160018111156103db576103db6117cf565b146103e75760006103f5565b6103f084610772565b604001515b815160200152519392505050565b61040f6000600761067a565b919050565b61041c61144c565b61043461042e36849003840184611b38565b826107ff565b5050565b604080516060810182526000808252602082018190529181019190915261045e826106a0565b92915050565b604080518082019091526000808252602082015261048061144c565b61048861148b565b6104b4604080516060810182526000808252602080830182905283519081018452908152909182015290565b6000602082810182905290825260408051808301909152828152908301526104dc8284610a37565b505051919050565b604080516060810182526000808252602082018190529181019190915261045e826110ae565b604080518082019091526000808252602082015261052661144c565b61052e61148b565b61055a604080516060810182526000808252602080830182905283519081018452908152909182015290565b60408051602080820183528782528383019190915260018352815180820190925282825283015261058b8284610a37565b50506020015192915050565b6000606060005460028080546105ac906118c4565b80601f01602080910402602001604051908101604052809291908181526020018280546105d8906118c4565b80156106255780601f106105fa57610100808354040283529160200191610625565b820191906000526020600020905b81548152906001019060200180831161060857829003601f168201915b50505050509050915091509091565b61063c61144c565b61043461064e36849003840184611b70565b82610a37565b604080516060810182526000808252602082018190529181019190915261045e82610772565b816104345760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156106ec576106ec6117cf565b1415610763576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561072d5761072d6117cf565b600181111561073e5761073e6117cf565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156107be576107be6117cf565b1415610763576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561072d5761072d6117cf565b61080f600160005414600d61067a565b815161082a90158061082357508251600154145b600e61067a565b60008080556002805461083c906118c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610868906118c4565b80156108b55780601f1061088a576101008083540402835291602001916108b5565b820191906000526020600020905b81548152906001019060200180831161089857829003601f168201915b50505050508060200190518101906108cd9190611a15565b90506108f660408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16109493415600a61067a565b60a0820151608083015160200151516109629190611c44565b81515260808201805160209081015181015183518201529051015160409081015182519015159082015282015160a08301516109ab916109a49133919061113b565b600b61067a565b81516109c3906001600160a01b03163314600c61067a565b6109cb6114d0565b60208084015182516001600160a01b03918216905260408086015184519216918301919091526060850151835190910152818101805160009052514391015260808301518251610a1e9190600190611153565b602082015160400152610a30816111c7565b5050505050565b610a47600460005414601761067a565b8151610a62901580610a5b57508251600154145b601861067a565b600080805560028054610a74906118c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa0906118c4565b8015610aed5780601f10610ac257610100808354040283529160200191610aed565b820191906000526020600020905b815481529060010190602001808311610ad057829003601f168201915b5050505050806020019051810190610b059190611ab0565b9050610b0f611500565b7ff6577fdde4998b863f59dae23a9427c0d3f8366471223c8043b0398188b7bbbf3385604051610b40929190611c5c565b60405180910390a16000602085015151516001811115610b6257610b626117cf565b1415610e1a57610b743415600f61067a565b60808201805151518251528051516020908101518351909101528051516040908101518351901515910152518151610baf9190600090611153565b60208201528151610bce90610bc7903390600061113b565b601061067a565b60208181018051820151516040808501805192909252825184015184015182518501528251909301518301518151901515930192909252519051610c159190600190611153565b8160600181905250610c37610c30338460200151600061113b565b601161067a565b6001610c4233610772565b516001811115610c5457610c546117cf565b14610c60576000610c6e565b610c6933610772565b604001515b6080820181905260608201516020015151610c8b9110601261067a565b336000818152600560205260408120805460ff1916600190811782559081019190915590610cb8906106a0565b516001811115610cca57610cca6117cf565b14610cd6576000610ce4565b610cdf336106a0565b604001515b60a08201805191909152805160006020918201529051604080518251815291830151928201929092527f6228db0ec8d52652217358ff769f844115a481e9fc850b41d5a63b8f891f3c94910160405180910390a160a08101518352608081015160608201516020015151610d589190611cae565b60c082018051919091526060820180516020908101518101518351820152905181015160409081015192519215159201919091528201516080820151610da09190339061124d565b610da86114d0565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152606080850151828401805191909152514392019190915282015160c0830151610e029190600190611153565b602082015160400152610e14816111c7565b506110a8565b6001602085015151516001811115610e3457610e346117cf565b14156110a8576020840151516040015160e0820152610e553415601361067a565b60e08101515160808301515151610e6c9190611c44565b6101008201805191909152608083018051516020908101518351909101528051516040908101518351901515910152519051610eab9190600090611153565b610120820152815160e082015151610ed091610ec99133919061113b565b601461067a565b610120810180516020908101515161014084018051919091528251820151820151815183015291518101516040908101519251921515920191909152820151610f2790610f20903390600061113b565b601561067a565b610f3d826040015183606001511115601661067a565b60e0810151516001610f4e336106a0565b516001811115610f6057610f606117cf565b14610f6c576000610f7a565b610f75336106a0565b604001515b610f849190611c44565b6101608201908152336000818152600460205260409020805460ff191660019081178255925190830181905561018084015152610fc090610772565b516001811115610fd257610fd26117cf565b14610fde576000610fec565b610fe733610772565b604001515b6101808201805160209081019290925251604080518251815291830151928201929092527fa84a321dc35a1acf08c7d26c8f429b7a3aeabbe6fa3ef90cce80a0680dd407f7910160405180910390a1610180810151602084015261104e6114d0565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608401518183018051919091525143910152610120820151610140830151610e029190600190611153565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156110fa576110fa6117cf565b1415610763576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561072d5761072d6117cf565b600061114983853085611261565b90505b9392505050565b61115b61163c565b60005b60028110156111a75784816002811061117957611179611c18565b602002015182826002811061119057611190611c18565b60200201528061119f81611cc5565b91505061115e565b50818184600281106111bb576111bb611c18565b60200201529392505050565b6111cf611687565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015281840180515160608501525181015160808401526004600055436001555161122491839101611ce0565b604051602081830303815290604052600290805190602001906112489291906116c8565b505050565b61125883838361133b565b61124857600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916112c891611d5f565b60006040518083038185875af1925050503d8060008114611305576040519150601f19603f3d011682016040523d82523d6000602084013e61130a565b606091505b509150915061131b8282600161140c565b50808060200190518101906113309190611d7b565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161139a91611d5f565b60006040518083038185875af1925050503d80600081146113d7576040519150601f19603f3d011682016040523d82523d6000602084013e6113dc565b606091505b50915091506113ed8282600261140c565b50808060200190518101906114029190611d7b565b9695505050505050565b6060831561141b57508161114c565b82511561142b5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610697565b905290565b60408051608081018252600091810182815260608201929092529081908152602001611447604051806040016040528060008152602001600081525090565b60405180604001604052806000815260200161144760408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161144761174c565b60408051610200810190915260006101a082018181526101c083018290526101e083019190915281526020810161153561163c565b8152604080516060810182526000808252602082810182905292820152910190815260200161156261163c565b81526020016000815260200161158b604051806040016040528060008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016115c66040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016115f361163c565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001611447604051806040016040528060008152602001600081525090565b60405180604001604052806002905b611671604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161164b5790505090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200161144761163c565b8280546116d4906118c4565b90600052602060002090601f0160209004810192826116f6576000855561173c565b82601f1061170f57805160ff191683800117855561173c565b8280016001018555821561173c579182015b8281111561173c578251825591602001919060010190611721565b5061174892915061176d565b5090565b6040518060600160405280600081526020016000815260200161144761163c565b5b80821115611748576000815560010161176e565b6001600160a01b038116811461179757600080fd5b50565b6000602082840312156117ac57600080fd5b813561114c81611782565b6000604082840312156117c957600080fd5b50919050565b634e487b7160e01b600052602160045260246000fd5b6002811061179757634e487b7160e01b600052602160045260246000fd5b81516060820190611813816117e5565b808352506020830151151560208301526040830151604083015292915050565b60006020828403121561184557600080fd5b5035919050565b60005b8381101561186757818101518382015260200161184f565b838111156110a85750506000910152565b828152604060208201526000825180604084015261189d81606085016020870161184c565b601f01601f1916919091016060019392505050565b6000608082840312156117c957600080fd5b600181811c908216806118d857607f821691505b602082108114156117c957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611932576119326118f9565b60405290565b6040516060810167ffffffffffffffff81118282101715611932576119326118f9565b6040516020810167ffffffffffffffff81118282101715611932576119326118f9565b801515811461179757600080fd5b600082601f83011261199d57600080fd5b6119a561190f565b8060c08401858111156119b757600080fd5b845b81811015611a0a57606081880312156119d25760008081fd5b6119da611938565b81518152602080830151818301526040808401516119f78161197e565b90830152908552909301926060016119b9565b509095945050505050565b60006101608284031215611a2857600080fd5b60405160c0810181811067ffffffffffffffff82111715611a4b57611a4b6118f9565b6040528251611a5981611782565b81526020830151611a6981611782565b60208201526040830151611a7c81611782565b604082015260608381015190820152611a98846080850161198c565b6080820152610140929092015160a083015250919050565b60006101408284031215611ac357600080fd5b60405160a0810181811067ffffffffffffffff82111715611ae657611ae66118f9565b6040528251611af481611782565b81526020830151611b0481611782565b806020830152506040830151604082015260608301516060820152611b2c846080850161198c565b60808201529392505050565b600060408284031215611b4a57600080fd5b611b5261190f565b823581526020830135611b648161197e565b60208201529392505050565b60008183036080811215611b8357600080fd5b611b8b61190f565b833581526060601f1983011215611ba157600080fd5b611ba961195b565b611bb1611938565b602086013560028110611bc357600080fd5b81526040860135611bd38161197e565b806020830152506020605f1985011215611bec57600080fd5b611bf461195b565b60609690960135865260408101959095529384526020810193909352509092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611c5757611c57611c2e565b500190565b6001600160a01b0383168152815160208083019190915282015151805160a083019190611c88816117e5565b806040850152506020810151151560608401526040810151516080840152509392505050565b600082821015611cc057611cc0611c2e565b500390565b6000600019821415611cd957611cd9611c2e565b5060010190565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151818501526080808601516101408601949291860160005b6002811015611d535782518051835285810151868401528601511515868301529184019190830190600101611d23565b50505050505092915050565b60008251611d7181846020870161184c565b9190910192915050565b600060208284031215611d8d57600080fd5b815161114c8161197e56fea26469706673582212206d4cd0a80696a8b4330bb8eebb8a821bf04f09106eb194ca610c576153d175f764736f6c634300080c0033`,
  BytecodeLen: 9555,
  Which: `oD`,
  version: 7,
  views: {
    local: `local`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './farm.rsh:68:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './farm.rsh:147:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './farm.rsh:92:21:after expr stmt semicolon',
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
  "claim": claim,
  "stake": stake
  };
export const _APIs = {
  claim: claim,
  stake: stake
  };
