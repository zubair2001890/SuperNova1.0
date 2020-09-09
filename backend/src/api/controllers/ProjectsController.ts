import { Request, Response } from "express";
import { Project } from "../models/Project";
import {
  getProjectsBySubfieldID,
  getProjectsByProjectScientistID,
  getProjectsByFieldName,
  getProjectByProjectID,
  getFeaturedProjects,
  getAllSubfields,
  getProfileByID,
} from "../mongoQueries";
import { addStringToArray, arrayContainsString } from "../helpers";
import * as jwt_decode from "jwt-decode";

class ProjectsController {
  constructor() { }

  public featured = async (req: Request, res: Response) => {
    let featuredProjects = new Array();
    let allProjects = await getFeaturedProjects();
    allProjects.forEach((project) => {
      if (
        (project.totalPledged < project.goal ||
          project.totalPledged === undefined) &&
        featuredProjects.length < 4
      ) {
        featuredProjects.push(project); // This code is now necessary because if a project has reached its goal, it should not feature.
      }
    });
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
    } else if (req.query.subfield_id !== undefined) {
      projects = await getProjectsBySubfieldID(
        Number(req.query.subfield_id.toString())
      );
    } else if (req.query.project_scientist_id !== undefined) {
      projects = await getProjectsByProjectScientistID(
        Number(req.query.project_scientist_id.toString())
      );
    } else if (req.query.project_id !== undefined) {
      projects = await getProjectByProjectID(req.query.project_id.toString());
    }
    res.send(projects);
  };

  public projectByProjectID = async (req: Request, res: Response) => {
    let selectedProject = await getProjectByProjectID(req.params.project_id);
    res.send(selectedProject);
  };

  public createProject = async (req: Request, res: Response) => {
    let link = [];
    if (req.body.link !== undefined) {
      link.push(req.body.link);
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
      subfieldID: req.body.subfieldID,
      fullName: req.body.teamDescription[0].name,
      statusName: req.body.statusName,
      link: link,
      backers: new Array<String>(),
    });
    await project.save();
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
      err,
      result
    ) {
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
}
export default ProjectsController;
