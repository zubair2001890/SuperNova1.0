import React from "react";
import BaseTextArea from "../../../TextArea";
import { makeStyles } from "@material-ui/core";
import { timelineText, timelineInput } from "../../../../../styles/form";

const useStyles = makeStyles({
  text: timelineText,
  input: {
    ...timelineInput,
    height: "7.196875rem",
  },
});

export default function Achievement(props) {
  const classes = useStyles();
  return <BaseTextArea customClasses={classes} {...props}></BaseTextArea>;
}
