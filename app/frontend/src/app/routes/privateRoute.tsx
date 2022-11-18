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
      async () => {
        const { username, token, password } = user;
        const validUser = await getUserByIdOrName(username).unwrap();
        console.log('🚀 ~ useAccountState ~ validUser', validUser);
        if (validUser.password === password) {
          dispatch(setToken({ username, token }));
          dispatch(setAccountId(validUser.account));
          dispatch(setAccountBalance(+validUser.balance));
        } else {
          removeUserFromLocalStorage();
        }
      };
    }
  }, [user]);
  return user ? <Outlet /> : <Navigate to="/sign_in" />;
};
