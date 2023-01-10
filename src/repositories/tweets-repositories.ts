import { prisma } from '../database/prisma';
import { NewTweet } from '../types/tweets-types';

async function postNewTweet(newTweetContent: NewTweet) {
  return await prisma.tweets.create({ data: newTweetContent });
}

async function getTweets() {
  const tweets = await prisma.tweets.findMany({
    take: 10,
    orderBy: {
      id: 'desc',
    },
  });

  return tweets;
}

export const TweetsRepository = {
  postNewTweet,
  getTweets,
};
