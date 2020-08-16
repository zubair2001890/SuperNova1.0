import React from "react";
import { makeStyles, Typography, CircularProgress } from "@material-ui/core";
import ProjectCard from "../../../components/ProjectCard";
import Body from "../../../components/ProjectCard/components/Body";

const useStyles = makeStyles(() => ({
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
        {projectsData && projectsData.map(renderProject(classes))}
      </div>
    </div>
  );
};

function renderProject(classes) {
  return (project) => (
    <ProjectCard
      key={project._id}
      headerUrl={project.projectImage}
      className={classes.card}
      id={project._id}
      body={<Body project={project} />}
    />
  );
}
