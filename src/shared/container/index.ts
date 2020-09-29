import { container } from 'tsyringe';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

import ITransactionRepository from '../../modules/transactions/repositories/ITransactionRepository';
import TransactionsRepository from '../../modules/transactions/infra/typeorm/repositories/TransactionRepositoy';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
  );

  container.registerSingleton<ITransactionRepository>(
    'TransactionsRepository',
    TransactionsRepository,
  );