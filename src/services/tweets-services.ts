import { TweetsRepository } from '../repositories/tweets-repositories';
import { NewTweet } from '../types/tweets-types';

async function postNewTweet(newTweetContent: NewTweet) {
  await TweetsRepository.postNewTweet(newTweetContent);
}

async function getTweets() {
  return await TweetsRepository.getTweets();
}

async function getTweetsByUsername(username: string) {
  return await TweetsRepository.getTweetsByUsername(username);
}

export const TweetsServices = {
  postNewTweet,
  getTweets,
  getTweetsByUsername,
};
