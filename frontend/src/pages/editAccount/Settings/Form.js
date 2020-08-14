import React from "react";
import FormGrid from "../FormGrid";
import { reduxForm } from "redux-form";

function Form() {
  return (
    <FormGrid
      fields={[
        {
          label: "Existing Password",
          type: "password",
          name: "existingPassword",
          component: "input",
        },
        {
          label: "New Password",
          type: "password",
          name: "password",
          component: "input",
        },
      ]}
    ></FormGrid>
  );
}

export default reduxForm({ form: "editAccountPassword" })(Form);
