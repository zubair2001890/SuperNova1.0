import UserInteractionsController from './../controllers/UserInteractionsController';
import * as Express from 'express';
import { Express as IExpress } from 'express';
import {Material} from '../models/Material'
import {Project} from '../models/Project'
import { read } from 'fs';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  const controller = new UserInteractionsController();

  /*publicApi.route('/login')
    .get(controller.login);
*/
  publicApi.route('/featured').get(controller.featured);
  publicApi.route('/subfield/:field_id').get(controller.subFieldsByFieldID);
  publicApi.route('/project').get(controller.project);
  publicApi.route('/createproject').put(controller.createProject);
  publicApi.route('/updateproject/:project_id').post(controller.updateProject);
  
  

}



  

  




