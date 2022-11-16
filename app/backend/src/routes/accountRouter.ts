import { Router } from 'express';
import accountController from '../controllers/accountController';

const route = Router();

route.post('/', accountController.create);
route.get('/:id', accountController.getOne);
route.put('/:id', accountController.update);

export default route;
