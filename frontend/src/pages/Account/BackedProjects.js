import React from "react";
import Projects from "./Projects";
import Layout from "./Layout";

const getIfNameInUser = ({ firstName, lastName }) => (backerName) => {
  const fullName = `${firstName} ${lastName}`;
  return fullName === backerName;
};

const getIfUserInBackers = (backers, account) =>
  backers.find(getIfNameInUser(account));

const getIfBackedProject = (account) => (project) => {
  return getIfUserInBackers(project.backers, account);
};

const getBackedProjects = (account, projects) =>
  projects.filter(getIfBackedProject(account));

export default function BackedProjects(props) {
  return (
    <Layout title="Projects I've donated to:">
      <Projects filterProjects={getBackedProjects} {...props} />
    </Layout>
  );
}
