import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICustomError } from "../user/interfaces/ICustomError";
import { IAccount } from "./interfaces/IAccount";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery(
    { baseUrl: "http://localhost:3001" },
  ) as BaseQueryFn<string | FetchArgs, unknown, ICustomError>,
  endpoints: (builder) => ({
    getAccountById: builder.query<IAccount, number>({
      query: (id) => `/account/${id}`,
    }),
    createAccount: builder.mutation<IAccount, void>({
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
