-- CreateTable
CREATE TABLE "Tweets" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "tweet" TEXT NOT NULL,

    CONSTRAINT "Tweets_pkey" PRIMARY KEY ("id")
);
