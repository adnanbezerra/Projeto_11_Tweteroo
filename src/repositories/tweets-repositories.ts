import { prisma } from '../database/prisma';
import { NewTweet } from '../types/tweets-types';

async function postNewTweet(newTweetContent: NewTweet) {
  const { username } = newTweetContent;

  const { avatar } = await prisma.users.findFirst({ where: { username } });

  return await prisma.tweets.create({ data: { ...newTweetContent, avatar } });
}

async function getTweets(page: number) {
  const taking = 10 * page;

  const tweets = await prisma.tweets.findMany({
    take: taking,
    orderBy: {
      id: 'desc',
    },
  });

  return tweets;
}

async function getTweetsByUsername(username: string) {
  return prisma.tweets.findMany({
    where: {
      username,
    },
  });
}

export const TweetsRepository = {
  postNewTweet,
  getTweets,
  getTweetsByUsername,
};
