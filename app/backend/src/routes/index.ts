import { Router } from 'express';
import userRouter from './userRouter';
import accountRouter from './accountRouter';
import transactionRouter from './TransactionRouter';

const Endpoints = Router();

Endpoints.use('/', userRouter);
Endpoints.use('/account', accountRouter);
Endpoints.use('/transaction', transactionRouter);

export default Endpoints;
