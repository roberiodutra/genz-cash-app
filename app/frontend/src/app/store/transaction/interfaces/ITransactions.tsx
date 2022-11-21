export interface ITransaction {
  id?: number;
  value: number;
  createdAt?: string;
  debitedAccountId: number;
  creditedAccountId: number;
}
export interface ITransactions {
  debitTransactions: ITransaction[];
  creditTransactions: ITransaction[];
}
