import { TweetsRepository } from '../repositories/tweets-repositories';
import { NewTweet } from '../types/tweets-types';

async function postNewTweet(newTweetContent: NewTweet) {
  await TweetsRepository.postNewTweet(newTweetContent);
}

async function getTweets() {
  return await TweetsRepository.getTweets();
}

export const TweetsServices = {
  postNewTweet,
  getTweets,
};
