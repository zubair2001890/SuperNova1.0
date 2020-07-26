import React from "react";
import Group from "./Group";
import SaveButton from "./Save";

const renderField = (fieldData, index) => <Group {...fieldData} key={index} />;

const renderFields = (fields) => fields.map(renderField);

export default function FormGrid({ fields, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      {renderFields(fields)}
      <SaveButton />
    </form>
  );
}
