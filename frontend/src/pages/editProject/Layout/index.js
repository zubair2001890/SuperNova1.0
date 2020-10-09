import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withAuth0 } from "@auth0/auth0-react";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";

import EditLayout from "../../../components/EditLayout";
import Nav from "./Nav";
import forms from "../../../constants/forms";
import { subtitle } from "../../../styles/form";
import {
  getProjectDetails,
  postUpdateProject,
} from "../../../store/slices/middlewareAPI/fetchAPI";

export const ProjectContext = React.createContext();

export class Content extends Component {
  static contextType = ProjectContext;

  submitValues = (values) => {
    const { updateProject } = this.context;
    return updateProject(values);
  };

  render() {
    const { classes, children, handleSubmit, ...other } = this.props;
    return (
      <EditLayout
        {...other}
        Nav={Nav}
        mainTitle="Edit Project"
        customClasses={classes}
      >
        <Grid container justify="space-between">
          <form onSubmit={handleSubmit(this.submitValues)}>{children}</form>
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
      width: "100%",
      '& form': {
        width: "100%"
      }
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

  updateProject = async (data) => {
    const { auth0, match } = this.props;
    const token = await auth0.getAccessTokenSilently();
    const { id } = match.params;
    await postUpdateProject(data, token, id);
    await this.fetchAndSetProject();
  };

  getProviderValues = () => ({
    ...this.state.project,
    fetchAndSetProject: this.fetchAndSetProject,
    updateProject: this.updateProject,
  });

  getEmptyStages = (amount) => {
    let stages = [];
    for (let stageIndex = 0; stageIndex < amount; stageIndex++) {
      stages.push({});
    }
    return stages;
  };

  getArrayOfValuesOrInitialValues = (fieldName, initialValues) => {
    const { [fieldName]: field } = this.state.project;
    if (field && field.length) {
      return field;
    }
    return initialValues;
  };

  getTeam = () => {
    const emptyTeamMemberField = [{ role: "", name: "" }];
    return this.getArrayOfValuesOrInitialValues(
      "teamDescription",
      emptyTeamMemberField
    );
  };

  getTimeline = () => {
    const emptyStages = this.getEmptyStages(3);
    return this.getArrayOfValuesOrInitialValues(
      "timelineDescription",
      emptyStages
    );
  };

  getInitialValues = () => {
    const { project } = this.state;
    return {
      ...project,
      teamDescription: this.getTeam(),
      timelineDescription: this.getTimeline(),
    };
  };

  getForm = () => {
    return reduxForm({
      form: forms.editProject,
      initialValues: this.getInitialValues(),
      destroyOnUnmount: false,
    })(StyledContent);
  };

  render() {
    const { project } = this.state;
    const ConnectedForm = project ? this.getForm() : null;
    return (
      <ProjectContext.Provider value={this.getProviderValues()}>
        {project && <ConnectedForm {...this.props} />}
      </ProjectContext.Provider>
    );
  }
}

const LayoutWithRouter = withRouter(Layout);

const LayoutWithAuth = withAuth0(LayoutWithRouter);

export default LayoutWithAuth;
