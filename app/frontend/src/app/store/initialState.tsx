import { IInitialState } from './user/interfaces/IUser';

export const initialState: IInitialState = {
  username: '',
  accountId: 0,
  balance: 0,
  transactions: {
    debitTransactions: [],
    creditTransactions: [],
  },
  token: '',
  refresh: false,
};
