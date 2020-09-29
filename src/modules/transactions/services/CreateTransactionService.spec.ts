import AppError from '../../../shared/erros/AppError';

import FakeTransactionRepository from '../repositories/fakes/FakeTransactionsRepository';
import CreateTransactionService from './CreateTransactionService';

let fakeTransactionRepository: FakeTransactionRepository;
let createTransaction: CreateTransactionService;

describe('CreateTransaction', () => {
    beforeEach(() => {
        fakeTransactionRepository = new FakeTransactionRepository();
            
        createTransaction = new CreateTransactionService(
            fakeTransactionRepository
        );
      });

      it('should be able to create a new transaction', async () => {
        const transaction = await createTransaction.execute({
            origincurrency: "USD",
            sourcevalue: 10.50,
            destinationcurrency: "BRL",
            user_id: "user_id"
        });
    
        expect(transaction).toHaveProperty('id');
      });

      it('should not be able to create a new transaction without user ', async () => {
        await expect(
            createTransaction.execute({
                origincurrency: "USD",
                sourcevalue: 10.50,
                destinationcurrency: "BRL",
                user_id: "",
            }),
          ).rejects.toBeInstanceOf(AppError);
      });

});