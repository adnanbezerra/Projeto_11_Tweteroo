import { Request, Response } from 'express';
import { signupService } from '../services/user-services';
import { NewUser } from '../types/new-user-types';

export async function postSignUp(req: Request, res: Response) {
  const newUserInfo: NewUser = req.body;

  await signupService(newUserInfo);

  res.sendStatus(201);
};
