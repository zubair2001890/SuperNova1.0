import paymentRoutes from './routes/paymentRoutes'
import  projectRoutes from './routes/projectRoutes';
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  paymentRoutes(publicApi, privateApi);
  projectRoutes(publicApi, privateApi);
}