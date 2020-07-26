import React from "react";
import { makeStyles } from "@material-ui/core";
import { Field } from "redux-form";

const useStyles = makeStyles((theme) => ({
  group: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
      flexDirection: "row",
    },
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: "0.875rem",
    fontWeight: 600,
    display: "inline-block",
    letterSpacing: "-0.06px",
    // marginRight: "3.6875rem",
    marginBottom: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
      flexBasis: "6.625rem",
    },
  },
  input: {
    letterSpacing: "-0.06px",
    font: "Regular 14px/17px AvertaDemo;",
    border: "2px solid black",
    padding: "1.125rem",
    borderRadius: "0.25rem",
    display: "inline-block",
    flexGrow: 1,
  },
}));

export default function Group({ label, ...other }) {
  const classes = useStyles();
  return (
    <label className={classes.group}>
      <span className={classes.text}>{label}:</span>
      <Field className={classes.input} {...other} />
    </label>
  );
}
