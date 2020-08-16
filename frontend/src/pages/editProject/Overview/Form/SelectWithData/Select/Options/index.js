import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Item from "./Item";

export class Options extends Component {
  getIfIsResult = (item) => {
    const { query } = this.props;
    const pattern = new RegExp(query);
    return item.name.search(pattern) !== -1;
  };

  getResults = () => {
    const { possibleResults } = this.props;
    return possibleResults.filter(this.getIfIsResult);
  };

  renderItem = (itemData, index) => {
    const { setIsFocused, setQuery, setIsOpen, fieldName } = this.props;
    return (
      <Item
        setIsFocused={setIsFocused}
        setQuery={setQuery}
        setIsOpen={setIsOpen}
        key={index}
        fieldName={fieldName}
        {...itemData}
      />
    );
  };

  renderItems = (results) => {
    return results.map(this.renderItem);
  };

  render() {
    const {
      classes: { options },
    } = this.props;
    const results = this.getResults();
    if (results) {
      return <ul className={options}>{this.renderItems(results)}</ul>;
    }
    return <div className={options}>No results</div>;
  }
}

const styles = {
  options: {
    backgroundColor: "white",
    borderRadius: "0.25rem",
    listStyle: "none",
    padding: "1rem 0",
    border: "1px solid black",
  },
};

export default withStyles(styles)(Options);
