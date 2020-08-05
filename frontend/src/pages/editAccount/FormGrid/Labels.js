import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import FieldsColumn from "./FieldsColumn";

export class Labels extends Component {
  renderLabel = ({ label, name, className }, index) => {
    const { classes } = this.props;
    return (
      <label
        htmlFor={name}
        className={`${classes.text} ${className}`}
        key={index}
      >
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
      marginRight: "2rem",
    },
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "-0.06px",
    height: "2.84375rem",
    display: "flex",
    alignItems: "center",
  },
});

export default withStyles(styles, { withTheme: true })(Labels);
