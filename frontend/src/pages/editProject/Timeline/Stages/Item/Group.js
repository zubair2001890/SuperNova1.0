import React from "react";
import BaseGroup from "../../../../../components/editProject/Group";
import { makeStyles } from "@material-ui/core";
import { text, input } from "../../../../../styles/form";

const useStyles = makeStyles({
  text: {
    ...text,
    marginBottom: "1rem",
  },
  input: {
    ...input,
    boxSizing: "border-box",
    height: "2.84375rem",
  },
});

export default function Group(props) {
  const classes = useStyles();
  return <BaseGroup customClasses={classes} {...props} />;
}
