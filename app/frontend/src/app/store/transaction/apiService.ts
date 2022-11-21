import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../types";
import { ITransaction } from "./interfaces/ITransactions";

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      headers.set('authorization', token || '');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTransactionById: builder.query<ITransaction, number>({
      query: (id) => `/transaction/${id}`,
    }),
    createTransaction: builder.mutation<ITransaction, ITransaction>({
      query: (data) => ({
        url: "/transaction",
        body: data,
        method: "POST",
      }),
    }),
    getAllTransactions: builder.mutation<ITransaction, ITransaction>({
      query: () => ({
        url: "/transaction",
        method: "GET",
      }),
    }),
    updateTransaction: builder.mutation<ITransaction, ITransaction>({
      query: (data) => ({
        url: `/transaction/${data.id}`,
        body: data,
        method: "PUT",
      }),
    }),
  }),
});
