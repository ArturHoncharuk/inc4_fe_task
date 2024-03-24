import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { InitialTransactionState, ITransaction } from './types';

export const transactionsInitialState: InitialTransactionState = {
  transactions: [],
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: transactionsInitialState,
  reducers: {
    setInitialTransactions: (state, action: PayloadAction<ITransaction[]>) => {
      state.transactions = action.payload;
    },
    appendNextPageTransactions: (
      state,
      action: PayloadAction<ITransaction[]>
    ) => {
      state.transactions = [...state.transactions, ...action.payload];
    },
  },
});

export const { setInitialTransactions, appendNextPageTransactions } =
  transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
