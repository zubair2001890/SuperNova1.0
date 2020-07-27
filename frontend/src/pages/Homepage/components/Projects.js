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
        {projectsData &&
          projectsData.map((project) => {
            const { _id } = project;
            return (
              <ProjectCard
                key={_id}
                id={_id}
                headerUrl={project.headerUrl}
                className={classes.card}
                body={<Body project={project} />}
              />
            );
          })}
      </div>
    </div>
  );
};
