import React from "react";
import Layout from "../Layout";
import TextArea from "../TextArea";
import Save from "../Save";

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

const renderInput = (inputData, index) => (
  <TextArea {...inputData} key={index} />
);

const renderInputs = () => inputs.map(renderInput);

export default function About() {
  const inputs = renderInputs();
  return (
    <Layout title="About this project">
      {inputs}
      <Save />
    </Layout>
  );
}
