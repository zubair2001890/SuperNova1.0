import paymentRoutes from './routes/paymentRoutes'
import  projectRoutes from './routes/projectRoutes';
<<<<<<< HEAD
=======
import  profileRoutes from './routes/profileRoutes';
>>>>>>> e0ff23a36d49cd1b62e9c5eaf71176fdc3b0cc64
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  paymentRoutes(publicApi, privateApi);
  projectRoutes(publicApi, privateApi);
<<<<<<< HEAD
=======
  profileRoutes(publicApi, privateApi);
>>>>>>> e0ff23a36d49cd1b62e9c5eaf71176fdc3b0cc64
}