import { useEffect } from 'react';

import { transactionDetailsApi } from '../api';
import {
  setTransactionDetails,
  toggleFetching,
} from '../model/transaction-details.model';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/use-redux';
import { notifications } from '@/shared/lib/notifications';

export function useFetchTransactionDetailsById(hashId: string) {
  const dispatch = useAppDispatch();
  const { transaction } = useAppSelector((state) => state.transactionDetails);

  const fetchTransactionDetails = async (signal: AbortSignal) => {
    try {
      dispatch(toggleFetching(true));
      const response = await transactionDetailsApi.getTransactionDetailsById(
        hashId,
        signal
      );

      if (response.data) {
        dispatch(setTransactionDetails(response.data[0]));
        dispatch(toggleFetching(false));
      } else {
        notifications.warning(
          'Unable to fetch details about these transaction'
        );
      }
    } catch (err) {
      throw new Error(err as string);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    if (transaction?.hash !== hashId) {
      fetchTransactionDetails(signal);
    }

    return () => {
      abortController.abort();
    };
  }, [hashId]);
}
