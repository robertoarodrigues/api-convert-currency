import axios from 'axios';
import { uuid } from 'uuidv4';

import Transaction from '../../infra/typeorm/entities/Transaction';
import ICreateTransactionDTO from '../../dtos/ICreateTransactionDTO';
import AppError from '../../../../shared/erros/AppError';

class FakeTransactionsRepository {
    private transactions: Transaction[] = [];

    public async findByUserId(user_id: string): Promise<Transaction[]> {
        const resultTransactions = this.transactions.filter(transaction => {
            return (
                transaction.user_id === user_id
            )
        });
    
         return resultTransactions;
      }

    public async create({
        origincurrency, 
        sourcevalue, 
        destinationcurrency, 
        user_id}: ICreateTransactionDTO): Promise<Transaction> {
        const transaction = new Transaction();

        if(!user_id) {
            throw new AppError('You can´t create an transaction without user.');
        }

           const url = `https://api.exchangeratesapi.io/latest?base=${origincurrency}`;
        
            const rates = await axios.get(url);
                      
            const rate = rates.data.rates[destinationcurrency];
    
            const value = sourcevalue * rate;
    
        Object.assign(transaction, 
             { id: uuid() }, 
             origincurrency, 
            sourcevalue,
            destinationcurrency, 
            {targetvalue: value},
            {conversionrate: rate},
            user_id);
    
        this.transactions.push(transaction);
        console.log(this.transactions);
        return transaction;
      }
}

export default FakeTransactionsRepository;





