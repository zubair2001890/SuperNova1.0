import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Group from "../../../../components/editProject/Group";

export class Form extends Component {
  render() {
    return (
      <Grid container justify="space-between">
        <Grid item xs={12}>
          <Group name="title" placeholder="Project title">
            Title
          </Group>
        </Grid>
        <Grid item xs={12} md={5}>
          <Group name="field" placeholder="Select a field title...">
            Field
          </Group>
        </Grid>
        <Grid item xs={12} md={5}>
          <Group name="subfield" placeholder="Select a subfield...">
            Subfield
          </Group>
        </Grid>
        <Grid item xs={12} md={5}>
          <Group name="goal" type="number" placeholder="$100.00">
            Goal
          </Group>
        </Grid>
      </Grid>
    );
  }
}

export default Form;
