import React from "react";
import { post } from "axios";
import { reduxForm } from "redux-form";
import { useAuth0 } from "@auth0/auth0-react";
import FormGrid from "../FormGrid";

function FormGridWithFields(props) {
  return (
    <FormGrid
      fields={[
        {
          name: "name",
          placeholder: "Tim Appleseed",
          type: "name",
          label: "Name",
          component: "input",
        },
        {
          name: "email",
          placeholder: "my.email@example.com",
          type: "email",
          label: "Email",
          component: "input",
        },
        {
          name: "institution",
          placeholder: "My University",
          type: "text",
          label: "Institution",
          component: "input",
        },
        {
          name: "bio",
          placeholder: "Describe yourself here...",
          type: "text",
          component: "textarea",
          label: "Bio",
        },
      ]}
      {...props}
    ></FormGrid>
  );
}

const submit = async (values) => post("https://supernova.ac/users/id", values);

export default function Form() {
  const { user } = useAuth0();
  const ConnectedForm = reduxForm({
    initialValues: user,
    form: "editAccountOverview",
  })(FormGridWithFields);
  return <ConnectedForm onSubmit={submit} />;
}
