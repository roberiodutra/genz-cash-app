import { IUser } from "./IUser";

export interface IUserToken extends IUser {
  token: string;
}
