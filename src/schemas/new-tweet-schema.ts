import Joi from 'joi';

export const newTweetSchema = Joi.object({
  username: Joi.string().required(),
  tweet: Joi.string().required(),
});
