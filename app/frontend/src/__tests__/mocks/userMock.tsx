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
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsInVzZXJuYW1lIjoicmljaGFyZCIsInBhc3N3b3JkIjoiYWdoc1Q1MzQiLCJhY2NvdW50SWQiOjI3LCJhY2NvdW50Ijp7ImJhbGFuY2UiOiIyMzUuNDkifSwiaWF0IjoxNjY5MDIzNzY2LCJleHAiOjE2NjkxMTAxNjZ9.5Nx6gU5i_M5kS5E7BBB2VQb6ZAqUAZLQOd3ie9sVIIY',
};

const updateUserAccount = {
  accountId: '25',
};

export { loginUser, memberUser, updateUserAccount };
