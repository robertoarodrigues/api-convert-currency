import { Request, Response } from 'express';

import { container } from "tsyringe";

import TransactionService from '../../../services/CreateTransactionService';

export default class UsersController {

  public async index(request: Request, response: Response): Promise<Response> {
      const {user_id} = request.params;
      
      const createTransaction = container.resolve(TransactionService);
      
      const transactions = await createTransaction.findTransactionByUserId(user_id);

      return response.json(transactions);
    } 

    public async create(request: Request, response: Response): Promise<Response> {
      const { 
                origincurrency, 
                sourcevalue, 
                destinationcurrency, 
                user_id } = request.body;
      
      const createTransaction = container.resolve(TransactionService);
        
      const transaction = await createTransaction.execute({
        origincurrency,
        sourcevalue,
        destinationcurrency,
        user_id
      });
  
      return response.json(transaction);
    }
  }