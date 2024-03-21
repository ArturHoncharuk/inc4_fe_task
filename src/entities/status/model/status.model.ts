import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStatusState, IStatus } from './types';

export const statusInitialState: InitialStatusState = {
  status: null,
};

export const statusSlice = createSlice({
  name: 'status',
  initialState: statusInitialState,
  reducers: {
    setStatus: (state, action: PayloadAction<IStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;
