import type { FetchTransactionDetailsResponse } from './types';

import { fetcher } from '@/shared/lib/_fetcher';

class TransactionDetailsApi {
  constructor() {}

  async getTransactionDetailsById(hashId: string, abortSignal: AbortSignal) {
    const raw = await fetcher({
      path: `transactions/${hashId}`,
      signal: abortSignal,
    });

    const response: FetchTransactionDetailsResponse = await raw.json();

    return response;
  }
}

export const transactionDetailsApi = new TransactionDetailsApi();
