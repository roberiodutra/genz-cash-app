import { IUserToken } from "./IUserToken";

export interface IRead<T> {
  login(username: string, password: string): Promise<IUserToken>;
  getAll(): Promise<T[]>;
  getOne(idOrName: string | undefined): Promise<T | null>;
}
