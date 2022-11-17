import { Router } from 'express';
import transactionController from '../controllers/transactionController';

const route = Router();

route.post('/', transactionController.create);
route.get('/', transactionController.getAll);
route.get('/:id', transactionController.getOne);
route.put('/:id', transactionController.update);

export default route;
