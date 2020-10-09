import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Group from "./Group";
import SelectField from "./SelectField";
import SelectSubfields from "./SelectSubfield";

const Form = () => {
  const [fields, setFields] = useState(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xs"))
  useEffect(() => {
    const fetchFields = async () => {
      const { data } = await axios.get("/api/public/fields");
      setFields(data)
    };
    fetchFields();
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <Group
          name="projectName"
          placeholder="Project title"
          label="Title"
        ></Group>
      </Grid>
      {matches ? (
        <Grid container>
          <Grid item xs={12} md={4}>
            {fields && <SelectField fields={fields} />}
          </Grid>
          <Grid item xs={12} md={4}>
          </Grid>
          <Grid item xs={12} md={4}>
            {fields && <SelectSubfields fields={fields} />}
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid item xs={12} md={4}>
            {fields && <SelectField fields={fields} />}
          </Grid>
          <Grid item xs={12} md={4}>
            {fields && <SelectSubfields fields={fields} />}
          </Grid>
        </>
      )}
      <Grid container item xs={12}>
        <Grid item xs={6} md={4}>
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

export default Form;
