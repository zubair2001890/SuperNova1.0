import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { reduxForm } from "redux-form";
import { useAuth0 } from "@auth0/auth0-react";

import FormGrid from "../FormGrid";
import { formInput, input } from "../../../styles/form";
import { postUpdateAccount } from "../../../store/slices/middlewareAPI/fetchAPI";
import { fetchAccount } from "../../../store/account";

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

const matchFirstAndLastName = (name) => name.match(/(\w+) (\w+)/);

const getIfIsEmpty = (string) => !string || !string.length;

const validateIsNotEmpty = (value) => {
  const isEmpty = getIfIsEmpty(value);
  if (isEmpty) return "This value must not be left empty.";
};

const validateName = (name) => {
  const isEmpty = getIfIsEmpty(name);
  const hasFirstAndLastName = matchFirstAndLastName(name || "");
  if (isEmpty || !hasFirstAndLastName) {
    return 'You must provide a first and last name. Ex: "Tim Appleseed"';
  }
};

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
          validate: validateName,
          required: true,
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
          validate: validateIsNotEmpty,
          required: true,
          name: "university",
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

const getFirstAndLastName = (name) => {
  const match = matchFirstAndLastName(name);
  return {
    firstName: match[1],
    lastName: match[2],
  };
};

const getSubmissionValues = (values) => {
  const nameData = getFirstAndLastName(values.name);
  return {
    ...values,
    ...nameData,
  };
};

const updateAccount = async (getAccessTokenSilently, values) => {
  const token = await getAccessTokenSilently();
  const submissionValues = getSubmissionValues(values);
  return postUpdateAccount(submissionValues, token);
};

const submit = (getAccessTokenSilently, user, fetchAccount) => async (
  values
) => {
  await updateAccount(getAccessTokenSilently, values);
  await fetchAccount(user.sub);
};

const getInitialValues = (account) => ({
  ...account,
  name: `${account.firstName} ${account.lastName}`,
});

function Form({ account, fetchAccount }) {
  const initialValues = getInitialValues(account);
  const ConnectedForm = reduxForm({
    initialValues,
    form: "editAccountOverview",
  })(FormGridWithFields);
  const { getAccessTokenSilently, user } = useAuth0();
  return (
    <ConnectedForm
      onSubmit={submit(getAccessTokenSilently, user, fetchAccount)}
    />
  );
}

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps, { fetchAccount })(Form);
