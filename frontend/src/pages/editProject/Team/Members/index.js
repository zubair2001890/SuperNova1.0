import React from "react";
import Grid from "@material-ui/core/Grid";
import { FieldArray } from "redux-form";
import SelfInfo from "./SelfInfo";
import Collaborators from "./Collaborators";
import Item from "./Collaborators/Item";

const renderItem = (member, index) => {
  const isSelfInfo = index === 0;
  if (isSelfInfo) {
    return <SelfInfo member={member} />;
  }
  return <Item member={member} key={index} />;
};

function List({ fields }) {
  const items = fields.map(renderItem);
  const [selfInfo, ...collaborators] = items;
  return (
    <Grid container item xs={12} md={8}>
      {selfInfo}
      <Collaborators push={fields.push}>{collaborators}</Collaborators>
    </Grid>
  );
}

export default function Members() {
  return <FieldArray name="team" component={List} />;
}
