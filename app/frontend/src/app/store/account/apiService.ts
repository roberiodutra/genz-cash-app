import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAccount } from "./interfaces/IAccount";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getUserById: builder.query<IAccount, number>({
      query: (id) => `/user/${id}`,
    }),
    createUser: builder.mutation<IAccount, IAccount>({
      query: (user) => ({
        url: "/sign_up",
        body: user,
        method: "POST",
      }),
    }),
    loginUser: builder.mutation<IAccount, IAccount>({
      query: (user) => ({
        url: "/sign_in",
        body: user,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation<IAccount, IAccount>({
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
