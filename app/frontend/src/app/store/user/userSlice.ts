import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.username = payload.username;
      state.token = payload.token;
    }
  },
});

export const { setToken } = userSlice.actions;
