import { Router } from 'express';

import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import transactionsRouter from '../../../../modules/transactions/infra/http/routes/transactions.routes';


const routes = Router();

routes.use('/users', usersRouter);
routes.use('/transactions', transactionsRouter);


export default routes;