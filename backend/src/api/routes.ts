import  userInteractions from './routes/userInteractionsRoutes';
import { Express as IExpress } from 'express';

export default (app: IExpress) => {
  userInteractions(app);
}