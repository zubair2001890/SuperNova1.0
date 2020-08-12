import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import ProjectCard from "../../components/ProjectCard";
import Body from "../../components/ProjectCard/components/Body";

const marginRight = "1rem";

const useStyles = makeStyles((theme) => ({
  projects: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  card: {
    [theme.breakpoints.up("md")]: {
      flexBasis: `calc(50% - ${marginRight})`,
      marginRight,
    },
    [theme.breakpoints.up("xl")]: {
      flexBasis: `calc(25% - ${marginRight})`,
    },
    marginBottom: "3.25rem",
  },
}));

const renderProject = (classes) => (projectData, index) => (
  <ProjectCard
    className={classes.card}
    key={index}
    body={<Body project={projectData} />}
    id={projectData._id}
  ></ProjectCard>
);

const renderProjects = (projects, classes) =>
  projects.map(renderProject(classes));

function Projects({ projects, filterProjects, account }) {
  const classes = useStyles();
  const filteredProjects = filterProjects(account, projects);
  return (
    <div className={classes.projects}>
      {projects && renderProjects(filteredProjects, classes)}
    </div>
  );
}

const mapStateToProps = ({ projects, account }) => ({
  projects: projects.data || [],
  account,
});

export default connect(mapStateToProps)(Projects);
