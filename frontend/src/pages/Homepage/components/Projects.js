import React from "react";
import {
  makeStyles,
  Typography,
  Avatar,
  LinearProgress,
  CircularProgress,
  Tooltip,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectData as selectProjectsData } from "../../../store/slices/projectsSlice";
import { selectLoading as selectProjectsLoading } from "../../../store/slices/projectsSlice";
import ProjectCard from "../../../components/ProjectCard";

const useStyles = makeStyles((theme) => ({
  projectsContainer: { minHeight: "100vh" },
  projectsContainerTitle: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.09em",
    marginBottom: "10rem",
  },
  projectsGrid: {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
  },
  projectTitle: {
    fontSize: 16,
    letterSpacing: 0.96,
    fontWeight: 700,
    lineHeight: "19px",
    fontFamily: "'Montserrat', sans-serif",
    maxHeight: 36,
    overflowY: "hidden",
  },
  card: {
    maxWidth: 273,
  },
  avatar: {
    width: 56,
    height: 56,
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 1.12,
    fontWeight: 600,
    lineHeight: "18px",
    fontFamily: "'Montserrat', sans-serif",
  },
  linearProgress: {
    backgroundColor: theme.palette.common.black,
    height: 7,
    borderRadius: 50,
  },
  footer: {
    fontSize: 15,
    letterSpacing: 0.9,
    fontWeight: 700,
    lineHeight: "29px",
    fontFamily: "'Montserrat', sans-serif",
  },
}));

const getProgressValue = ({ fundsRaised, fundsGoal }) => {
  if (typeof fundsRaised === "number" && typeof fundsGoal === "number") {
    return (fundsRaised / fundsGoal) * 100;
  }
  return 0;
};

const getFundsProgressCaption = ({ fundsRaised, fundsGoal }) => {
  if (typeof fundsRaised === "number" && typeof fundsGoal === "number") {
    return `${new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(fundsRaised)}
      raised of
      ${new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      }).format(fundsGoal)}
      goal`;
  }
  return "-";
};

export default () => {
  const classes = useStyles();
  const projectsData = useSelector(selectProjectsData);
  const projectsLoading = useSelector(selectProjectsLoading);
  return (
    <div className={classes.projectsContainer}>
      <Typography variant="h2" className={classes.projectsContainerTitle}>
        FEATURED PROJECTS
      </Typography>
      <div className={classes.projectsGrid}>
        {projectsLoading && <CircularProgress color="secondary" />}
        {projectsData &&
          projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              headerUrl={project.headerUrl}
              className={classes.card}
              body={
                <>
                  <p className={classes.projectTitle}>
                    {project.title.length < 45 ? (
                      project.title
                    ) : (
                      <Tooltip title={project.title} placement="top">
                        <span>{project.title.slice(0, 41) + "..."}</span>
                      </Tooltip>
                    )}
                  </p>
                  <Avatar
                    className={classes.avatar}
                    alt="Researcher Avatar"
                    src={project.avatarUrl}
                  />
                  <p className={classes.subtitle}>
                    {project.firstName} {project.lastName} <br />
                    {project.university}
                  </p>
                  <LinearProgress
                    variant="determinate"
                    value={getProgressValue({
                      fundsRaised: project.fundsRaised,
                      fundsGoal: project.fundsGoal,
                    })}
                    color="secondary"
                    className={classes.linearProgress}
                  />
                  <p className={classes.footer}>
                    {getFundsProgressCaption({
                      fundsRaised: project.fundsRaised,
                      fundsGoal: project.fundsGoal,
                    })}
                  </p>
                </>
              }
            />
          ))}
      </div>
    </div>
  );
};
