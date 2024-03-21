/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';

import { statusReducer } from '@/entities/status/model';
import { transactionDetailsReducer } from '@/entities/transaction-details/model';
import { transactionsReducer } from '@/entities/transactions/model';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    transactionDetails: transactionDetailsReducer,
    status: statusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
