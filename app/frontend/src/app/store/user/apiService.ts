import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { LocalUserType } from "../../types/LocalUserType";
import { saveUserOnLocalStorage } from "../../utils/localStorage";
import { ICustomError } from "./interfaces/ICustomError";
import { IUser } from "./interfaces/IUser";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery(
    { baseUrl: "http://localhost:3001" },
  ) as BaseQueryFn<string | FetchArgs, unknown, ICustomError>,
  endpoints: (builder) => ({
    getUserById: builder.query<IUser, number>({
      query: (id) => `/user/${id}`,
    }),
    createUser: builder.mutation<LocalUserType, IUser>({
      query: (user) => ({
        url: "/sign_up",
        body: user,
        method: "POST",
      }),
      transformResponse: (response: LocalUserType) => {
        saveUserOnLocalStorage(response);
        return response;
      },
    }),
    loginUser: builder.mutation<LocalUserType, IUser>({
      query: (user) => ({
        url: "/sign_in",
        body: user,
        method: "POST",
      }),
      transformResponse: (response: LocalUserType) => {
        saveUserOnLocalStorage(response);
        return response;
      },
    }),
    updateUser: builder.mutation<IUser, IUser>({
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
