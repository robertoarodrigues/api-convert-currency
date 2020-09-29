import AppError from '../../../shared/erros/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';


let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

describe('CreateUser', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
            
        createUser = new CreateUserService(
          fakeUsersRepository,
        );
      });

      it('should be able to create a new user', async () => {
        const user = await createUser.execute({
          email: 'johndoe@example.com',
        });
    
        expect(user).toHaveProperty('id');
      });

      it('should not be able to create a new user with same email from another', async () => {
        await createUser.execute({
          email: 'johndoe@example.com',
        });
    
        await expect(
          createUser.execute({
            email: 'johndoe@example.com',
          }),
        ).rejects.toBeInstanceOf(AppError);
      });

});