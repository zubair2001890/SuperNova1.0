import { Request, Response } from "express";
import { Project } from "../models/Project";
import {
  getProjectsBySubfieldID,
  getProjectsByProjectScientistID,
  getProjectsByFieldName,
  getProjectsBySubfieldName,
  getProjectByProjectID,
  getFeaturedProjects,
  getAllSubfields,
  getProfileByID,
  getProjectBackers,
  getLabNotesForProject
} from "../mongoQueries";
import { addStringToArray, arrayContainsString } from "../helpers";
import * as jwt_decode from "jwt-decode";
import { UserAccount } from "../models/UserAccount";
import { LabNote } from "../models/LabNote";

class ProjectsController {
  constructor() { }

  private getLabNotes = function (projectID) {
    let labNotes = null;
    getLabNotesForProject(projectID).then(function (result) {
      labNotes = result;
    });
    return labNotes;
  }

  public featured = async (req: Request, res: Response) => {
    let featuredProjects = new Array();
    let allProjects = await getFeaturedProjects();
    for (let index = 0; index < allProjects.length; index++) {
      let project = allProjects[index];
      if (project.totalPledged < project.goal ||
        project.totalPledged === undefined &&
        featuredProjects.length < 4
      )
        featuredProjects.push(allProjects[index]);
    }
    res.send(featuredProjects);
  };

  public subFieldsByFieldName = async (req: Request, res: Response) => {
    let fieldName = req.params.field_name;
    const subFields = getAllSubfields(fieldName);
    res.send(subFields);
  };

  public project = async (req: Request, res: Response) => {
    let projects = null;
    if (req.query.field_name !== undefined) {
      projects = await getProjectsByFieldName(req.query.field_name.toString());
    }
    else if (req.query.subfield_id !== undefined) {
      projects = await getProjectsBySubfieldID(
        Number(req.query.subfield_id.toString())
      );
      projects = await this.generateProjectsArrayIncludingLabNotes(projects);
    }
    else if (req.query.subfield_name !== undefined) {
      projects = await getProjectsBySubfieldName(
        (req.query.subfield_name.toString())
      );
      projects = await this.generateProjectsArrayIncludingLabNotes(projects);
    } else if (req.query.project_scientist_id !== undefined) {
      projects = await getProjectsByProjectScientistID(
        (req.query.project_scientist_id.toString())
      );
      projects = await this.generateProjectsArrayIncludingLabNotes(projects);
    } else if (req.query.project_id !== undefined) {
      projects = await getProjectByProjectID(req.query.project_id.toString());
      projects = await this.projectWithLabNotes(projects);
      if (projects.statusName !== "Active") {
        projects = {};
      }
    }
    res.send(projects);
  };

  public projectByProjectID = async (req: Request, res: Response) => {
    let selectedProject = await getProjectByProjectID(req.params.project_id);
    if (selectedProject.statusName !== "Active")
    {
      res.send({})
    }
    else
    {
    res.send(await this.projectWithLabNotes(selectedProject));
    }
  };

  private projectWithLabNotes = async function (project) {
    let projectObject = new Object();
    projectObject["projectName"] = project.projectName;
    projectObject["projectDescription"] = project.projectDescription;
    projectObject["university"] = project.university;
    projectObject["fullName"] = project.fullName;
    projectObject["startDate"] = project.startDate;
    projectObject["goal"] = project.goal;
    projectObject["totalPledged"] = project.totalPledged;
    projectObject["statusName"] = project.statusName;
    projectObject["subfieldID"] = project.subfieldID;
    projectObject["fieldName"] = project.fieldName;
    projectObject["subfieldName"] = project.subfieldName;
    projectObject["projectScientistID"] = project.projectScientistID;
    projectObject["projectImage"] = project.projectImage;
    projectObject["teamDescription"] = project.teamDescription;
    projectObject["methodDescription"] = project.methodDescription;
    projectObject["timelineDescription"] = project.timelineDescription;
    projectObject["labNotes"] = await getLabNotesForProject(project._id);
    projectObject["backers"] = await getProjectBackers(project._id);
    return projectObject;
  }

  private generateProjectsArrayIncludingLabNotes = async function (projectsList) {
    let result = [];
    for (let index = 0; index < projectsList.length; index++) {
      result.push(await this.projectWithLabNotes(projectsList[index]));
    }
    return result;
  }

  public createProject = async (req: Request, res: Response) => {
    let link = [];
    if (req.body.link !== undefined) {
      link.push(req.body.link);
    }
    let labNotes = [];
    if (req.body.labNotes !== undefined) {
      labNotes = req.body.labNotes;
    }
    let startDate: String = req.body.startDate;
    let whitespaceRegex = new RegExp(' ', 'g');
    let project = new Project({
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      university: req.body.university,
      startDate: startDate.replace(whitespaceRegex, ''),
      teamDescription: req.body.teamDescription,
      methodDescription: req.body.methodDescription,
      timelineDescription: req.body.timelineDescription,
      projectImage: req.body.projectImage,
      goal: req.body.goal,
      projectScientistID: req.body.projectScientistId,
      fieldName: req.body.fieldName,
      subfieldName: req.body.subfieldName,
      subfieldID: req.body.subfieldID,
      fullName: req.body.teamDescription[0].name,
      statusName: req.body.statusName,
      link: link,
      backers: new Array<String>()
    });
    await project.save();
    if (req.body.labNotes !== undefined) {
      let labNoteObject = req.body.labNotes;
      let labNote = new LabNote({
        labCommentary: labNoteObject.labCommentary,
        date: labNoteObject.date.replace(whitespaceRegex, ''),
        media: labNoteObject.media,
        projectID: project._id
      });
      await labNote.save();
    }
    UserAccount.findByIdAndUpdate(req.body.userID, { projectScientistID: req.body.projectScientistID },
      function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          console.log("Result after updating the UserAccount:");
          console.log(result);
        }
      });
    let projectIDObject = await Project.findById(project._id, "_id").exec();
    res.send(projectIDObject);
  };
  public updateProject = async (req: Request, res: Response) => {
    let selectedProject = null;
    await Project.findById(req.params.project_id, function (err, docs) {
      if (err) {
        console.log(err);
      }
      selectedProject = docs;
    });
    for (let property in req.body) {
      if (!req.body[property]) delete req.body[property];
    }
    let update = req.body;
    if (req.body.link !== undefined) {
      update.link = addStringToArray(selectedProject.link, req.body.link);
    }
    Project.findByIdAndUpdate(req.params.project_id, update, function (
      err, result) {
      if (err) {
        console.log(err);
      }
    });
    res.send({}); // Simply sending an empty object as per Apiary.
  }; //The updateProject function ends here.

  public deleteProjectByScientist = async (req: Request, res: Response) => {
    let selectedProject = null;
    Project.findById(req.body.projectID, function (err, docs) {
      if (err) {
        console.log(err);
      }
      selectedProject = docs;
    });
    if (selectedProject.projectScientistID !== req.body.userID) {
      throw new Error("A project can only be deleted by the project scientist");
    } else {
      Project.findByIdAndDelete(req.params.project_id, function (err, output) {
        if (err) {
          console.log(err);
        }
      });
    }
  }; // The deleteProjectByScientist function ends here.

  public updateProjectStatus = async (req: Request, res: Response) => {
    const userId = jwt_decode(
      req.header("Authorization").replace("Bearer ", "")
    ).sub;
    let userProfile = null;
    try {
      userProfile = await getProfileByID(userId);
      if (userProfile.isAdmin) {
        Project.findByIdAndUpdate(
          req.params.project_id,
          { statusName: req.body.statusName },
          function (err, result) {
            if (err) {
              console.log(err);
            }
          }
        ); // findByIdAndUpdate block ends here.
        res.send({});
      } // Ends the if block.
      else {
        throw new Error(
          "This user is not an admin user and therefore cannot update the project status."
        );
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  public deleteProjectByAdmin = async (req: Request, res: Response) => {
    const userId = jwt_decode(
      req.header("Authorization").replace("Bearer ", "")
    ).sub;
    let userProfile = null;
    try {
      userProfile = await getProfileByID(userId);
      if (userProfile.isAdmin) {
        Project.findByIdAndDelete(req.params.project_id, function (err, output) {
          if (err) {
            console.log(err);
          }
        });
      } // Ends the if block for if isAdmin()
      else {
        throw new Error("This user does not have admin privileges");
      }
    }
    catch (err) {
      console.log(err);
    }
  }// The deleteProjectByAdmin function ends here.

  public pendingProjects = async (req: Request, res: Response) => {
    const userId = jwt_decode(
      req.header("Authorization").replace("Bearer ", "")
    ).sub;
    let userProfile = null;
    try {
      userProfile = await getProfileByID(userId);
      if (userProfile.isAdmin) {
        Project.find({ projectStatus: "Pending" }, function (err, docs) {
          if (err) {
            console.log(err);
          }
          res.send(docs);
        });
      } // Ends the if block for if isAdmin()
      else {
        throw new Error("This user does not have admin privileges");
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  public projectBackers = async (req: Request, res: Response) => {
    res.send(await getProjectBackers(req.query.project_id.toString()));
  }
}
export default ProjectsController;
