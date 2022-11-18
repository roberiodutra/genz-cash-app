import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITransaction } from "./interfaces/ITransaction";

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getTransactionById: builder.query<ITransaction, number>({
      query: (id) => `/transaction/${id}`,
    }),
    createTransaction: builder.mutation<ITransaction, ITransaction>({
      query: (user) => ({
        url: "/transaction",
        body: user,
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
      query: (user) => ({
        url: `/transaction/${user.id}`,
        body: user,
        method: "PATCH",
      }),
    }),
  }),
});
