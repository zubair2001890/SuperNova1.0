import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import FieldsColumn from "./FieldsColumn";

export class Labels extends Component {
  renderLabel = ({ label, name, className }) => {
    const { classes } = this.props;
    return (
      <label htmlFor={name} className={`${classes.text} ${className}`}>
        {label}
      </label>
    );
  };

  render() {
    const { fields, classes } = this.props;
    return (
      <FieldsColumn
        renderItem={this.renderLabel}
        fields={fields}
        className={classes.column}
      />
    );
  }
}

const styles = (theme) => ({
  column: {
    marginRight: "1rem",
    [theme.breakpoints.up("sm")]: {
      marginRight: "3.6875rem",
    },
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: "0.875rem",
    fontWeight: 600,
    display: "inline-block",
    letterSpacing: "-0.06px",
    minHeight: "3.4375rem",
  },
});

export default withStyles(styles, { withTheme: true })(Labels);
