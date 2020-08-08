import React, { Component } from "react";
import Layout from "./Layout";
import Projects from "./Projects";

const getIfUserOwnsProject = (account) => (project) =>
  project.projectScientistID === account.projectScientistID;

const getMyProjects = (account, projects) =>
  projects.filter(getIfUserOwnsProject(account));

export default class MyProjects extends Component {
  render() {
    return (
      <Layout title="Projects I've started:">
        <Projects {...this.props} filterProjects={getMyProjects} />
      </Layout>
    );
  }
}
