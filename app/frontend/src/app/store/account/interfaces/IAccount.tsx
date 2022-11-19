import { ITransactions } from '../../transaction/interfaces/ITransactions';

export interface IAccount extends ITransactions {
  id?: number;
  balance: number;
}

export interface IAccountBalance {
  id?: number;
  balance: number;
}
