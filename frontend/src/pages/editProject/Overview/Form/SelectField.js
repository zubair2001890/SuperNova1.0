import React, { Component } from "react";
import SelectWithData from "./SelectWithData";
import Group from "../../../../components/editProject/Group";

const fieldName = "field";

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
    return (
      <SelectWithData
        name={fieldName}
        apiUrl="/api/fields"
        Input={FieldGroup}
      ></SelectWithData>
    );
  }
}

export default SelectField;
