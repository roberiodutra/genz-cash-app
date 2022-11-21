import { rest } from 'msw';
import { getUserFromLocalStorage } from '../../../app/utils/localStorage';
import accountMock from '../accountMock';
import questionMock from '../accountMock';
import { loginUser, memberUser } from '../userMock';

const BASE_URL = 'http://localhost:3001';
const code = {
  OK: 200,
  CREATED: 201,
};

const handlers = [
  rest.post(`${BASE_URL}/sign_in`, (_req, res, ctx) => {
    return res(ctx.status(code.OK), ctx.json(memberUser));
  }),

  rest.post(`${BASE_URL}/sign_up`, (_req, res, ctx) => {
    return res(ctx.status(code.CREATED), ctx.json(memberUser));
  }),

  rest.post(`${BASE_URL}/account`, (_req, res, ctx) => {
    return res(ctx.status(code.OK), ctx.json(accountMock));
  }),

  rest.get(`${BASE_URL}/account/:id`, (_req, res, ctx) => {
    return res(ctx.status(code.OK), ctx.json(accountMock));
  }),

  // rest.post(`${BASE_URL}/questions`, (_req, res, ctx) => {
  //   return res(ctx.status(code.OK));
  // }),

  // rest.put(`${BASE_URL}/questions/:id`, (_req, res, ctx) => {
  //   return res(ctx.status(code.OK));
  // }),

  rest.get(`${BASE_URL}/user`, (_req, res, ctx) => {
    return res(ctx.status(code.OK), ctx.json(getUserFromLocalStorage()));
  }),

  rest.put(`${BASE_URL}/user/:id`, (_req, res, ctx) => {
    return res(ctx.status(code.OK));
  }),
];

export default handlers;
