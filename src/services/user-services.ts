import { createNewUser } from '../repositories/user-repository';
import { NewUser } from '../types/new-user-types';

export async function signupService(newUser: NewUser) {
  await createNewUser(newUser);
};
