import React, { Component } from 'react'
import Layout from './Layout'
import { connect } from 'react-redux'
import Projects from './Projects'
import { mapStateToProps } from '../../helpers/filterProjects'

class MyProjects extends Component {
  render() {
    return (
      <Layout title="Projects I've started:">
        <Projects {...this.props} />
      </Layout>
    )
  }
}

const getIfUserOwnsProject = (user) => (project) =>
  project.project_scientist_id === user.project_scientist_id

const getMyProjects = (user, projects) =>
  projects.filter(getIfUserOwnsProject(user))

export default connect(mapStateToProps(getMyProjects))(MyProjects)
