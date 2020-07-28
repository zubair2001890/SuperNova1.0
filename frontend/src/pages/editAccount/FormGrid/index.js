import React from "react";
import { makeStyles } from "@material-ui/core";
import Inputs from "./Inputs";
import Labels from "./Labels";
import SaveButton from "./Save";

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: "33.5rem",
  },
  inputsAndLabels: {
    display: "flex",
  },
}));

export default function FormGrid({ fields, handleSubmit, className = "" }) {
  const classes = useStyles();
  const formClasses = `${className} ${classes.form}`;
  return (
    <form onSubmit={handleSubmit} className={formClasses}>
      <div className={classes.inputsAndLabels}>
        <Labels fields={fields} />
        <Inputs fields={fields} />
      </div>
      <SaveButton />
    </form>
  );
}
