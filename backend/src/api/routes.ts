import paymentRoutes from './routes/paymentRoutes'
import  productRoutes from './routes/productRoutes';
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  paymentRoutes(publicApi, privateApi);
  productRoutes(publicApi, privateApi);
}