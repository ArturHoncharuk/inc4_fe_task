import { useState } from 'react';

import { transactions } from '../api';

export function useFetchTransactions() {
  const [fetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchInitialTransactions = async () => {
    try {
      setFetching(true);
      const response = await transactions.history({ page: currentPage });

      if (response.pagination.hasNext) {
        setCurrentPage((prevState) => prevState + 1);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      throw new Error('Something went wrong');
    } finally {
      setFetching(false);
    }
  };

  const nextPageTransactions = async () => {
    try {
      setFetching(true);
      const response = await transactions.history({ page: currentPage });

      if (response.pagination.current !== response.pagination.pageCount) {
        console.log('next fetched');
      }

      if (response.pagination.hasNext) {
        setCurrentPage((prevState) => prevState + 1);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      throw new Error('Something went wrong');
    } finally {
      setFetching(false);
    }
  };

  return { fetching, nextPageTransactions };
}
