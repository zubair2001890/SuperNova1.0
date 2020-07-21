import React from 'react'
import Projects from './Projects'
import Layout from './Layout'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../helpers/filterProjects'

function BackedProjects(props) {
  return (
    <Layout title="Projects I've donated to">
      <Projects {...props} />
    </Layout>
  )
}

const getIfNameInUser = (user) => (backerName) => {
  return user.first_Name === backerName
}

const getIfUserInBackers = (backers, user) =>
  backers.find(getIfNameInUser(user))

const getIfBackedProject = (user) => (project) => {
  return getIfUserInBackers(project.backers, user)
}

const getBackedProjects = (user, projects) =>
  projects.filter(getIfBackedProject(user))

export default connect(mapStateToProps(getBackedProjects))(BackedProjects)
