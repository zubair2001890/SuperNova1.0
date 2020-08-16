import React, { Component } from "react";
import { Field } from "redux-form";
import { withStyles } from "@material-ui/core";
import FieldsColumn from "./FieldsColumn";
import { input } from "../../../styles/form";

const styles = (theme) => ({
  column: {
    flexGrow: 1,
  },
  input: {
    ...input,
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
});

class Inputs extends Component {
  renderInput = (fieldData, index) => {
    const { classes } = this.props;
    console.log(fieldData);
    return (
      <Field
        {...fieldData}
        key={index}
        className={`${classes.input} ${fieldData.className} ${fieldData.inputClass}`}
      />
    );
  };

  render() {
    const { fields, classes } = this.props;
    return (
      <FieldsColumn
        fields={fields}
        renderItem={this.renderInput}
        className={classes.column}
      />
    );
  }
}

export default withStyles(styles)(Inputs);
