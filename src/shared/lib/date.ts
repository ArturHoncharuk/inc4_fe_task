import moment from 'moment';

import { DATE_FORMAT } from '../config/constants/constants';

export const $date = (timestamp: number | undefined): string => {
  return moment(timestamp).format(DATE_FORMAT);
};
