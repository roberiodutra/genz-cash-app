import { memberUser } from './userMock';

const accountMock = {
  id: 25,
  balance: '100.00',
  debitTransactions: [
    {
      id: 30,
      value: '5.00',
      createdAt: '2022-10-10T22:56:07.742Z',
      debitedAccountId: 25,
      creditedAccountId: 24,
    },
  ],
  creditTransactions: [
    {
      id: 31,
      value: '5.00',
      createdAt: '2022-11-20T23:56:07.742Z',
      debitedAccountId: 24,
      creditedAccountId: 25,
    },
  ],
  user: memberUser,
};

export default accountMock;
