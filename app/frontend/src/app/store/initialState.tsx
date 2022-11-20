import { IUserDataWithTransactions } from './user/interfaces/IUser';

export const initialState: IUserDataWithTransactions = {
  username: '',
  accountId: 0,
  balance: 0,
  transactions: {
    debitTransactions: [],
    creditTransactions: [],
  },
  token: '',
};
