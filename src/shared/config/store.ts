/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';

import { transactionDetailsReducer } from '@/entities/transaction-details/model/transaction-details.model';
import { transactionsReducer } from '@/entities/transactions/model/transactions.model';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    transactionDetails: transactionDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
