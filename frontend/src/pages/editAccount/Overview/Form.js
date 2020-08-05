import React from "react";
import { makeStyles } from "@material-ui/core";
import { post } from "axios";
import { reduxForm } from "redux-form";
import { useAuth0 } from "@auth0/auth0-react";
import FormGrid from "../FormGrid";
import { formInput, input } from "../../../styles/form";

const useStyles = makeStyles((theme) => ({
  form: {
    flexGrow: 1,
    order: 1,
    [theme.breakpoints.up("md")]: {
      marginRight: "8.375rem",
      order: 0,
    },
  },
  input: {
    ...formInput,
    flexGrow: 0,
  },
  bio: {
    ...input,
    boxSizing: "border-box",
    height: "9.130625rem",
  },
}));

function FormGridWithFields(props) {
  const classes = useStyles();
  return (
    <FormGrid
      className={classes.form}
      fields={[
        {
          name: "name",
          placeholder: "Tim Appleseed",
          type: "name",
          label: "Name",
          component: "input",
          inputClass: classes.input,
        },
        {
          name: "email",
          placeholder: "my.email@example.com",
          type: "email",
          label: "Email",
          component: "input",
          inputClass: classes.input,
        },
        {
          name: "institution",
          placeholder: "My University",
          type: "text",
          label: "Institution",
          component: "input",
          inputClass: classes.input,
        },
        {
          name: "bio",
          placeholder: "Describe yourself here...",
          type: "text",
          component: "textarea",
          label: "Bio",
          inputClass: classes.bio,
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
