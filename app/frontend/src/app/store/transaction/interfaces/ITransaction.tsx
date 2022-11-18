export interface ITransaction {
  id?: string;
  value: number;
  creditedAccountId: number;
  debitedAccountId: number;
}
