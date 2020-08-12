import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import FieldsColumn from "../FieldsColumn";
import Item from "./Item";

const styles = {
  column: {
    flexGrow: 1,
  },
};

class Inputs extends Component {
  renderInput = (fieldData, index) => {
    return <Item {...fieldData} key={index} />;
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
