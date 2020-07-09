import UserInteractionsController from './../controllers/UserInteractionsController';
import { Express as IExpress } from 'express';

export default (app: IExpress) => {
  const controller = new UserInteractionsController();

  app.route('/login')
    .get(controller.login);
}