import { useState } from 'react';

import { transactionsApi } from '../api';

import {
  appendNextPageTransactions,
  setInitialTransactions,
} from '@/entities/transactions/model';
import { useEffectOnce } from '@/shared/lib/hooks';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/use-redux';
import { notifications } from '@/shared/lib/notifications';

export function useFetchTransactions() {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector((state) => state.transactions);
  const [fetching, setFetching] = useState(false);
  const [fetchingNextPage, setFetchingNextPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchInitialTransactions = async () => {
    try {
      setFetching(true);
      const response = await transactionsApi.history({ page: currentPage });

      if (response && response.pagination) {
        const { pagination, data } = response;

        if (pagination.hasNext && pagination.current !== pagination.next) {
          setCurrentPage(pagination.next);
        }

        if (data) {
          dispatch(setInitialTransactions(data));
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      throw new Error('Something went wrong');
    } finally {
      setFetching(false);
    }
  };

  useEffectOnce(() => {
    if (transactions.length === 0) {
      fetchInitialTransactions();
    }
  });

  const nextPageTransactions = async () => {
    try {
      if (!fetching) {
        setFetchingNextPage(true);
        const response = await transactionsApi.history({ page: currentPage });

        if (response && response.pagination) {
          const { pagination, data } = response;

          // Check if there's a next page and it's different from the current page
          if (pagination.hasNext && pagination.current !== pagination.next) {
            setCurrentPage(pagination.next);
            dispatch(appendNextPageTransactions(data));
          } else {
            notifications.warning('No more transactions found');
          }

          return;
        }

        throw new Error('Something went wrong');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      throw new Error('Something went wrong');
    } finally {
      setFetchingNextPage(false);
    }
  };

  return { fetching, fetchingNextPage, nextPageTransactions, currentPage };
}
