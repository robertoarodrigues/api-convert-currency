import {injectable, inject} from "tsyringe";

import AppError from "../../../shared/erros/AppError";
import User from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";


interface IRequest {
    email: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        
      ) {}

      public async execute({ email }: IRequest): Promise<User> {
        const checkUserExists = await this.usersRepository.findByEmail(email);
    
        if (checkUserExists) {
          throw new AppError('Email address alredy used.');
        }
    
        const user = await this.usersRepository.create({
          email,
        });
    
        return user;
      }
}

export default CreateUserService;