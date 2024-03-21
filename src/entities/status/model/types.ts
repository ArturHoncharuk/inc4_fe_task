export interface IStatus {
  network: string;
  timestamp: number;
  avgBlockTime: number;
  lastBlock: {
    number: number;
    hash: string;
    timestamp: number;
  };
  blocksBaseReward: {
    wei: string;
    ether: number;
  };
  totalApollosStake: {
    wei: string;
    ether: number;
  };
  apollos: {
    total: number;
    online: number;
    offline: number;
    connecting: number;
  };
  accounts: {
    total: number;
    contracts: number;
    withBalance: number;
  };
  transactions: {
    total: number;
    pending: number;
  };
  validatorsPool: number;
  avgBlockSize: number;
  avgBlockGasUsed: number;
  avgBlockGasLimit: number;
  avgBlockTransactions: number;
  totalSupply: number;
  totalSupplyWei: string;
  circulation: number;
  circulationWei: string;
}

export interface InitialStatusState {
  status: IStatus | null;
}
