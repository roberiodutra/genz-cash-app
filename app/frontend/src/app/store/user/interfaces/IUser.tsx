export interface IUser {
  id?: number;
  username: string;
  password?: string;
  token?: string;
}

export interface IUserFullData extends IUser {
  accountId: number;
  balance: number;
}

export interface IUserApiFullData extends IUser {
  accountId: number;
  account: { balance: number };
}
