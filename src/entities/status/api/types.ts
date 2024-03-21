import { IStatus } from '../model/types';

import { IPaginationInfo } from '@/entities/transactions/model/types';

export interface FetchStatusResponse {
  data: IStatus;
  pagination: IPaginationInfo;
}
