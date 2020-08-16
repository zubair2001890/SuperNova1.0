import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  active: {
    color: "#FF0000",
    "&::after": {
      backgroundColor: "#FF0000",
    },
  },
});

export default function Item({ to, children }) {
  const classes = useStyles();
  return (
    <NavItem Component={NavLink} to={to} activeClassName={classes.active}>
      {children}
    </NavItem>
  );
}
