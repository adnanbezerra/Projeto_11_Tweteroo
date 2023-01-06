import Joi from 'joi';

export const newUserSchema = Joi.object({
  username: Joi.string().required(),
  avatar: Joi.string().uri().required(),
});
