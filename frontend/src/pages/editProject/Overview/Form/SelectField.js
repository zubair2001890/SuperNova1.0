import React, { Component } from "react";
import Select from "./SelectWithData/Select";
import Group from "./Group";

const fieldName = "fieldName";

const FieldGroup = (props) => (
  <Group
    name={fieldName}
    placeholder="Select a field title..."
    label="Field"
    {...props}
  />
);

export class SelectField extends Component {
  render() {
    const { fields = [] } = this.props;
    return (
      <Select
        possibleResults={fields}
        name={fieldName}
        Input={FieldGroup}
      ></Select>
    );
  }
}

export default SelectField;
