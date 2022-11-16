export interface IWrite<T> {
  create(obj: T): Promise<T>;
  update(id: string, obj: T): Promise<void>;
  delete(id: string): Promise<{ status: string }>;
}
