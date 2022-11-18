export interface IUser {
  id?: number;
  username: string;
  token?: string;
}

export interface IUserFullData extends IUser {
  account: number;
  balance: number;
}
