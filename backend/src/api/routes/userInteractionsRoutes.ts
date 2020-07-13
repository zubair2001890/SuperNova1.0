import UserInteractionsController from './../controllers/UserInteractionsController';
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  const controller = new UserInteractionsController();

  privateApi.route('/login')
    .get(controller.login);
}