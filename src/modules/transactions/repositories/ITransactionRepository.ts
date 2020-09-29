import Transaction from '../infra/typeorm/entities/Transaction';
import ICreateTransactionDTO from '../dtos/ICreateTransactionDTO';

export default interface ITransactionRepository {
    findByUserId(user_id: string): Promise<Transaction[]>;
    create(data: ICreateTransactionDTO): Promise<Transaction>;
}