import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";
import { userApi } from "./user/apiService";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
