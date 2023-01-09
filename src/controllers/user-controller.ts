import { Request, Response } from 'express';
import { UserServices } from '../services/user-services';
import { NewUser } from '../types/new-user-types';

export async function postSignUp(req: Request, res: Response) {
  const newUserInfo: NewUser = req.body;

  await UserServices.signupService(newUserInfo);

  res.sendStatus(201);
}
