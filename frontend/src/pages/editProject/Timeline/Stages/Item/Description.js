import React from "react";
import TextArea from "../../../TextArea";
import { makeStyles } from "@material-ui/core";
import { timelineText, timelineInput } from "../../../../../styles/form";

const useStyles = makeStyles({
  text: timelineText,
  input: {
    ...timelineInput,
    height: "3.786875rem",
  },
});

export default function Description({ getName }) {
  const classes = useStyles();
  return (
    <TextArea
      label="Explain how the funds will be allocated in this stage"
      name={getName("allocationOfFunds")}
      customClasses={classes}
    ></TextArea>
  );
}
