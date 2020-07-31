import { Request, Response } from 'express';
import {Project} from '../models/Project';
import {getProjectsBySubfieldID, getProjectsByProjectScientistID, getProjectsByFieldName, getProjectByProjectID, getProjectsSortedByTotalPledged, getAllSubfields} from '../mongoQueries'
import {addStringToArray} from '../helpers';
import moment = require('moment');

class ProjectsController {
    constructor() {
    }

    public featured = async (req: Request, res: Response) => {
      let projectsSortedByTotalPledged = await getProjectsSortedByTotalPledged(); // This works fine.
      if (projectsSortedByTotalPledged === null || projectsSortedByTotalPledged.length === 0)
      {
        res.send({})
      }
      else
      {
        res.send(projectsSortedByTotalPledged[0]);
      }
    }

    public subFieldsByFieldName = async (req: Request, res: Response) => {
      let fieldName = req.params.field_name
      const subFields = getAllSubfields(fieldName);
      res.send(subFields);
    }

    public project = async (req: Request, res: Response) => {
      
    let projects = null;
      if (req.query.field_name !== undefined)
      {
        projects = await getProjectsByFieldName(req.query.field_name.toString());
      }
      else if (req.query.subfield_id !== undefined)
      {
        projects = await getProjectsBySubfieldID(Number(req.query.subfield_id.toString()));
      }
      else if (req.query.project_scientist_id !== undefined)
      {
        projects = await getProjectsByProjectScientistID(Number(req.query.project_scientist_id.toString()));
      }
      else if (req.query.project_id !== undefined)
      {
        projects = await getProjectByProjectID(req.query.project_id.toString());
      }
    res.send(projects)
  }

  public projectByProjectID = async(req: Request, res: Response) => {
    //let selectedProject = await getProjectsByFieldName("Biology");
    let selectedProject = await getProjectByProjectID(req.params.project_id);
    res.send(selectedProject);

   }

  public createProject = async (req: Request, res: Response) => {
    let link = [];
    if (req.body.link !== undefined)
    {
      link.push(req.body.link);
    }
    let startDate: String = req.body.startDate;
    let teamDescriptionArray = req.body.teamDescription;
    let teamDescription = new Array<Object>();
    let i = 0;
    while (i < teamDescriptionArray.length)
    {
      let teamObject = {
        name: teamDescriptionArray[i],
        role: teamDescriptionArray[i + 1],
        text: teamDescriptionArray[i + 2] 
      };
      teamDescription.push(teamObject);
      i += 3;
    } // The while loop ends here.

    let project = new Project({
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      university: req.body.university,
      // To get rid of both of the slashes, I get an error message saying that String does not have a replaceAll method.
      startDate: startDate.replace("/","").replace("/",""), 
      teamDescription: teamDescription,
      methodDescription: req.body.methodDescription,
      timelineDescription: req.body.timelineDescription,
      projectImage: req.body.projectImage,
      goal: req.body.goal,
      projectScientistID: req.body.projectScientistId,
      fieldName: req.body.fieldName,
      subfieldName: req.body.subfieldName,
      subfieldID: req.body.subfieldID,
      // The first name and last name fields now need replacing with different code to fetch them based on the projectScientistID using auth0, 
      // I'm giving them a dummy first name and surname so that the code still compiles and runs.
      firstName: "Joe",
      lastName: "Bloggs",
      //firstName: req.body.teamDescription[0].split(" ")[0], 
      //lastName: req.body.teamDescription[0].split(" ")[1].replace(",",""),
      statusName: req.body.statusName,
      link: link,
      backers: new Array<String>()
      });
         await project.save();
    let projectIDObject = await Project.findById(project._id, '_id').exec();
    res.send(projectIDObject);
  }
  public updateProject = async (req: Request, res: Response) => {
    let selectedProject = null;
    let labNotes = null;
    await Project.findById(req.params.project_id, function (err, docs)
    {
      console.log("selected project id = " + req.params.project_id);
        if (err)
        {
          console.log(err);
        }
        console.log("selectedProject = " + docs);
        selectedProject = docs;
    });
    console.log("update id = " + req.params.project_id);
   for (let property in req.body) {
    if (!req.body[property]) delete req.body[property] 
   }
   let update = req.body;
   if (req.body.labNotes !== undefined)
   {
     let labNotes = addStringToArray(selectedProject.labNotes, req.body.labNotes);
     labNotes = addStringToArray(labNotes, Date.now().toString());
     update.labNotes = labNotes;
   }
   if (req.body.link !== undefined)
   {
     update.link = addStringToArray(selectedProject.link, req.body.link);
   }
   Project.findByIdAndUpdate(req.params.project_id, update, function (err, result){
      if (err)
      {
        console.log(err);
      }
      console.log("Result of update operation = " + result);
   });
    res.send({}); // Simply sending an empty object as per Apiary.
  }
}
export default ProjectsController;