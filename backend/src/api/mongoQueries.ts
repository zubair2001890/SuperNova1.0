const mongoose = require('mongoose')

import {Project} from './models/Project'
import {ProjectBacker} from './models/ProjectBacker'
import {SubField} from './models/SubField';

mongoose.connect('mongodb://uoovwklzznl5qbd3vnmc:CKB9CbXz4cbJrrrCskwU@bosn1sg8zx8aq8n-mongodb.services.clever-cloud.com:27017/bosn1sg8zx8aq8n')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

 export const getFeaturedProject = function()
    {
      let projects = null;    
      let featuredProject = null;    
      let projectsQuery = Project.find(function(err, docs){
         if (err)
         {
            console.log(err);
         }
         console.log("Returned projects = " + docs);
         console.log("Number of returned projects = " + docs.length);
         projects = docs;
      });
      projectsQuery.sort({'totalPledged': -1}); // To sort in descending order of totalPledged.
      if (projects == null || projects.length == 0) // I.e. if no projects have been added, which could happen.
      {
         return {};
      }
      else
      {
         featuredProject = projects[0];
         featuredProject["project_id"] = featuredProject._id;
         return featuredProject; // I.e. the project that has the most pledged.
      }
   }

 export const getAllSubfields = function(fieldID: String)
   {
      return SubField.find({fieldID: fieldID}).exec();
   }

 function getProjectInfo(id: String)
 {
    let selectedProject = null;
   Project.findById(id).exec(function (err, docs)
    {
      if (err)
      {
         console.log(err);
      }
      selectedProject = docs;
    });
    selectedProject["project_id"] = id;
    selectedProject["link"] = selectedProject.projectImage;
    selectedProject["backers"] = getProjectBackers(id);
    selectedProject["status_name"] = getStatusName(selectedProject.projectStatusID)
    return selectedProject;
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

 function getProjectBackers(id: String)
 {
    return ProjectBacker.find({projectID: id}).exec();
 }

 export const getProjectsByFieldID = async function(fieldID: String)
 {
    let result = Array();
    let projects = await Project.find({fieldID: fieldID}).exec();
    projects.forEach(project => {
      result.push(getProjectInfo(project._id));   
    });
    return result;
 }

 export const getProjectsBySubfieldID = async function(subFieldID: String)
 {
    let result = Array();
    let projects = await Project.find({subFieldID: subFieldID}).exec();
    projects.forEach(project => {
      result.push(getProjectInfo(project._id));   
    });
    return result;
 }

 export const getProjectsByProjectScientistID = async function(projectScientistID: String)
 {
   let result = Array();
    let projects = await Project.find({projectScientistID: projectScientistID}).exec();
    projects.forEach(project => {
      result.push(getProjectInfo(project._id));   
    });
    return result;
 }

 export const getProjectByProjectID = async function(projectID: String)
 {
   return await Project.findById(projectID).exec();
}

export const addAmountPledged = async function(projectID: String)
{
   Project.findById(projectID,(function(err,docs){

   }));
}

 
// So a UserAccount will need to be passed in with the necessary parameters, as per the schema.
/*async function createAccount(userAccount: typeof UserAccount)
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
  */
 // Any functionality to do with creating and editing user accounts is commented out for now.


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


 