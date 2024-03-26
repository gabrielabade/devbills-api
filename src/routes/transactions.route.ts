import { Router } from 'express';

import { TransactionController } from '../controllers/transactions.controller';
import { createTransactionSchema } from '../dtos/transactions.dto';
import { TransactionsFactory } from '../factories/transactions.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const transactionsRoutes = Router();

const controller = new TransactionController(
  TransactionsFactory.getServiceInstance(),
);

transactionsRoutes.post(
  '/',
  validator({
    schema: createTransactionSchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);