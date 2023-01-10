import { TweetsRepository } from '../repositories/tweets-repositories';
import { NewTweet } from '../types/tweets-types';

async function postNewTweet(newTweetContent: NewTweet) {
  await TweetsRepository.postNewTweet(newTweetContent);
}

async function getTweets(page: number) {
  return await TweetsRepository.getTweets(page);
}

async function getTweetsByUsername(username: string) {
  return await TweetsRepository.getTweetsByUsername(username);
}

export const TweetsServices = {
  postNewTweet,
  getTweets,
  getTweetsByUsername,
};
