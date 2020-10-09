import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    font: "Bold 20px/24px Montserrat",
    fontSize: 13,
    textDecoration: "none",
    color: "black",
    marginBottom: "2.25rem",
    display: "block",
    textTransform: "uppercase",
    letterSpacing: "1.8px",
  },
  "link--active": {
    color: "#FF0000",
  },
  item: {
    listStyle: "none",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "1rem",
      height: "1.5rem",
    },
  },
}));

export function Item({ to, children }) {
  const classes = useStyles();
  return (
    <li className={classes.item}>
      <NavLink
        to={to}
        className={classes.link}
        activeClassName={classes["link--active"]}
        exact
      >
        {children}
      </NavLink>
    </li>
  );
}

export default Item;
