import React from "react";
import Role from "../Role";
import Bio from "../TeamBio";
import { Grid, makeStyles } from "@material-ui/core";
import { input, teamText } from "../../../../styles/form";

const useStyles = makeStyles({
  text: teamText,
  input,
});

export default function SelfInfo({ member }) {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Role member={member} customClasses={classes} />
      <Bio member={member} customClasses={classes} />
    </Grid>
  );
}
