import morgan from 'morgan';
import { isProd } from '../';

export const httpLoggerMiddleware = isProd ? morgan('combined') : morgan('dev');
