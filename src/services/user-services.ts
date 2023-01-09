import { UserRepository } from '../repositories/user-repository';
import { NewUser } from '../types/new-user-types';

async function signupService(newUser: NewUser) {
  await UserRepository.createNewUser(newUser);
}

export const UserServices = {
  signupService,
};
