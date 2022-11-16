import { Router } from 'express';
import UserController from '../controllers/userController';

const route = Router();

route.post('/sign_in', UserController.login);
route.post('/sign_up', UserController.create);
route.get('/user/:id', UserController.getOne);
route.put('/user/:id', UserController.update);
route.delete('/user/:id', UserController.delete);

export default route;
