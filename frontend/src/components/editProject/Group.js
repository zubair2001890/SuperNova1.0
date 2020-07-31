import React from "react";
import { makeStyles } from "@material-ui/core";
import { Field } from "redux-form";
import { title } from "../../styles/form";

const useStyles = makeStyles((theme) => ({
  group: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.75rem",
  },
  text: {
    ...title,
    marginBottom: "1.46875rem",
  },
  input: {
    letterSpacing: "-0.06px",
    font: "Regular 14px/17px AvertaDemo;",
    border: "2px solid black",
    padding: "1rem 1.125rem",
    borderRadius: "0.25rem",
    display: "inline-block",
    flexGrow: 1,
  },
}));

export default function Group({ label, component = "input", ...other }) {
  const classes = useStyles();
  return (
    <label className={classes.group}>
      <span className={classes.text}>{label}:</span>
      <Field className={classes.input} {...other} component={component} />
    </label>
  );
}
