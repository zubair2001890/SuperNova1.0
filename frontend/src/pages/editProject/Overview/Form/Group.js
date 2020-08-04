import React from "react";
import { makeStyles } from "@material-ui/core";
import { input, text } from "../../../../styles/form";
import BaseGroup from "../../../../components/editProject/Group";

const useStyles = makeStyles({
  text: {
    ...text,
    marginBottom: "1.28125rem",
  },
  input: {
    ...input,
    padding: "0.890625rem 1.25rem",
  },
});

export default function Group(props) {
  const classes = useStyles();
  return <BaseGroup {...props} customClasses={classes}></BaseGroup>;
}
