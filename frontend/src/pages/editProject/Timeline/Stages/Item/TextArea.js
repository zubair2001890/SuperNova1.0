import React from "react";
import BaseTextArea from "../../../TextArea";
import { makeStyles } from "@material-ui/core";
import { text, input } from "../../../../../styles/form";

const useStyles = makeStyles({
  text: {
    ...text,
    marginBottom: "1.5625rem",
  },
  input,
});

export default function TextArea(props) {
  const classes = useStyles();
  return <BaseTextArea customClasses={classes} {...props}></BaseTextArea>;
}
