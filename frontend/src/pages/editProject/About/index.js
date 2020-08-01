import React from "react";
import Layout from "../Layout";
import TextArea from "../TextArea";
import Save from "../Save";
import { text, input } from "../../../styles/form";
import { makeStyles } from "@material-ui/core";

const inputs = [
  {
    label: "What are the aims fo the Project?",
    name: "aims",
  },
  {
    label: "What is the Scientific context of this project?",
    name: "context",
  },
  {
    label: "Why is this research important / valuable?",
    name: "importance",
  },
  {
    label: "Any additional information",
    name: "info",
  },
];

const renderInput = (classes) => (inputData, index) => (
  <TextArea {...inputData} key={index} customClasses={classes} />
);

const renderInputs = (classes) => inputs.map(renderInput(classes));

const useStyles = makeStyles({
  grid: {
    "& + &": {
      marginTop: "3.364375rem",
    },
  },
  text: {
    ...text,
    marginBottom: "2.15625rem",
  },
  input: {
    ...input,
    minHeight: "13.1875rem",
  },
});

export default function About() {
  const classes = useStyles();
  const inputs = renderInputs(classes);
  return (
    <Layout title="About this project">
      {inputs}
      <Save />
    </Layout>
  );
}
