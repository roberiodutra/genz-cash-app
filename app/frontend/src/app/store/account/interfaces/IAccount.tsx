import { ITransactions } from '../../transaction/interfaces/ITransactions';
import { IUser } from '../../user/interfaces/IUser';

export interface IAccount extends ITransactions {
  id?: number;
  balance: number;
}

export interface IFullAccount extends IAccount {
  user: IUser;
}
