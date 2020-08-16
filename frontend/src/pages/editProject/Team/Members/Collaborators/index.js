import React from "react";
import AddField from "../../../AddField";
import { makeStyles, Grid } from "@material-ui/core";
import { title } from "../../../../../styles/form";

const useStyles = makeStyles({
  collaborators: {
    marginTop: "7.5rem",
  },
  header: {
    display: "flex",
    alignItems: "end",
  },
  title: {
    ...title,
    margin: "0 1rem 0 0",
  },
  list: {
    paddingLeft: 0,
    listStyle: "none",
  },
});

export default function Collaborators({ children, push }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.collaborators}>
      <div className={classes.header}>
        <h2 className={classes.title}>Add Collaborators</h2>
        <AddField push={push} />
      </div>
      <ul className={classes.list}>{children}</ul>
    </Grid>
  );
}
