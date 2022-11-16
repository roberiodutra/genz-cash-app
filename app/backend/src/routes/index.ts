import { Router } from 'express';
import userController from '../domain/cases/login/controllers/userController';

const Endpoints = Router();

Endpoints.post('/', userController.create);
Endpoints.get('/', userController.getAll);

export default Endpoints;
