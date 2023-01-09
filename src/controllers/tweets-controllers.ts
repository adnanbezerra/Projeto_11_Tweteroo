import { Request, Response } from 'express';
import { TweetsServices } from '../services/tweets-services';
import { NewTweet } from '../types/tweets-types';

export async function postNewTweet(req: Request, res: Response) {
  const newTweetContent: NewTweet = req.body;

  await TweetsServices.postNewTweet(newTweetContent);

  res.sendStatus(201);
}
