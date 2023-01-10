import { Request, Response } from 'express';
import { TweetsServices } from '../services/tweets-services';
import { NewTweet } from '../types/tweets-types';

export async function postNewTweet(req: Request, res: Response) {
  const newTweetContent: NewTweet = req.body;

  await TweetsServices.postNewTweet(newTweetContent);

  res.sendStatus(201);
}

export async function getTweets(req: Request, res: Response) {
  const { page } = req.query;

  const tweets = await TweetsServices.getTweets(+page);

  res.send(tweets).status(200);
}

export async function getTweetsByUsername(req: Request, res: Response) {
  const { username } = req.params;

  const tweets = await TweetsServices.getTweetsByUsername(username);

  res.send(tweets).status(200);
}
