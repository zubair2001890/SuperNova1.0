import Grid from "@material-ui/core/Grid";
import React from "react";
import AvatarForm from "./AvatarForm";
import { makeStyles } from "@material-ui/core";
import { title } from "../../../../styles/form";

const useStyles = makeStyles({
  title: {
    ...title,
    marginBottom: "2.9375rem",
  },
});

export default function ProjectImage() {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={5}>
      <h2 className={classes.title}>Project Image</h2>
      <AvatarForm />
    </Grid>
  );
}
