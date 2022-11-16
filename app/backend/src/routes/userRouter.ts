import { Router } from 'express';
import AuthToken from '../middlewares/AuthToken';
import UserController from '../controllers/userController';

const route = Router();

route.post('/sign_in', UserController.login);
route.post('/sign_up', UserController.create);
route.get('/user/:id', AuthToken, UserController.getOne);
route.put('/user/:id', AuthToken, UserController.update);
route.delete('/user/:id', AuthToken, UserController.delete);

export default route;
