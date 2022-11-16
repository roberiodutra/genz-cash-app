import { Router } from 'express';
import Users from '../database/models';
import getAll from '../domain/cases/baseController';
import BaseController from '../domain/cases/baseController';
import BaseService from '../domain/cases/baseService';

const Endpoints = Router();

// const service = new BaseService(Users);
// const controller = new BaseController(service);

// Endpoints.post('/', controller.create);
Endpoints.get('/', (req, res) => getAll(req, res));

export default Endpoints;
