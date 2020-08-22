import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

class FieldsColumn extends Component {
  renderItem = (inputData, index) => {
    const { renderItem, classes } = this.props;
    const { item } = classes;
    const itemData = {
      ...inputData,
      className: item,
    };
    return renderItem(itemData, index);
  };

  renderItems = (fields) => fields.map(this.renderItem);

  getClasses = () => {
    const { className, classes } = this.props;
    return `${classes.column} ${className}`;
  };

  render() {
    const { fields } = this.props;
    const inputs = this.renderItems(fields);
    return <div className={this.getClasses()}>{inputs}</div>;
  }
}

const styles = {
  column: {
    display: "flex",
    flexDirection: "column",
  },
  item: {
    marginBottom: "1rem",
  },
};

export default withStyles(styles, { withTheme: true })(FieldsColumn);
