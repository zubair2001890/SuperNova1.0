import React, { Component } from "react";
import Select from "./SelectWithData/Select";
import axios from "axios";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";

import Group from "./Group";
import forms from "../../../../constants/forms";

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
  state = {
    subfields: null,
  };

  setSubfields = (subfields) => this.setState({ subfields });

  getIfFieldHasName = (name) => (field) => field.name === name;

  getFieldWithName = (name) => {
    const { fields } = this.props;
    return fields.find(this.getIfFieldHasName(name));
  };

  getFieldId = () => {
    const { field } = this.props;
    const selectedField = this.getFieldWithName(field);
    if (selectedField) {
      return selectedField._id;
    }
    return null;
  };

  fetchSubfields = async (fieldId) => {
    const { data } = await axios.get(`/api/public/fields/${fieldId}/subfields`);
    return data;
  };

  fetchAndSetSubfields = async (fieldId) => {
    const subfields = await this.fetchSubfields(fieldId);
    this.setSubfields(subfields);
  };

  getFieldIdAndFetchAndSetSubfields = () => {
    const fieldId = this.getFieldId();
    if (fieldId) {
      return this.fetchAndSetSubfields(fieldId);
    }
  };

  fetchSubfieldsIfFieldChanged = async (previousProps) => {
    const fieldChanged = previousProps.field !== this.props.field;
    if (fieldChanged) {
      await this.getFieldIdAndFetchAndSetSubfields();
    }
  };

  async componentDidUpdate(previousProps) {
    await this.fetchSubfieldsIfFieldChanged(previousProps);
  }

  render() {
    const { subfields } = this.state;
    if (!subfields) return null;
    return (
      <Select
        name={fieldName}
        Input={FieldGroup}
        possibleResults={subfields}
      ></Select>
    );
  }
}

const selector = formValueSelector(forms.editProject);

const mapStateToProps = (state) => ({
  field: selector(state, "fieldName"),
});

export default connect(mapStateToProps)(SelectSubfields);
