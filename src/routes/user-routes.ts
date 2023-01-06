import { Router } from 'express';
import { postSignUp } from '../controllers/user-controller';
import { validateSchema } from '../middlewares/ValidateSchema';
import { newUserSchema } from '../schemas/new-user-schema';

export const UserRouter = Router();

UserRouter.post('/sign-up', validateSchema(newUserSchema), postSignUp);
