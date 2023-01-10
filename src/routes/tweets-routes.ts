import { Router } from 'express';
import {
  getTweets,
  getTweetsByUsername,
  postNewTweet,
} from '../controllers/tweets-controllers';
import { validateSchema } from '../middlewares/ValidateSchema';
import { newTweetSchema } from '../schemas/new-tweet-schema';

export const TweetRouter = Router();

TweetRouter.post('/new-tweet', validateSchema(newTweetSchema), postNewTweet);
TweetRouter.get('/tweets', getTweets);
TweetRouter.get('/tweets/:username', getTweetsByUsername);
