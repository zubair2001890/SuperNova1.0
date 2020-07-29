import EditLayout from "../../EditLayout";
import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchAllProjects } from "../../../store/allProjects";

export class Layout extends Component {
  fetchProjects = () => {
    const { projects, fetchProjects } = this.props;
    if (!projects.length) fetchProjects();
  };

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    return <EditLayout {...this.props}></EditLayout>;
  }
}

const mapStateToProps = ({ allProjects }) => ({ projects: allProjects });

export default connect(mapStateToProps, { fetchProjects: fetchAllProjects })(
  Layout
);
