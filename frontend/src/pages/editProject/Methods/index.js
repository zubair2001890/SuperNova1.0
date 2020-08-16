import React from "react";
import Layout from "../Layout";
import TextAreaLg from "../TextAreaLg";
import Save from "../Save";

const getName = (keyName) => `methodDescription.${keyName}`;

const fields = [
  {
    label:
      "What Scientific methods and techniques will be used in this project?",
    name: "methodsAndTechniques",
  },
  {
    label: "Are there any interesting pieces of equipment being used?",
    name: "equipment",
  },
  {
    label: "Any further Scientific information / comments about the project?",
    name: "furtherComments",
  },
];

const renderField = ({ name, label }, index) => {
  const fullName = getName(name);
  return <TextAreaLg name={fullName} label={label} key={index} />;
};

const renderFields = () => fields.map(renderField);

export default function Methods() {
  const methodsList = renderFields();
  return (
    <Layout title="Scientific Methods and Technqiues">
      {methodsList}
      <Save />
    </Layout>
  );
}
