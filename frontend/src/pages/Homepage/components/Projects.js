import React from "react";
import {
  makeStyles,
  Typography,
  Avatar,
  CircularProgress,
  Tooltip,
} from "@material-ui/core";
import ProjectCard from "../../../components/ProjectCard";
import FundsProgress from "../../../components/ProjectCard/components/FundsProgress";

const maxTitleLength = 45;

const useStyles = makeStyles((theme) => ({
  sectionContainer: { minHeight: "100vh" },
  sectionTitle: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.09em",
    marginBottom: "10rem",
  },
  projectCardsGrid: {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
  },
  card: {
    margin: "1rem",
  },
  cardBody: {
    "& > *": {
      marginTop: 0,
      marginBottom: 0,
      "&:not(:last-child)": { marginBottom: theme.spacing(2) },
    },
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
}));

export default ({ projectsData, projectsLoading }) => {
  const classes = useStyles();
  return (
    <div className={classes.sectionContainer}>
      <Typography variant="h2" className={classes.sectionTitle}>
        FEATURED PROJECTS
      </Typography>
      <div className={classes.projectCardsGrid}>
        {projectsLoading && <CircularProgress color="secondary" />}
        {projectsData &&
          projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              headerUrl={project.headerUrl}
              className={classes.card}
              body={
                <div className={classes.cardBody}>
                  <p className={classes.projectTitle}>
                    {project.title.length < maxTitleLength ? (
                      project.title
                    ) : (
                      <Tooltip title={project.title} placement="top">
                        <span>
                          {project.title.slice(0, maxTitleLength - 3) + "..."}
                        </span>
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
                  <FundsProgress
                    fundsRaised={project.fundsRaised}
                    fundsGoal={project.fundsGoal}
                  />
                </div>
              }
            />
          ))}
      </div>
    </div>
  );
};
