import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

import EditLayout from "../../../components/EditLayout";
import Nav from "./Nav";
import forms from "../../../constants/forms";
import { withStyles } from "@material-ui/core";
import { subtitle } from "../../../styles/form";
import { getProjectDetails } from "../../../store/slices/middlewareAPI/fetchAPI";

export const ProjectContext = React.createContext();

export class Content extends Component {
  render() {
    const { classes, children, ...other } = this.props;
    return (
      <EditLayout
        {...other}
        Nav={Nav}
        mainTitle="Edit Project"
        customClasses={classes}
      >
        <Grid container justify="space-between">
          {children}
        </Grid>
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

const StyledContent = withStyles(styles)(Content);

export class Layout extends Component {
  state = {
    project: null,
  };

  setProject = (project) => this.setState({ project });

  fetchProject = async () => {
    const { id } = this.props.match.params;
    return getProjectDetails(id);
  };

  fetchAndSetProject = async () => {
    const project = await this.fetchProject();
    this.setProject(project);
  };

  componentDidMount() {
    this.fetchAndSetProject();
  }

  getProviderValues = () => ({
    ...this.state.project,
    fetchAndSetProject: this.fetchAndSetProject,
  });

  getEmptyStages = (amount) => {
    let stages = [];
    for (let stageIndex = 0; stageIndex < amount; stageIndex++) {
      stages.push({});
    }
    return stages;
  };

  getForm = () => {
    const { project } = this.state;
    return reduxForm({
      form: forms.editProject,
      initialValues: {
        ...project,
        stages: this.getEmptyStages(3),
      },
      destroyOnUnmount: false,
    })(StyledContent);
  };

  render() {
    const ConnectedForm = this.getForm();
    const { project } = this.state;
    return (
      <ProjectContext.Provider value={this.getProviderValues()}>
        {project && <ConnectedForm {...this.props} />}
      </ProjectContext.Provider>
    );
  }
}

export default withRouter(Layout);
