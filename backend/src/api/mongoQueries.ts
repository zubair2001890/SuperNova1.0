const mongoose = require('mongoose')

import {Project} from '../models/Project'
import {ProjectBacker} from '../models/ProjectBacker'
import {Subfield} from '../models/Subfield';
import UserAccount from '../models/UserAccount';


mongoose.connect('mongodb://uoovwklzznl5qbd3vnmc:CKB9CbXz4cbJrrrCskwU@bosn1sg8zx8aq8n-mongodb.services.clever-cloud.com:27017/bosn1sg8zx8aq8n')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

 export const getFeaturedProject = function()
    {
      var projects = Project.find().sort({'totalPledged': -1}); // To sort in descending order of totalPledged.
      var featuredProject = projects[0];
      featuredProject["project_id"] = featuredProject._id;
      return featuredProject; // I.e. the project that has the most pledged.
 }

 export const getAllSubfields = function(fieldID: String)
   {
      return Subfield.find({fieldID: fieldID}).exec();
   }

 function getProjectInfo(project: typeof Project)
 {
    project["project_id"] = project._id;
    project["link"] = project.projectImage;
    project["backers"] = getProjectBackers(project);
    project["status_name"] = getStatusName(project.projectStatusID)
    return project;
 }

 function getStatusName(statusCode: Number)
 {
    if (statusCode === 0)
    {
       return "Inactive";
    }
    else
    {
       return "Active";
    }
 }

 function getProjectBackers(project: typeof Project)
 {
    return ProjectBacker.find({projectID: project._id}).exec();
 }

 export const getProjectsByFieldID = function(fieldID: String)
 {
    let result = Array();
    let projects = Project.find({fieldID: fieldID}).exec();
    projects.array.forEach(project => {
      result.push(getProjectInfo(project));   
    });
    return result;
 }

 export const getProjectsBySubfieldID = function(subFieldID: String)
 {
    let result = Array();
    let projects = Project.find({subFieldID: subFieldID}).exec();
    projects.array.forEach(project => {
      result.push(getProjectInfo(project));   
    });
    return result;
 }

 export const getProjectsByProjectScientistID = function(projectScientistID: String)
 {
   let result = Array();
    let projects = Project.find({projectScientistID: projectScientistID}).exec();
    projects.array.forEach(project => {
      result.push(getProjectInfo(project));   
    });
    return result;
 }

 export const getProjectsByProjectID = function(projectID: String)
 {
   let result = Array();
    let projects = Project.findById(projectID).exec();
    projects.array.forEach(project => {
      result.push(getProjectInfo(project));   
    });
    return result;
 }

 // So a Project will need to be passed in with the necessary parameters, as per the schema.
 export const createProject = function(project: typeof Project) 
 {
    project.save();
}

export const updateProject = function(updatedProject: typeof Project)
{ // projectName, projectDescription, projectImage, goal, fieldID, subfieldID
   let currentProject = Project.findById(updatedProject._id);
   if (updatedProject.projectName !== undefined)
   {
      currentProject.projectName = updatedProject.projectName;
   }
   if (updatedProject.projectDescription !== undefined)
   {
      currentProject.projectDescription = updatedProject.projectDescription;
   }
   if (updatedProject.projectImage !== undefined)
   {
      currentProject.projectImage = updatedProject.projectImage;
   }
   if (updatedProject.goal !== undefined)
   {
      currentProject.goal = updatedProject.goal;
   }
   if (updatedProject.fieldID !== undefined)
   {
      currentProject.fieldID = updatedProject.fieldID;
   }
   if (updatedProject.subFieldID !== undefined)
   {
      currentProject.subFieldID = updatedProject.subFieldID;
   }
}

// So a UserAccount will need to be passed in with the necessary parameters, as per the schema.
async function createAccount(userAccount: typeof UserAccount)
{
   await userAccount.save();   
}

async function updateAccount(updatedAccount: typeof UserAccount)
{
   let currentUser = await UserAccount.findById(updatedAccount._id);
   if (updatedAccount.firstName !== undefined)
   {
      currentUser.firstName = updatedAccount.firstName;
   }
   if (updatedAccount.lastName !== undefined)
   {
      currentUser.lastName = updatedAccount.lastName;
   }
   if (updatedAccount.email !== undefined)
   {
      currentUser.email = updatedAccount.email;
   }
   if (updatedAccount.password !== undefined)
   {
      currentUser.password = updatedAccount.password;
   }
   if (updatedAccount.university !== undefined)
   {
      currentUser.university = updatedAccount.university;
   }
   if (updatedAccount.bio !== undefined)
   {
      currentUser.bio = updatedAccount.bio;
   }
   if (updatedAccount.fieldID !== undefined)
   {
      currentUser.fieldID = updatedAccount.fieldID;
   }
   if (updatedAccount.imageURL !== undefined)
   {
      currentUser.imageURL = updatedAccount.imageURL;
   }            
   currentUser.save();
}



async function getAccountInfo(userID: String): Promise<Object>
{
 return await UserAccount.findById(userID, 'firstName lastName university fieldName projectScientistID userAccountID imageURL').exec();
  }

  /*function getFieldsDictionary() This code is commented out because it's not necessary currently, but may be at some point in the future.
 {
   let fieldsDictionary = new Object();
   fieldsDictionary["biology"] = 0;
   fieldsDictionary["socialSciences"] = 1;
   fieldsDictionary["physics"] = 2;
   fieldsDictionary["mathematicsAndStatistics"] = 3;
   fieldsDictionary["spaceSciences"] = 4;
   fieldsDictionary["computerScience"] = 5;
   fieldsDictionary["engineeringAndTechnology"] = 6;
   fieldsDictionary["earthSciences"] = 7;
   fieldsDictionary["chemistry"] = 8;
   fieldsDictionary["medicine"] = 9;
   return fieldsDictionary;
}
*/


 