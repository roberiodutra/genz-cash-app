import { Router } from 'express';
import userRouter from './userRouter';
import accountRouter from './accountRouter';
import transactionRouter from './TransactionRouter';
import AuthToken from '../middlewares/AuthToken';

const Endpoints = Router();

Endpoints.use('/', userRouter);
Endpoints.use('/account', accountRouter);
Endpoints.use('/transaction', AuthToken, transactionRouter);

export default Endpoints;
