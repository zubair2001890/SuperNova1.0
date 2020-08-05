import React from "react";
import FormGrid from "../FormGrid";
import { reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core";
import { formInput } from "../../../styles/form";

const useStyles = makeStyles({
  input: formInput,
});

function Form() {
  const classes = useStyles();
  return (
    <FormGrid
      fields={[
        {
          label: "Existing Password",
          type: "password",
          name: "existingPassword",
          component: "input",
          inputClass: classes.input,
        },
        {
          label: "New Password",
          type: "password",
          name: "password",
          component: "input",
          inputClass: classes.input,
        },
      ]}
    ></FormGrid>
  );
}

export default reduxForm({ form: "editAccountPassword" })(Form);
