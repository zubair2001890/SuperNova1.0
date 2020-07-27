import React from "react";
import { connect } from "react-redux";
import { withAuth0 } from "@auth0/auth0-react";
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

function Projects({ projects, filterProjects, auth0 }) {
  const classes = useStyles();
  const filteredProjects = filterProjects(auth0.user, projects);
  return (
    <div className={classes.projects}>
      {projects && renderProjects(filteredProjects, classes)}
    </div>
  );
}

const WithAuth = withAuth0(Projects);

const mapStateToProps = ({ allProjects }) => ({ projects: allProjects });

export default connect(mapStateToProps)(WithAuth);
