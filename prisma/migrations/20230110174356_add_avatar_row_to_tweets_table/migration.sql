/*
  Warnings:

  - Added the required column `avatar` to the `Tweets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tweets" ADD COLUMN     "avatar" TEXT NOT NULL;
