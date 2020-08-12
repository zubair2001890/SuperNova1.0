import React, { Component } from "react";
import SelectWithData from "./SelectWithData";
import Group from "./Group";

const fieldName = "subfieldName";

const FieldGroup = (props) => (
  <Group
    name={fieldName}
    placeholder="Select a subfield..."
    label="Subfield"
    {...props}
  />
);

export class SelectSubfields extends Component {
  render() {
    return (
      <SelectWithData
        name={fieldName}
        apiUrl="/api/subfields"
        Input={FieldGroup}
      ></SelectWithData>
    );
  }
}

export default SelectSubfields;
