import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks/useAppDispatch';
import { userApi } from '../store/user/apiService';
import {
  setAccountBalance,
  setAccountId,
  setToken,
} from '../store/user/userSlice';
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../utils/localStorage';

export const PrivateRoute = () => {
  const [getUserByIdOrName] = userApi.useGetUserByIdOrNameMutation();
  const user = getUserFromLocalStorage();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      (async () => {
        const { username, token, password } = user;
        dispatch(setToken({ username, token }));
        const validUser = await getUserByIdOrName(username).unwrap();
        if (validUser.password === password) {
          dispatch(setAccountId(validUser.accountId));
          dispatch(setAccountBalance(+validUser.account.balance));
        } else {
          removeUserFromLocalStorage();
          <Navigate to="/sign_in" />;
        }
      })();
    }
  }, []);
  return user ? <Outlet /> : <Navigate to="/sign_in" />;
};
