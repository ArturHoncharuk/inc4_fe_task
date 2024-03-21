import { useEffect } from 'react';

import { statusApi } from '../api';
import { setStatus, toggleFetching } from '../model';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

export function useFetchStatus() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.status);

  const fetchStatusDetails = async () => {
    try {
      dispatch(toggleFetching(true));
      const response = await statusApi.info();

      if (response.data) {
        dispatch(setStatus(response.data));
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      throw new Error('Something went wrong...');
    } finally {
      dispatch(toggleFetching(false));
    }
  };

  useEffect(() => {
    if (!status) {
      fetchStatusDetails();
    }
  }, [status]);
}
