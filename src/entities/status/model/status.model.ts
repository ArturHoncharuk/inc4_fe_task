import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { InitialStatusState, IStatus } from './types';

export const statusInitialState: InitialStatusState = {
  status: null,
  fetching: false,
};

export const statusSlice = createSlice({
  name: 'status',
  initialState: statusInitialState,
  reducers: {
    setStatus: (state, action: PayloadAction<IStatus>) => {
      state.status = action.payload;
    },
    toggleFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
  },
});

export const { setStatus, toggleFetching } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;
