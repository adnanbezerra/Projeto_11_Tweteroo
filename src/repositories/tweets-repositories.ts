import { prisma } from '../database/prisma';
import { NewTweet } from '../types/tweets-types';

async function postNewTweet(newTweetContent: NewTweet) {
  const { username } = newTweetContent;

  const { avatar } = await prisma.users.findFirst({ where: { username } });

  return await prisma.tweets.create({ data: { ...newTweetContent, avatar } });
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
