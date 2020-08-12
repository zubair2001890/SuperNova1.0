import React from "react";
import { makeStyles } from "@material-ui/core";
import Item from "./Item";

const useStyles = makeStyles((theme) => ({
  nav: {
    marginBottom: "4rem",
    [theme.breakpoints.up("md")]: {
      flexBasis: "25%",
      borderRight: "2px solid black",
    },
  },
  list: {
    paddingLeft: "0",
  },
}));

const renderLink = (linkData, index) => <Item {...linkData} key={index} />;

const renderLinks = (links) => links.map(renderLink);

export function Nav({ links }) {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>{renderLinks(links)}</ul>
    </nav>
  );
}

export default Nav;
