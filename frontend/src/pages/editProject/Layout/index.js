import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { get } from "axios";

import EditLayout from "../../../components/EditLayout";
import Nav from "./Nav";

export const ProjectContext = React.createContext();

export class EditProjectLayout extends Component {
  state = {
    project: null,
  };

  setProject = (project) => this.setState({ project });

  fetchProject = async () => {
    const { id } = this.props.match.params;
    const { data } = await get(`/api/projects/${id}`);
    return data;
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
    const { children, ...other } = this.props;
    return (
      <EditLayout {...other} Nav={Nav}>
        <ProjectContext.Provider value={project}>
          {children}
        </ProjectContext.Provider>
      </EditLayout>
    );
  }
}

export default withRouter(EditProjectLayout);
