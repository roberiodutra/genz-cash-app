import { Router } from 'express';
import AuthToken from '../middlewares/AuthToken';
import accountController from '../controllers/accountController';

const route = Router();

route.post('/', accountController.create);
route.get('/:id', AuthToken, accountController.getOne);
route.put('/:id', AuthToken, accountController.update);

export default route;
