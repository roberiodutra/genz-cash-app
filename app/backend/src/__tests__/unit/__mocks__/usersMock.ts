const userLogin = {
  username: "User",
  password: "opxjksh45x",
};

const userAndAccount = {
  username: "User",
  password: "opxjksh45x",
  accountId: 1
};

const wrongUserLogin = {
  username: "Us",
  password: "999999",
};

const createdUser = {
  id: 1,
  username: "User",
  password: "$2b$08$QvhtkxVxJbaDIZqxIUf0Vu1rzkFB0xkd7OHTX4pJpjyhsDAXmjRJy",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJVc2VyIiwicGFzc3dvcmQiOiJvcHhqa3NoNDV4IiwiaWF0IjoxNjY4NjQzOTQzLCJleHAiOjE2Njg3MzAzNDN9.osTx0sDq-OXw-qb9o08sikhDu7wwSKc3Q7YYJ6ASa-g"
};

const signUpErrorMessages = [
  'Password must be at least 8 characters long',
  'UserName must be at least 3 characters long',
];

export {
  userLogin,
  wrongUserLogin,
  createdUser,
  userAndAccount,
  signUpErrorMessages,
};
