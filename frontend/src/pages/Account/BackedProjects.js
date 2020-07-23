import React from 'react'
import Projects from './Projects'
import Layout from './Layout'

const getIfNameInUser = (user) => (backerName) => {
  return user.given_name === backerName
}

const getIfUserInBackers = (backers, user) =>
  backers.find(getIfNameInUser(user))

const getIfBackedProject = (user) => (project) => {
  return getIfUserInBackers(project.backers, user)
}

const getBackedProjects = (user, projects) =>
  projects.filter(getIfBackedProject(user))

export default function BackedProjects(props) {
  return (
    <Layout title="Projects I've donated to">
      <Projects filterProjects={getBackedProjects} {...props} />
    </Layout>
  )
}
