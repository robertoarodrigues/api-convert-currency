import {injectable, inject} from "tsyringe";
const axios = require('axios');

import AppError from "../../../shared/erros/AppError";
import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionRepository from '../repositories/ITransactionRepository';

interface IRequest {
    user_id: string;
    origincurrency: string;
    sourcevalue: number;
    destinationcurrency: string;
}


@injectable()
class CreateTransactionsService {
    constructor(
        @inject('TransactionsRepository')
        private transactionsRepository: ITransactionRepository,
      ) {}

      public async findTransactionByUserId(user_id: string ): Promise<Transaction[]> {
        
          const transactions = this.transactionsRepository.findByUserId(user_id);
           
          return transactions;
      } 

      public async execute({ 
          origincurrency, 
          sourcevalue,
          destinationcurrency,
          user_id }: IRequest): Promise<Transaction> {

            const url = `https://api.exchangeratesapi.io/latest?base=${origincurrency}`;
        
            const rates = await axios.get(url);
                      
            const rate = rates.data.rates[destinationcurrency];
    
            const value = sourcevalue * rate;
            
        const user = await this.transactionsRepository.create({
            origincurrency, 
            sourcevalue,
            destinationcurrency,
            targetvalue: value,
            conversionrate: rate,
            user_id
        });
    
        return user;
    }
}

export default CreateTransactionsService;





