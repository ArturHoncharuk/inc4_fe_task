import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type {
  InitialTransactionDetailsState,
  ITransactionDetail,
} from './types';

export const transactionDetailsInitialState: InitialTransactionDetailsState = {
  transaction: null,
  fetching: true,
};

export const transactionDetailsSlice = createSlice({
  name: 'transactionDetails',
  initialState: transactionDetailsInitialState,
  reducers: {
    setTransactionDetails: (
      state,
      action: PayloadAction<ITransactionDetail>
    ) => {
      state.transaction = action.payload;
    },

    toggleFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
  },
});

export const { setTransactionDetails, toggleFetching } =
  transactionDetailsSlice.actions;
export const transactionDetailsReducer = transactionDetailsSlice.reducer;
