import React from "react";
import TextArea from "./TextArea";
import { makeStyles } from "@material-ui/core";
import { input, text } from "../../styles/form";

const useStyles = makeStyles({
  grid: {
    "& + &": {
      marginTop: "3.426875rem",
    },
  },
  input: {
    ...input,
    minHeight: "13.1875rem",
  },
  text: {
    ...text,
    marginBottom: "2.03125rem",
  },
});

export default function TextAreaLg(props) {
  const classes = useStyles();
  return <TextArea {...props} customClasses={classes}></TextArea>;
}
