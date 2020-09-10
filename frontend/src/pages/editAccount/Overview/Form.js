import React from "react";
import auth from "../../../Auth";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { reduxForm } from "redux-form";
import FormGrid from "../FormGrid";
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
          validate: validateName,
          required: true,
        },
        {
          name: "email",
          placeholder: "my.email@example.com",
          type: "email",
          label: "Email",
          component: "input",
          required: true,
          validate: validateIsNotEmpty,
        },
        {
          name: "university",
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
  //await fetchAccount(user.sub);
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
  const getAccessTokenSilently = auth.getAccessToken;
  const user = auth.getUserInfo();
  return (
    <ConnectedForm
      onSubmit={submit(getAccessTokenSilently, user, fetchAccount)}
    />
  );
}

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps, { fetchAccount })(Form);
