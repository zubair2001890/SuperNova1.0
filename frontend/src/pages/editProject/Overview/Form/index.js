import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Group from "../../../../components/editProject/Group";
import SelectField from "./SelectField";
import SelectSubfields from "./SelectSubfield";

export class Form extends Component {
  render() {
    return (
      <>
        <Grid item xs={12}>
          <Group name="title" placeholder="Project title" label="Title"></Group>
        </Grid>
        <Grid item xs={12} md={5}>
          <SelectField />
        </Grid>
        <Grid item xs={12} md={5}>
          <SelectSubfields />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12} md={5}>
            <Group
              name="goal"
              type="number"
              placeholder="$100.00"
              label="Goal"
            ></Group>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Form;
