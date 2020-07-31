import React from "react";
import Grid from "@material-ui/core/Grid";
import Group from "../../components/editProject/Group";

export default function TextArea(props) {
  return (
    <Grid item xs={12}>
      <Group {...props} component="textarea"></Group>
    </Grid>
  );
}
