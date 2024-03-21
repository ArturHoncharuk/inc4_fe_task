import type { ITransactionDetail } from '../model/types';

import { IPaginationInfo } from '@/entities/transactions/model/types';

export interface FetchTransactionDetailsResponse {
  data: ITransactionDetail[];
  pagination: IPaginationInfo;
}
