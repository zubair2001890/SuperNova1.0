import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Group from "./Group";
import SelectField from "./SelectField";
import SelectSubfields from "./SelectSubfield";

export class Form extends Component {
  state = {
    fields: null,
  };

  setFields = (fields) => this.setState({ fields });

  fetchFields = async () => {
    const { data } = await axios.get("/api/public/fields");
    return data;
  };

  fetchAndSetFields = async () => {
    const fields = await this.fetchFields();
    this.setFields(fields);
  };

  componentDidMount() {
    this.fetchAndSetFields();
  }

  render() {
    const { fields } = this.state;
    return (
      <>
        <Grid item xs={12}>
          <Group
            name="projectName"
            placeholder="Project title"
            label="Title"
          ></Group>
        </Grid>
        <Grid item xs={12} md={5}>
          {fields && <SelectField fields={fields} />}
        </Grid>
        <Grid item xs={12} md={5}>
          {fields && <SelectSubfields fields={fields} />}
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12} md={5}>
            <Group
              name="goal"
              type="number"
              placeholder="$100.00"
              label="Goal"
            ></Group>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Form;
