import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const actionsSlice = createSlice({
  name: 'userActions',
  initialState,
  reducers: {
    setFilterType: (state, { payload }) => {
      state.filterType = payload;
    },
    setHideInputForm: (state) => {
      state.hideInputForm = !state.hideInputForm;
    },
    setRefresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

export const { setHideInputForm, setFilterType, setRefresh } =
  actionsSlice.actions;
