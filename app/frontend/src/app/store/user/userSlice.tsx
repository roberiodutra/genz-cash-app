import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.username = payload.username;
      state.token = payload.token;
    },
    setAccountId: (state, { payload }) => {
      state.accountId = payload;
    },
    setAccountBalance: (state, { payload }) => {
      state.balance = +payload;
    },
  },
});

export const { setToken, setAccountId, setAccountBalance } = userSlice.actions;
