import React from "react";
import BaseGroup from "../../../../../components/editProject/Group";
import { makeStyles } from "@material-ui/core";
import { text, input } from "../../../../../styles/form";

const useStyles = makeStyles({
  text: {
    ...text,
    marginBottom: "1rem",
  },
  input,
});

export default function Group(props) {
  const classes = useStyles();
  return <BaseGroup customClasses={classes} {...props} />;
}
