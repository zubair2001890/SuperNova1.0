import React from "react";
import Projects from "./Projects";
import Layout from "./Layout";

const getIfNameInUser = ({ given_name, family_name }) => (backerName) => {
  const fullName = `${given_name} ${family_name}`;
  return fullName === backerName;
};

const getIfUserInBackers = (backers, user) =>
  backers.find(getIfNameInUser(user));

const getIfBackedProject = (user) => (project) => {
  return getIfUserInBackers(project.backers, user);
};

const getBackedProjects = (user, projects) =>
  projects.filter(getIfBackedProject(user));

export default function BackedProjects(props) {
  return (
    <Layout title="Projects I've donated to:">
      <Projects filterProjects={getBackedProjects} {...props} />
    </Layout>
  );
}
