import React from "react";
import TextArea from "../TextArea";
import { makeStyles } from "@material-ui/core";
import { input, teamText } from "../../../styles/form";

const useStyles = makeStyles({
  input: {
    ...input,
    boxSizing: "border-box",
    minHeight: "4.5625rem",
  },
  text: teamText,
});

export default function TeamBio({ member, ...other }) {
  const classes = useStyles();
  return (
    <TextArea
      name={`${member}.bio`}
      label="Team Bio"
      customClasses={classes}
      {...other}
    ></TextArea>
  );
}
