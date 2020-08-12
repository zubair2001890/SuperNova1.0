import React from "react";
import paths from "../../../../../../../constants/paths";
import Item from "./Item";
import { makeStyles } from "@material-ui/core";
import Logout from "./Logout";

const linksList = [
  {
    to: paths.profile,
    children: "My Profile",
  },
  {
    to: paths.myProjects,
    children: "My Projects",
  },
  {
    to: paths.activity,
    children: "Activity",
  },
];

const renderLink = (linkData, index) => <Item {...linkData} key={index} />;

const renderLinks = () => linksList.map(renderLink);

const useStyles = makeStyles(() => {
  const paddingRight = "1rem";
  return {
    list: {
      position: "absolute",
      top: "100%",
      right: `calc(50% - ${paddingRight})`,
      backgroundColor: "white",
      padding: `0 ${paddingRight} 1rem`,
      minWidth: "10rem",
      marginTop: 0,
      borderRadius: "0.25rem",
      display: "flex",
      flexDirection: "column",
    },
  };
});

export default function Links() {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {renderLinks()}
      <Logout />
    </ul>
  );
}
