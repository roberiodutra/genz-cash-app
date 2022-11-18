import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { LocalUserType } from "../../types/LocalUserType";
import { saveUserOnLocalStorage } from "../../utils/localStorage";
import { RootState } from "../types";
import { ICustomError } from "./interfaces/ICustomError";
import { IUser } from "./interfaces/IUser";
import { IUserAccount } from "./interfaces/IUserAccount";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      headers.set('authorization', token || '');

      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, ICustomError>,
  endpoints: (builder) => ({
    getUserByIdOrName: builder.mutation<IUser, string>({
      query: (query) => `/user?idOrName=${query}`,
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
    updateUser: builder.mutation<IUser, IUserAccount>({
      query: ({ id, ...rest }) => ({
        url: `/user/${id}`,
        body: rest,
        method: "PUT",
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
