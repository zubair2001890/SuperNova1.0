import React from "react";
import { makeStyles } from "@material-ui/core";
import { Field } from "redux-form";

const useStyles = makeStyles((theme) => ({
  group: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.75rem",
  },
}));

export default function Group({
  label,
  component = "input",
  customClasses,
  ...other
}) {
  const classes = useStyles();
  // const groupClasses = `${classes.group} ${customClasses.group || ""}`;
  return (
    <label className={classes.group}>
      <span className={customClasses.text}>{label}:</span>
      <Field className={customClasses.input} {...other} component={component} />
    </label>
  );
}
