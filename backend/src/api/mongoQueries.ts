const mongoose = require('mongoose')

import {Project} from './models/Project'
import {UserAccount} from './models/UserAccount'
import { addStringToArray, arrayContainsString } from './helpers';

mongoose.connect('mongodb://uoovwklzznl5qbd3vnmc:CKB9CbXz4cbJrrrCskwU@bosn1sg8zx8aq8n-mongodb.services.clever-cloud.com:27017/bosn1sg8zx8aq8n')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

 export const getProjectsSortedByTotalPledged = async function(): Promise<any>
    {
       console.log("getProjectsSortedByTotalPledged method called");
       let resolver, rejecter;
       const promise = new Promise((resolve, reject) => {
         resolver = resolve;
         rejecter = reject;
       })
      let projectsQuery = Project.find({}, function(err, docs)
      {
         if (err)
         {
            console.log(err);
            rejecter(null);
         }
         resolver(docs)
      });
      projectsQuery.sort({totalPledged: -1});
       return promise;
      }

 export const getAllSubfields = function(fieldName: String): Promise<any>
   {
      let resolver, rejecter;
      const promise = new Promise((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;
      })
     Project.find({fieldName: fieldName}, 'subfieldID subfieldName',function(err, docs)
     {
        if (err)
        {
           console.log(err);
           rejecter(null);
        }
        resolver(docs)
     });
     return promise;
   }

 export const getProjectsByFieldName = async function(fieldName: String): Promise<any>
 {
   let resolver, rejecter;
   const promise = new Promise((resolve, reject) => {
     resolver = resolve;
     rejecter = reject;
   })
  Project.find({fieldName: fieldName}, function(err, docs)
  {
     if (err)
     {
        console.log(err);
        rejecter(null);
     }
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
  Project.find({subfieldID: subfieldID}, function(err, docs)
  {
     if (err)
     {
        console.log(err);
        rejecter(null);
     }
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
      resolver(docs)
   });
   return promise;
} 

export const getProfileByID = function(profileID: String): Promise<any>
{
   let resolver, rejecter;
   const promise = new Promise((resolve, reject) => {
     resolver = resolve;
     rejecter = reject;
   })
   UserAccount.findById(profileID, function(err, docs)
  {
     if (err)
     {
        console.log(err);
        rejecter(null);
     }
     resolver(docs)
  });
  return promise;
} 
 
export const addAmountPledged = async function(projectID: String, newAmountPledged: number, newBacker: String)
{
   console.log("The addAmountPledged method has been called");
   let totalPledged = 0;
   let backers = new Array<String>();
   const selectedProject = await this.getProjectByProjectID(projectID);
   if ((selectedProject["totalPledged"] !== null) && (selectedProject["totalPledged"] !== undefined))
   {
      totalPledged = selectedProject["totalPledged"];
   }
   if (selectedProject["backers"] !== null && selectedProject["backers"] !== undefined)
   {
      backers = selectedProject["backers"];
   }
   let total = totalPledged + newAmountPledged;
   if (!arrayContainsString(backers, newBacker))
   {
      backers = addStringToArray(backers, newBacker);
   }
  let update = {totalPledged: total, backers: backers};
   await Project.findByIdAndUpdate(projectID, update, function(err, response)
   {
      if (err)
      {
         console.log(err);
      }
   });
}

 