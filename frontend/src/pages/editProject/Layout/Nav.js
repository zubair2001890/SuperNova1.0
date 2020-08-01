import BaseNav from "../../../components/EditLayout/Nav";
import { withRouter } from "react-router-dom";
import React from "react";
import paths from "../../../constants/paths";

const addIdToPath = (id) => ({ to, children }) => ({
  children,
  to: to.createPath(id),
});

const addIdsToPaths = (id, links) => links.map(addIdToPath(id));

function Nav({ match }) {
  const { projects } = paths;
  const links = [
    {
      to: projects.home,
      children: "Overview",
    },
    {
      to: projects.about,
      children: "About Project",
    },
    {
      to: projects.team,
      children: "Team",
    },
    {
      to: projects.timeline,
      children: "Timeline & Budget",
    },
    {
      to: projects.methods,
      children: "Methods",
    },
    {
      to: projects.labNotes,
      children: "Lab Notes",
    },
  ];
  const { id } = match.params;
  const pathsWithIds = addIdsToPaths(id, links);
  return <BaseNav links={pathsWithIds} />;
}

export default withRouter(Nav);
