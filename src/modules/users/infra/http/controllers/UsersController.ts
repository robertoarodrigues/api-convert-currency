
import { Request, Response } from 'express';

import { container } from "tsyringe";

import CreateUserService from '../../../services/CreateUserService'

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
      const { email } = request.body;
      
      const createUser = container.resolve(CreateUserService);
        
      const user = await createUser.execute({
        email,
      });
  
      return response.json(user);
    }
  }