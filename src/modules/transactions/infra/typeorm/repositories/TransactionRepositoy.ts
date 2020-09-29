import { getRepository, Repository } from "typeorm";

import ITransactionRepository from '../../../repositories/ITransactionRepository';
import ICreateTransactonDTO from '../../../dtos/ICreateTransactionDTO';


import Transaction from '../entities/Transaction';

class TransactionRepository implements ITransactionRepository {
    private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  public async findByUserId(user_id: string): Promise<Transaction[]> {
    const transactions = await this.ormRepository.find({
        where: { user_id },
      });
      
      return transactions;
  }

  public async create({
    origincurrency,
    sourcevalue,
    destinationcurrency,
    targetvalue,
    conversionrate,
    user_id,
  }: ICreateTransactonDTO): Promise<Transaction> {
    const transaction = this.ormRepository.create({
        origincurrency,
        sourcevalue,
        destinationcurrency,
        targetvalue,
        conversionrate,
        user_id,
      });

    await this.ormRepository.save(transaction);

    return transaction;
  }

}

export default TransactionRepository;




