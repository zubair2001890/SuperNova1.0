import React from "react";
import { makeStyles } from "@material-ui/core";
import Item from "./Item";

const useStyles = makeStyles((theme) => ({
  nav: {
    marginBottom: "4rem",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      borderRight: "2px solid black",
    },
  },
  list: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "grid",
      gridAutoFlow: "row",
      gridTemplateColumns: "repeat(3, 1fr)",
      justifyItems: "center",
      paddingBottom: "1rem",
      borderBottom: "2px solid black"
    },
    paddingLeft: "0",
    paddingRight: "0.5rem"
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
