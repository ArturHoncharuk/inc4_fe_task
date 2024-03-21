export interface ITransaction {
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
  parent: unknown;
  hasInners: boolean;
  value: {
    wei: string;
    ether: number;
  };
}

export interface IAccount {
  address: string;
  balance: {
    wei: string;
    ether: number;
  };
  byteCode: string;
  isContract: boolean;
  power: number;
  role: number;
  timestamp: number;
  inputTx: number;
  outputTx: number;
  totalTx: number;
}

export interface IToken {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: {
    wei: string;
    ether: number;
    symbol: string;
  };
  balance: {
    wei: string;
    ether: number;
    symbol: string;
  };
}

export interface IPaginationInfo {
  totalCount: number;
  pageCount: number;
  perPage: number;
  next: number;
  hasNext: boolean;
  current: number;
  previous: number;
  hasPrevious: boolean;
}
