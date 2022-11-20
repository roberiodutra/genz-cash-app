import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const actionsSlice = createSlice({
  name: 'userActions',
  initialState,
  reducers: {
    setHideInputForm: (state) => {
      state.hideInputForm = !state.hideInputForm;
    },
  },
});

export const { setHideInputForm } = actionsSlice.actions;
