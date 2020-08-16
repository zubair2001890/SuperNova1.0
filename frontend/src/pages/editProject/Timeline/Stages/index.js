import React from "react";
import Item from "./Item";

const renderField = (member, index) => (
  <Item member={member} key={index} stage={index + 1} />
);

export default function Stages({ fields }) {
  const items = fields.map(renderField);
  return <div>{items}</div>;
}
