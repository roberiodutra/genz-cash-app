import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks/useAppDispatch';
import { userApi } from '../store/user/apiService';
import { accountApi } from '../store/account/apiService';
import { useAppSelector } from '../store/hooks/useAppSelector';
import {
  setAccountBalance,
  setAccountId,
  setToken,
  setTransactions,
} from '../store/user/userSlice';
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../utils/localStorage';

export const PrivateRoute = () => {
  const { refresh } = useAppSelector((store) => store.user);
  const [getUserByIdOrName] = userApi.useGetUserByIdOrNameMutation();
  const [getAccountById] = accountApi.useGetAccountByIdMutation();
  const user = getUserFromLocalStorage();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      (async () => {
        const { username, token, password } = user;
        dispatch(setToken({ username, token }));

        const validUser = await getUserByIdOrName(username).unwrap();
        const userAccount = await getAccountById(user.id).unwrap();

        if (validUser?.password === password) {
          dispatch(
            setTransactions({
              debitTransactions: userAccount?.debitTransactions,
              creditTransactions: userAccount?.creditTransactions,
            })
          );
          dispatch(setAccountId(validUser.accountId));
          dispatch(setAccountBalance(+validUser.account.balance));
        } else {
          removeUserFromLocalStorage();
          <Navigate to="/sign_in" />;
        }
      })();
    }
  }, [refresh]);
  return user ? <Outlet /> : <Navigate to="/sign_in" />;
};
