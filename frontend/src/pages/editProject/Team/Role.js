import React from "react";
import Grid from "@material-ui/core/Grid";
import Group from "../../../components/editProject/Group";

export default function Role({ member, ...other }) {
  return (
    <Grid item xs={12}>
      <Group name={`${member}.role`} label="Role" {...other}></Group>
    </Grid>
  );
}
