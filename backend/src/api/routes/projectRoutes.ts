import ProjectsController from '../controllers/ProjectsController';
import * as Express from 'express';
import { Express as IExpress } from 'express';

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  const projectsController = new ProjectsController();
  publicApi.route('/featured').get(projectsController.featured);
  publicApi.route('/subfield/:field_name').get(projectsController.subFieldsByFieldName);
  publicApi.route('/project').get(projectsController.project);
  publicApi.route('/project/:project_id').get(projectsController.projectByProjectID);
<<<<<<< HEAD
<<<<<<< HEAD
  publicApi.route('/createproject').put(projectsController.createProject);
  publicApi.route('/updateproject/:project_id').post(projectsController.updateProject);
=======
  privateApi.route('/createproject').put(projectsController.createProject);
  privateApi.route('/updateproject/:project_id').post(projectsController.updateProject);
>>>>>>> e0ff23a36d49cd1b62e9c5eaf71176fdc3b0cc64
=======
  publicApi.route('/createproject').put(projectsController.createProject);
  publicApi.route('/updateproject/:project_id').post(projectsController.updateProject);
>>>>>>> 86164e3b8c9125e188061fb0af886930bfd0c43e
}



  

  




