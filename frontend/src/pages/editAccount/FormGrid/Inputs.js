import React, { Component } from "react";
import { Field } from "redux-form";
import { withStyles } from "@material-ui/core";
import FieldsColumn from "./FieldsColumn";

const styles = {
  column: {
    flexGrow: 1,
  },
  input: {
    letterSpacing: "-0.06px",
    font: "Regular 14px/17px AvertaDemo;",
    border: "2px solid black",
    padding: "1.125rem",
    borderRadius: "0.25rem",
    display: "inline-block",
  },
};

class Inputs extends Component {
  renderInput = (fieldData, index) => {
    const { classes } = this.props;
    return (
      <Field
        {...fieldData}
        key={index}
        className={`${classes.input} ${fieldData.className}`}
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
