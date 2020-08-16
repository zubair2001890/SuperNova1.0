import React, { Component } from "react";
import BaseSaveButton from "../../components/Save";
import { Grid } from "@material-ui/core";

export class Save extends Component {
  render() {
    return (
      <Grid container item xs={12} justify="flex-end">
        <BaseSaveButton {...this.props}></BaseSaveButton>
      </Grid>
    );
  }
}

export default Save;
