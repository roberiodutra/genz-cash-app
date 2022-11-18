import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITransaction } from "./interfaces/ITransaction";

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getUserById: builder.query<ITransaction, number>({
      query: (id) => `/user/${id}`,
    }),
    createUser: builder.mutation<ITransaction, ITransaction>({
      query: (user) => ({
        url: "/sign_up",
        body: user,
        method: "POST",
      }),
    }),
    loginUser: builder.mutation<ITransaction, ITransaction>({
      query: (user) => ({
        url: "/sign_in",
        body: user,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation<ITransaction, ITransaction>({
      query: (user) => ({
        url: `/user/${user.id}`,
        body: user,
        method: "PATCH",
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
