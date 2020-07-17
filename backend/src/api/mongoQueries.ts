const mongoose = require('mongoose')
const {Project} = require('../models/project')
import { Field } from '../models/Field';
const {Subfield} = require('../models/subfield')
const {UserAccount} = require('../models/useraccount')


mongoose.connect('mongodb://uoovwklzznl5qbd3vnmc:CKB9CbXz4cbJrrrCskwU@bosn1sg8zx8aq8n-mongodb.services.clever-cloud.com:27017/bosn1sg8zx8aq8n')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

 export const getFeaturedProject = function()
    {
      var projects = await Project.find().sort({'totalPledged': -1}); // To sort in descending order of totalPledged.
      return projects[0]; // I.e. the project that has the most pledged.
 }

 async function getProjectDetails(projectID: String)
 {
   return null; // I need to look at the screenshot for what to show here.
 }

 async function getAllSubfields(fieldID: number): Promise<Array<Object>>
   {
      return await Subfield.find({fieldID: fieldID}).exec();
   }

 async function getProjectsByFieldID(fieldID: number): Promise<Array<Object>>
 {
    return await Project.find({fieldID: fieldID}).exec();
 }

 async function getProjectsBySubfieldID(subFieldID: number): Promise<Array<Object>>
 {
    return await Project.find({subFieldID: subFieldID}).exec();
 }

 async function getProjectsByProjectScientistID(projectScientistID: number): Promise<Array<Object>>
 {
    return await Project.find({projectScientistID: projectScientistID}).exec();
 }

 async function getProjectByProjectID(projectID: String): Promise<Object>
 {
    return await Project.findById(projectID);
 }

 // So a Project will need to be passed in with the necessary parameters, as per the schema.
 async function createProject(project: typeof Project) 
 {
    await project.save();
   let field = new Field({
      fieldName: project.
   });  
}

async function updateProject(updatedProject: typeof Project)
{ // projectName, projectDescription, projectImage, goal, fieldID, subfieldID
   let currentProject = await Project.findById(updatedProject._id);
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


 