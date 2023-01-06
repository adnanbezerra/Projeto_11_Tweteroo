import { prisma } from '../database/prisma';
import { NewUser } from '../types/new-user-types';

export async function createNewUser(newUserInfo: NewUser) {
  await prisma.users.create({ data: newUserInfo });
}
