import moment from 'moment';

import { DATE_FORMAT } from '../config/constants/constants';

export const $date = (timestamp: number | undefined): string => {
  if (!timestamp) return 'Unavailable to get date';
  return moment(timestamp * 1000).format(DATE_FORMAT);
};
