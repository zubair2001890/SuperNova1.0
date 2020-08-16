import React from "react";
import Grid from "@material-ui/core/Grid";
import Group from "../../components/editProject/Group";

export default function TextArea({ customClasses = {}, ...otherProps }) {
  const { grid = null, ...otherClasses } = customClasses;
  return (
    <Grid item xs={12} className={grid}>
      <Group
        customClasses={otherClasses}
        {...otherProps}
        component="textarea"
      ></Group>
    </Grid>
  );
}
