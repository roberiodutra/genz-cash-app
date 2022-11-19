import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../types';
import { ICustomError } from '../user/interfaces/ICustomError';
import { IAccount, IFullAccount } from './interfaces/IAccount';

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      headers.set('authorization', token || '');

      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, ICustomError>,
  endpoints: (builder) => ({
    getAccountById: builder.mutation<IFullAccount, number>({
      query: (id) => `/account/${id}`,
    }),
    createAccount: builder.mutation<IAccount, void>({
      query: () => ({
        url: '/account',
        method: 'POST',
      }),
    }),
    updateAccount: builder.mutation<IAccount, { id?: number; balance: number }>(
      {
        query: ({ id, balance }) => ({
          url: `/account/${id}`,
          body: { balance },
          method: 'PUT',
        }),
      }
    ),
  }),
});
