import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  Typography,
  Avatar,
  LinearProgress,
} from "@material-ui/core";
import projectMockData from "../../mockData/projects";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 273,
    height: 408,
    width: "100%",
    borderColor: theme.palette.common.gray,
  },
  projectImage: {
    position: "relative",
    top: 4,
    left: 3.9,
    width: 265,
    height: 149,
    borderRadius: 3,
  },
  projectTitleContainer: {
    maxWidth: 235,
    height: 38,
    position: "relative",
    top: 14,
    left: 12.9,
    fontSize: 16,
    width: "100%",
    overflow: "hidden",
  },
  projectTitle: {
    fontSize: 16,
    letterSpacing: 0.96,
    fontWeight: 700,
    lineHeight: "19px",
  },
  personPictureContainer: {
    width: 56,
    height: 58,
    position: "relative",
    top: 32,
    left: 12.9,
  },
  personPicture: {
    width: 56,
    height: 58,
  },
  personDetails: {
    fontSize: 14,
    letterSpacing: 1.12,
    fontWeight: 500,
    lineHeight: "18px",
  },
  personDetailsContainer: {
    maxWidth: 226,
    height: 45,
    position: "relative",
    top: 50,
    left: 13.9,
    width: "100%",
  },
  raisedProgressBarContainer: {
    width: 238,
    height: 5,
    position: "relative",
    top: 58.5,
    left: 12.9,
  },
  raisedProgressBar: {
    backgroundColor: theme.palette.common.black,
    height: 7,
    borderRadius: 50,
  },
  raisedDescriptionContainer: {
    width: "100%",
    position: "relative",
    top: 74,
    left: 13.9,
  },
  raisedDescription: {
    fontSize: 15,
    letterSpacing: 0.75,
    fontWeight: 700,
    lineHeight: "29px",
  },
}));
const ProjectCard = (props) => {
  const classes = useStyles();
  console.log(projectMockData[1].first_name);
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.projectImage}
        title="Project Image"
        image={projectMockData[1].project_image_url}
      />
      <div className={classes.projectTitleContainer}>
        <Typography className={classes.projectTitle} variant="h4">
          {projectMockData[1].project_title}
        </Typography>
      </div>
      <div className={classes.personPictureContainer}>
        <Avatar
          className={classes.personPicture}
          alt="Project Researcher"
          src={projectMockData[1].avatar_url}
        />
      </div>
      <div className={classes.personDetailsContainer}>
        <Typography variant="h6" className={classes.personDetails}>
          {projectMockData[1].first_name} {projectMockData[1].last_name}
        </Typography>
        <Typography variant="h6" className={classes.personDetails}>
          {projectMockData[1].university}
        </Typography>
      </div>
      <div className={classes.raisedProgressBarContainer}>
        <LinearProgress
          variant="determinate"
          value={
            (projectMockData[1].total_raised_funds /
              projectMockData[1].funds_goal) *
            100
          }
          color="secondary"
          className={classes.raisedProgressBar}
        />
      </div>
      <div className={classes.raisedDescriptionContainer}>
        <Typography className={classes.raisedDescription} variant="h5">
          £{parseInt(projectMockData[1].total_raised_funds).toLocaleString()}{" "}
          raised of £{parseInt(projectMockData[1].funds_goal).toLocaleString()}{" "}
          goal
        </Typography>
      </div>
    </Card>
  );
};
export default ProjectCard;
