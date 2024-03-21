import type {
  FetchTransactionQueryArgs,
  FetchTransactionsResponse,
} from './types';

import { TRANSACTION_HASH } from '@/shared/config/constants/constants';
import { fetcher } from '@/shared/lib/_fetcher';

class TransactionsApi {
  constructor() {}

  async history({ page }: FetchTransactionQueryArgs) {
    const raw = await fetcher({
      path: `addresses/${TRANSACTION_HASH}/all?limit=10&page=${page}`,
    });

    const response: FetchTransactionsResponse = await raw.json();

    return response;
  }
}

export const transactions = new TransactionsApi();
