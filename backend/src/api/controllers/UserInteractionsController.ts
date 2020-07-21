import { Request, Response } from 'express';
import {Material} from '../models/Material'
import {LabNotes} from '../models/LabNotes'
import {Project} from '../models/Project';
import {getFeaturedProject, getAllSubfields, getProjectsByFieldID, getProjectsBySubfieldID, getProjectsByProjectScientistID, getProjectsByProjectID, createProject} from '../mongoQueries'
import moment = require('moment');

class UserInteractionsController {
    constructor() {
    }

    public login = (req: Request, res: Response) => {
      res.send('Not yet implemented.');
    }

  public featured = async (req: Request, res: Response) => {
      const featuredProject = await getFeaturedProject();
      res.send(featuredProject);
    }

    public subFieldsByFieldID = async (req: Request, res: Response) {
      let fieldID = req.params.field_id
      const subFields = await getAllSubfields(fieldID);
      res.send(subFields);
    }

    public project = async (req: Request, res: Response) => {
    let projects = null;
      if (req.query.field_id !== undefined)
      {
        projects = getProjectsByFieldID
      }
      else if (req.query.subfield_id !== undefined)
      {
        projects = getProjectsBySubfieldID
      }
      else if (req.query.project_scientist_id !== undefined)
      {
        projects = getProjectsByProjectScientistID
      }
      else if (req.query.project_id !== undefined)
      {
        projects = getProjectsByProjectID
      }
      res.send(projects)
  }

  public createProject = async (req: Request, res: Response) => {
    let project = new Project({
      projectName: req.body.project_name,
      projectDescription: req.body.project_description,
      startDate: moment(req.body.date_started).format('DD/MM/YYYY'),
      teamDescription: req.body.team_description,
      methodDescription: req.body.method_description,
      projectImage: req.body.project_image,
      goal: req.body.goal,
      projectScientistId: req.body.project_scientist_id,
      fieldID: req.body.field_id,
      subfieldID: req.body.subfield_id,
      numberBackers: 0, // Hardcoded to 0 initially, as presumably a new project will have 0 backers.
      });
         await project.save();
    let projectIDObject = await Project.findById(project._id, '_id').exec();
    let material = new Material({
      projectID: projectIDObject._id,
      projectDescription: req.body.projectDescription,
      link: req.body.link
    })
    material.save();    
    res.send(projectIDObject);
  }
  public updateProject = async (req: Request, res: Response) => {
    let selectedProject = null;
    let labNotes = null;
    let projectQuery = await Project.findById(req.params.project_id, function (err, docs)
    {
        if (err)
        {
          console.log(err);
        }
        selectedProject = docs;
    });
    await LabNotes.findById(selectedProject._id, function (err,docs)
    {
      if (err)
      {
        console.log(err);
      }
      labNotes = docs;
  });
    // The following code is to avoid any fields being updated with undefined, as not all the put parameters
    // are necessarily going to be passed over.
    let projectName = selectedProject.projectName;
    if (req.body.project_Name !== undefined)
    {
      projectName = req.body.project_name;  
    }
    let projectDescription = selectedProject.projectDescription;  
    if (req.body.project_Description !== undefined)
    {
      projectDescription = req.body.project_Description;
    }
    let teamDescription = selectedProject.teamDescription;
    if (req.body.team_description !== undefined)
    {
      teamDescription = req.body.team_description;
    }
    let methodDescription = selectedProject.methodDescription;
    if (req.body.method_description !== undefined)
    {
      methodDescription = req.body.method_description;
    }
    let timelineDescription = selectedProject.timelineDescription;
    if (req.body.timeline_description !== undefined)
    {
      timelineDescription = req.body.timeline_description;
    }
    if (req.body.lab_notes !== undefined)
    {
      this.createLabNotes(selectedProject._id, req.body.lab_notes); // The function needs to be filled out.
    }
    let projectImage = selectedProject.projectImage;
    if (req.body.project_image !== undefined)
    {
      projectImage = req.body.project_image;
    }
    let goal = selectedProject.goal;
    if (req.body.goal !== undefined)
    {
      goal = req.body.goal;
    }
    let fieldID = selectedProject.fieldID;
    if (req.body.field_id !== undefined)
    {
      fieldID = req.body.field_id;
    }
    let subfieldID = selectedProject.subfieldID;
    if (req.body.subfield_id !== undefined)
    {
      subfieldID = req.body.subfield_id;
    }
    if (req.body.link !== undefined)
    {
      this.createLink(selectedProject._id, projectDescription, req.body.link);
    }
    let projectStatusID = selectedProject.projectStatusID;
    if (req.body.status_name !== undefined)
    {
      projectStatusID = this.statusStringToInt(req.body.status_name);
    }
    let update = 
    {projectName: projectName,
    projectDescription: projectDescription,
  teamDescription: teamDescription,
  methodDescription: methodDescription,
  timelineDescription: timelineDescription,
  projectImage: projectImage,
  goal: goal,
  fieldID: fieldID,
  subfieldID: subfieldID,
      projectStatusID: projectStatusID
}
    projectQuery.updateOne(update);
    res.send({}); // Simply sending an empty object as per Apiary.
  }

  private createLink(projectID: String, description: String, link: Array<String>)
  {
    let material = new Material({
      projectID: projectID,
      description: description,
      link: link
    });
    material.save();
  }
  
  private createLabNotes(projectID: String, labNotesText: Array<String>)
  {
    let labNotes = new LabNotes({
        projectID: projectID,
        labNotesText: labNotesText,
        ts: Date.now() // To get a unix timestamp.
    });
    labNotes.save();    
  }

  private statusStringToInt(statusString: String)
  {
    if (statusString === "Active")
    {
      return 1;
    }
    else
    {
      return 0;
    }  
  }

  private intToStatusString(statusint: Number)
  {
      if (statusint == 1)
      {
        return "Active";
      }
      else
      {
        return "Inactive";
      }
  }
}
export default UserInteractionsController;