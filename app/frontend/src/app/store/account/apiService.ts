import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAccount } from "./interfaces/IAccount";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getAccountById: builder.query<IAccount, number>({
      query: (id) => `/account/${id}`,
    }),
    createAccount: builder.mutation<IAccount, IAccount>({
      query: () => ({
        url: "/account",
        method: "POST",
      }),
    }),
    updateAccount: builder.mutation<IAccount, IAccount>({
      query: (data) => ({
        url: `/user/${data.id}`,
        body: data,
        method: "PATCH",
      }),
    }),
  }),
});
