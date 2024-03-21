export interface ITransactionDetail {
  blockHash: string;
  blockNumber: number;
  from: string;
  to: string;
  gasCost: {
    wei: string;
    ether: number;
  };
  gasPrice: string;
  gasSent: number;
  gasUsed: number;
  hash: string;
  input: string;
  logs: unknown[];
  nonce: number;
  status: string;
  timestamp: number;
  transactionIndex: number;
  type: string;
  parent: null | string;
  hasInners: boolean;
  value: {
    wei: string;
    ether: number;
  };
}

export interface InitialTransactionDetailsState {
  transaction: ITransactionDetail | null;
  fetching: boolean;
}
