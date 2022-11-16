import { Router } from 'express';
import userRouter from './userRouter';
import accountRouter from './accountRouter';

const Endpoints = Router();

Endpoints.use('/', userRouter);
Endpoints.use('/account', accountRouter);

export default Endpoints;
