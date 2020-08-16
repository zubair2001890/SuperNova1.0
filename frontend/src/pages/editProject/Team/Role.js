import React from "react";
import Grid from "@material-ui/core/Grid";
import Group from "../../../components/editProject/Group";
import { makeStyles } from "@material-ui/core";
import { formInput, teamText } from "../../../styles/form";

const useStyles = makeStyles({
  input: {
    ...formInput,
    height: "2.84375rem",
    boxSizing: "border-box",
  },
  text: teamText,
});

export default function Role({ member, ...other }) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Group
        name={`${member}.role`}
        label="Role"
        customClasses={classes}
        {...other}
      ></Group>
    </Grid>
  );
}
