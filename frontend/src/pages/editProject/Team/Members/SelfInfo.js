import React from "react";
import Role from "../Role";
import Bio from "../TeamBio";
import { Grid } from "@material-ui/core";

export default function SelfInfo({ member }) {
  return (
    <Grid container item xs={12}>
      <Role member={member} />
      <Bio member={member} />
    </Grid>
  );
}
