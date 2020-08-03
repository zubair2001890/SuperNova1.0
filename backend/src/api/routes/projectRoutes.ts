import ProjectsController from '../controllers/ProjectsController';
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  const projectsController = new ProjectsController();
  publicApi.route('/featured').get(projectsController.featured);
  publicApi.route('/subfield/:field_name').get(projectsController.subFieldsByFieldName);
  publicApi.route('/project').get(projectsController.project);
  publicApi.route('/project/:project_id').get(projectsController.projectByProjectID);
  publicApi.route('/createproject').put(projectsController.createProject);
  publicApi.route('/updateproject/:project_id').post(projectsController.updateProject);
}



  

  




