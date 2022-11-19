export interface ITransaction {
  id?: number;
  value: string;
  createdAt?: string;
  debitedAccountId: number;
  creditedAccountId: number;
}
export interface ITransactions {
  debitTransactions: ITransaction[];
  creditTransactions: ITransaction[];
}
