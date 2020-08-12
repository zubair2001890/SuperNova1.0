import React from "react";
import { Field } from "redux-form";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  error: {
    marginTop: "0.5rem",
    color: "red",
    fontFamily: "AvertaDemo",
    display: "block",
  },
  input: {
    letterSpacing: "-0.06px",
    font: "Regular 14px/17px AvertaDemo;",
    border: "2px solid black",
    padding: "1.125rem",
    borderRadius: "0.25rem",
    display: "block",
    width: "100%",
  },
});

const InputWithError = ({ input, meta: { touched, error }, className }) => {
  const shouldShowError = touched && error;
  const classes = useStyles();
  return (
    <div className={className}>
      <input {...input} className={classes.input} />
      {shouldShowError && <span className={classes.error}>{error}</span>}
    </div>
  );
};

export default function Item(props) {
  return <Field {...props} component={InputWithError} />;
}
