import { LocalUserType } from '../types/LocalUserType';

export const saveUserOnLocalStorage = (user: LocalUserType) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const value = localStorage.getItem('user');
  if (typeof value === 'string') {
    return JSON.parse(value);
  }
};

export const removeUserFromLocalStorage = () => localStorage.removeItem('user');
