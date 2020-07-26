import React from "react";
import { makeStyles } from "@material-ui/core";
import { Field } from "redux-form";

const useStyles = makeStyles({
  group: {
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: "1.125rem",
    fontWeight: 600,
    marginRight: "3.6875rem",
    display: "inline-block",
    letterSpacing: "-0.06px",
    width: "7.625rem",
  },
  input: {
    letterSpacing: "-0.06px",
    font: "Regular 14px/17px AvertaDemo;",
    border: "2px solid black",
    padding: "1.125rem",
    borderRadius: "0.25rem",
    display: "inline-block",
    width: "100%",
  },
});

export default function Group({ label, ...other }) {
  const classes = useStyles();
  return (
    <label className={classes.group}>
      <span className={classes.text}>{label}</span>
      <Field className={classes.input} {...other} />
    </label>
  );
}
