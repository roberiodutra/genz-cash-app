const loginUser = {
  password: '123456',
  username: 'Tester',
};

const memberUser = {
  id: 25,
  username: 'User',
  password: '$2b$08$ydL.pSgeARrbOPR6W.PXMePJfU.HhcQ0s3Bn3kWONqJt2kFjysnWu',
  accountId: 25,
  account: {
    balance: '100.00',
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
};

const invalidUser = {
  id: '999999999999999999999',
  password: '123456',
  username: 'Tester',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
};

export { loginUser, memberUser, invalidUser };
