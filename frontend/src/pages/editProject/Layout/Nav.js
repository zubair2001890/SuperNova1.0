import BaseNav from "../../../components/EditLayout/Nav";
import { withRouter } from "react-router-dom";
import React from "react";
import paths from "../../../constants/paths";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const addIdToPath = (id) => ({ to, children }) => ({
  children,
  to: to.createPath(id),
});

const addIdsToPaths = (id, links) => links.map(addIdToPath(id));

function Nav({ match }) {
  const { projects } = paths;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const links = [
    {
      to: projects.home,
      children: matches ? "Basic Info" : "Basic",
    },
    {
      to: projects.about,
      children: matches ? "About Project" : "About",
    },
    {
      to: projects.team,
      children: "Scientists",
    },
    {
      to: projects.timeline,
      children: matches ? "Timeline & Budget": "Timeline",
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
