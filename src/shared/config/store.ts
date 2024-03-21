import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/extensions
import { transactionsReducer } from '@/entities/transactions/model/transactions.model';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
