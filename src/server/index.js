import express from 'express';
import { errorMiddleware } from './middlewares/error';
import { httpLoggerMiddleware } from './middlewares/http-logger';
import { notFoundMiddleware } from './middlewares/not-found';
import { router } from './routes';

export const isProd = process.env.NODE_ENV === 'production';
const server = express();

server.disable('x-powered-by');
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
server.use(httpLoggerMiddleware);
server.use('/', router);
server.use(notFoundMiddleware);
server.use(errorMiddleware);

export default server;
