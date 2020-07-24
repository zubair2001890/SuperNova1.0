import React, { Component } from "react";
import Layout from "../../components/account/Layout";
import Projects from "./Projects";
import MainNav from "../../components/account/MainNav";

const getIfUserOwnsProject = (user) => (project) =>
  project.project_scientist_id === user.project_scientist_id;

const getMyProjects = (user, projects) =>
  projects.filter(getIfUserOwnsProject(user));

export default class MyProjects extends Component {
  render() {
    return (
      <Layout title="Projects I've started:" Nav={MainNav}>
        <Projects {...this.props} filterProjects={getMyProjects} />
      </Layout>
    );
  }
}
