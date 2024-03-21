import { COLORS } from '../config';

export function transactionStatusColor(status: 'SUCCESS' | unknown) {
  if (status === 'SUCCESS') {
    return COLORS.success;
  }

  return COLORS.danger;
}
