import { prisma } from '../database/prisma';
import { NewTweet } from '../types/tweets-types';

async function postNewTweet(newTweetContent: NewTweet) {
  await prisma.tweets.create({ data: newTweetContent });
}

export const TweetsRepository = {
  postNewTweet,
};
