const mongoose = require('mongoose')

import {Project} from './models/Project'
import {ProjectBacker} from './models/ProjectBacker'
import {SubField} from './models/SubField';

mongoose.connect('mongodb://uoovwklzznl5qbd3vnmc:CKB9CbXz4cbJrrrCskwU@bosn1sg8zx8aq8n-mongodb.services.clever-cloud.com:27017/bosn1sg8zx8aq8n')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

 export const getProjectsSortedByTotalPledged = async function()
    {
      let resolver, rejecter;
      const promise = new Promise((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;
      })
     let projectsQuery = Project.find(function(err, docs)
     {
        if (err)
        {
           console.log(err);
           rejecter(null);
        }
        //console.log("Returned project = " + docs);
        resolver(docs)
     });
     projectsQuery.sort({'totalPledged': -1}); // To sort in descending order of totalPledged.
      return promise;
      }

 export const getAllSubfieldsByFieldName = function(fieldName: String)
   {
      return SubField.find({fieldName: fieldName}).exec();
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

 export const getProjectsByFieldName = async function(fieldName: String)
 {
   let resolver, rejecter;
   const promise = new Promise((resolve, reject) => {
     resolver = resolve;
     rejecter = reject;
   })
  Project.find({fieidName: fieldName}, function(err, docs)
  {
     if (err)
     {
        console.log(err);
        rejecter(null);
     }
     //console.log("Returned project = " + docs);
     resolver(docs)
  });
   return promise;
 }
 

 export const getProjectsBySubfieldID = async function(subfieldID: Number)
 {
   let resolver, rejecter;
   const promise = new Promise((resolve, reject) => {
     resolver = resolve;
     rejecter = reject;
   })
  Project.find({projectSubfieldID: subfieldID}, function(err, docs)
  {
     if (err)
     {
        console.log(err);
        rejecter(null);
     }
     //console.log("Returned project = " + docs);
     resolver(docs)
  });
   return promise;
 }

 export const getProjectsByProjectScientistID = async function(projectScientistID: Number)
 {
   let resolver, rejecter;
    const promise = new Promise((resolve, reject) => {
      resolver = resolve;
      rejecter = reject;
    })
   Project.find({projectScientistID: projectScientistID}, function(err, docs)
   {
      if (err)
      {
         console.log(err);
         rejecter(null);
      }
      //console.log("Returned project = " + docs);
      resolver(docs)
   });
    return promise;
 }

 export const getProjectByProjectID = function(projectID: String): Promise<any>
 {
    let resolver, rejecter;
    const promise = new Promise((resolve, reject) => {
      resolver = resolve;
      rejecter = reject;
    })
   Project.findById(projectID, function(err, docs)
   {
      if (err)
      {
         console.log(err);
         rejecter(null);
      }
      //console.log("Returned project = " + docs);
      resolver(docs)
   });
   return promise;
} 
 
export const addAmountPledged = async function(projectID: String, newAmountPledged: number, newBacker: String)
{
   let amountPledged = 0;
   const selectedProject = await this.getProjectByProjectID(projectID);
   if ((selectedProject["amountPledged"] !== null) && (selectedProject["amountPledged"] !== undefined))
   {
      amountPledged = selectedProject["amountPledged"];
   }
   let total = amountPledged + newAmountPledged;
   let update = {amountPledged: total};
   Project.findByIdAndUpdate(update, function)

  
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


 