import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { title } from "../../../styles/form";

const useStyles = makeStyles({ title });

export default function Video() {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={5}>
      <h2 className={classes.title}>Project Video (optional):</h2>
    </Grid>
  );
}
