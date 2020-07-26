import React from "react";
import Group from "./Group";
import SaveButton from "./Save";

const renderField = (fieldData, index) => <Group {...fieldData} key={index} />;

const renderFields = (fields) => fields.map(renderField);

export default function FormGrid({ fields, handleSubmit, className = null }) {
  return (
    <form onSubmit={handleSubmit} className={className}>
      {renderFields(fields)}
      <SaveButton />
    </form>
  );
}
