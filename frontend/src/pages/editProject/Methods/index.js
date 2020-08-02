import React from "react";
import Layout from "../Layout";
import TextAreaLg from "../TextAreaLg";
import Save from "../Save";

const fields = [
  {
    label:
      "What Scientific methods and techniques will be used in this project?",
    name: "methods",
  },
  {
    label: "Are there any interesting pieces of equipment being used?",
    name: "equipment",
  },
  {
    label: "Any further Scientific information / comments about the project?",
    name: "comments",
  },
];

const renderField = (fieldData, index) => (
  <TextAreaLg {...fieldData} key={index} />
);

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
