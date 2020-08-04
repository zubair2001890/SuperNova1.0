import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { get } from "axios";
import Grid from "@material-ui/core/Grid";

import EditLayout from "../../../components/EditLayout";
import Nav from "./Nav";
import forms from "../../../constants/forms";
import { withStyles } from "@material-ui/core";
import { subtitle } from "../../../styles/form";

export const ProjectContext = React.createContext();

export class Layout extends Component {
  state = {
    project: null,
  };

  setProject = (project) => this.setState({ project });

  fetchProject = async () => {
    const { id } = this.props.match.params;
    const { data: results } = await get(`/api/projects/${id}`);
    const [project] = results;
    return project;
  };

  fetchAndSetProject = async () => {
    const project = await this.fetchProject();
    this.setProject(project);
  };

  componentDidMount() {
    this.fetchAndSetProject();
  }

  render() {
    const { project } = this.state;
    const { children, classes, ...other } = this.props;
    return (
      <EditLayout
        {...other}
        Nav={Nav}
        mainTitle="Edit Project"
        customClasses={classes}
      >
        <ProjectContext.Provider value={project}>
          <Grid container justify="space-between">
            {children}
          </Grid>
        </ProjectContext.Provider>
      </EditLayout>
    );
  }
}

const styles = (theme) => ({
  subtitle: {
    ...subtitle,
    letterSpacing: "0.4px",
    fontSize: "2.5rem",
  },
  content: {
    maxWidth: "60rem",
    [theme.breakpoints.up("lg")]: {
      width: "60rem",
    },
  },
});

const LayoutWithStyles = withStyles(styles)(Layout);

const getEmptyStages = (amount) => {
  let stages = [];
  for (let stageIndex = 0; stageIndex < amount; stageIndex++) {
    stages.push({});
  }
  return stages;
};

const ConnectedForm = reduxForm({
  form: forms.editProject,
  initialValues: {
    team: [
      {
        name: "Albert Einstein",
        role: "Scientist",
      },
    ],
    stages: getEmptyStages(3),
  },
  destroyOnUnmount: false,
})(LayoutWithStyles);

export default withRouter(ConnectedForm);
