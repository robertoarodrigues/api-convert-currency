import { Router } from 'express';

import { celebrate, Joi, Segments } from 'celebrate';
import TransactionsController from '../controllers/TransactionsController';

const transactionsRouter = Router();
const transactionsController = new TransactionsController();

transactionsRouter.get(
  '/:user_id',
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
    },
  }),
  transactionsController.index,
);


transactionsRouter.post(
    '/',
    celebrate({
      [Segments.BODY]: {
        origincurrency: Joi.string().required(),
        sourcevalue: Joi.number().required(),
        destinationcurrency: Joi.string().required(),
        user_id: Joi.string().required(),
      },
    }),
    
    transactionsController.create,
  );

  export default transactionsRouter;