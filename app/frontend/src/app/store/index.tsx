import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/userSlice';
import { userApi } from './user/apiService';
import { accountApi } from './account/apiService';
import { transactionApi } from './transaction/apiService';
import { actionsSlice } from './userActions/actionsSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userActions: actionsSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      accountApi.middleware,
      transactionApi.middleware
    ),
});
