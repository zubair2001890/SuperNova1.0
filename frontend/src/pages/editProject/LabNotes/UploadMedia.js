import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    letterSpacing: "0.2px",
    fontSize: "1.25rem",
  },
});

export default function UploadMedia() {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <h2 className={classes.title}>Upload Media</h2>
    </Grid>
  );
}
