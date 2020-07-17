import UserInteractionsController from './../controllers/UserInteractionsController';
import * as Express from 'express';
import { Express as IExpress } from 'express';
import {fieldFunction} from "../models/Field"
import {getFeaturedProject} from "../mongoQueries"

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  const controller = new UserInteractionsController();

  publicApi.route('/login')
    .get(controller.login);

  publicApi.get('/featured')
  .get(controller.featured)
}

