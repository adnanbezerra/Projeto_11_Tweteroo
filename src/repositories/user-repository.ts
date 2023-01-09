import { prisma } from '../database/prisma';
import { NewUser } from '../types/new-user-types';

async function createNewUser(newUserInfo: NewUser) {
  await prisma.users.create({ data: newUserInfo });
}

export const UserRepository = {
  createNewUser,
};
