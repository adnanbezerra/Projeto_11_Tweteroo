import { TweetsRepository } from '../repositories/tweets-repositories';
import { NewTweet } from '../types/tweets-types';

async function postNewTweet(newTweetContent: NewTweet) {
  await TweetsRepository.postNewTweet(newTweetContent);
}

export const TweetsServices = {
  postNewTweet,
};
