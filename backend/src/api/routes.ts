import  userInteractions from './routes/userInteractionsRoutes';
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  userInteractions(publicApi, privateApi);
}