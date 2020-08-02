import React from "react";
import AddField from "../AddField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  addStage: {
    display: "flex",
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.25rem",
    letterSpacing: "-0.08px",
    fontWeight: 600,
    margin: "0 1.25rem 0 0",
  },
});

export default function AddStage({ push }) {
  const classes = useStyles();
  return (
    <div className={classes.addStage}>
      <p className={classes.title}>Add Stage</p>
      <AddField push={push} />
    </div>
  );
}
