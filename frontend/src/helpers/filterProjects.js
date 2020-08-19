export const mapStateToProps = (filterProjects) => ({ projects, user }) => {
  if (!user) {
    return { projects: [] }
  }
  const filteredProjects = filterProjects(user, projects.data)
  return { projects: filteredProjects }
}
