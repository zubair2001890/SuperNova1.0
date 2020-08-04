import React from "react";
import { makeStyles, Avatar, Tooltip } from "@material-ui/core";
import ProjectCard from "../../../components/LargeProjectCard";
import FundsProgress from "../../../components/ProjectCard/components/FundsProgress";

const maxTitleLength = 45;

const useStyles = makeStyles((theme) => ({
  projectCardContainer: {
    display: "flex",
    justifyContent: "center",
  },
  cardBody: {
    "& > *": {
      marginTop: 0,
      marginBottom: 0,
      "&:not(:last-child)": { marginBottom: theme.spacing(2) },
    },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  projectTitle: {
    fontSize: 16,
    letterSpacing: 0.96,
    fontWeight: 700,
    lineHeight: "19px",
    fontFamily: "'Montserrat', sans-serif",
    maxHeight: 36,
    overflowY: "hidden",
    textAlign: "left",
    margin: 0,
  },
  avatar: {
    width: 56,
    height: 56,
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 1.12,
    fontWeight: 500,
    lineHeight: "18px",
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "left",
    marginLeft: 20,
  },
  nameAndAvatar: {
    display: "flex",
    justifyContent: "flex-start",
    width: "90%",
  },
  fundsProgress: {
    textAlign: "left",
    width: "70%",
  }
}));

export default ({ projectsData }) => {
  const classes = useStyles();
  return (
    <div className={classes.projectCardContainer}>
      {projectsData &&
        projectsData.map((project) => (
          <ProjectCard
            key={project._id}
            headerUrl={project.projectImage}
            aboutDescription={project.aboutDescription}
            significanceDescription={project.significanceDescription}
            details={
              <div className={classes.cardBody}>
                <p className={classes.projectTitle}>
                  {project.title.length < maxTitleLength ? (
                    project.title
                  ) : (
                    <Tooltip title={project.projectName} placement="top">
                      <span>
                        {project.title.slice(0, maxTitleLength - 3) + "..."}
                      </span>
                    </Tooltip>
                  )}
                </p>
                <div className={classes.nameAndAvatar}>
                  <Avatar
                    className={classes.avatar}
                    alt="Researcher Avatar"
                    src={project.avatarUrl}
                  />
                  <p className={classes.subtitle}>
                    {project.firstName} {project.lastName} <br />
                    {project.university}
                  </p>
                </div>
                <div className={classes.fundsProgress}>
                  <FundsProgress
                    fundsRaised={project.fundsRaised}
                    fundsGoal={project.fundsGoal}
                  />
                </div>
              </div>
            }
          />
        ))}
    </div>
  );
};
