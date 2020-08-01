import React from "react";
import TeamBio from "../../TeamBio";
import Role from "../../Role";
import Group from "../../../../../components/editProject/Group";
import { makeStyles } from "@material-ui/core";
import { teamText, input } from "../../../../../styles/form";

const useStyles = makeStyles({
  item: {
    "& + &": {
      marginTop: "5rem",
    },
  },
  text: teamText,
  input,
});

export default function Item({ member }) {
  const { item, ...groupClasses } = useStyles();
  return (
    <li className={item}>
      <Group
        name={`${member}.name`}
        label="Name"
        customClasses={groupClasses}
      />
      <Role member={member} customClasses={groupClasses} />
      <TeamBio member={member} customClasses={groupClasses} />
    </li>
  );
}
