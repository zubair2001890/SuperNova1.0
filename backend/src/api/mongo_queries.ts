const mongoose = require('mongoose')
const {Project} = require('../models/project')


mongoose.connect('mongodb://uoovwklzznl5qbd3vnmc:CKB9CbXz4cbJrrrCskwU@bosn1sg8zx8aq8n-mongodb.services.clever-cloud.com:27017/bosn1sg8zx8aq8n')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

 async function getFeaturedProject(): Promise<Object>
    {
      const records = await Project.find().sort({'total_pledged': -1}); // To sort in descending order of totalPledged.
      return records[0]; // I.e. the project that has the most pledged.
 }

 function getAllSubfields(fieldID: number): Array<Object>
   {
      return null;
 }

 async function addProject(project: typeof Project)
 {
    await project.save();
 }

 function getFieldsDictionary()
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
 