import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandler from './middlewares/ErrorHandler';
import { UserRouter } from './routes/user-routes';
import { TweetRouter } from './routes/tweets-routes';
dotenv.config()

const server = express();
server.use(cors());
server.use(express.json());

// routes
server.use(UserRouter);
server.use(TweetRouter);
server.use(errorHandler);

export default server;