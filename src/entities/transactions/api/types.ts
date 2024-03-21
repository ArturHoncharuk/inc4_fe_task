import type {
  ITransaction,
  IAccount,
  IToken,
  IPaginationInfo,
} from '../model/types';

export interface FetchTransactionQueryArgs {
  page: number;
}

export interface FetchTransactionsResponse {
  data: ITransaction[];
  account: IAccount;
  tokens: IToken[];
  pagination: IPaginationInfo;
}
