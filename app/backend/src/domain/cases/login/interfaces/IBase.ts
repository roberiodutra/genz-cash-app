import { IUser } from "./IUser";

export interface IBase {
  // create(obj): Promise<T>;
  getAll(): Promise<IUser[]>;
  // getOne(id: string): Promise<IUser>;
  // update(id: string, obj: T): Promise<IUser>;
  // delete(id: string): Promise<void>;
}
