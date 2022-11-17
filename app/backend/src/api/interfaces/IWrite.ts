export interface IWrite<T> {
  create(username: string, password: string, accountId: number): Promise<T>;
  update(id: string, obj: T): Promise<void>;
  delete(id: string): Promise<void>;
}
