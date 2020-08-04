import React from "react";
import TeamBio from "../../TeamBio";
import Role from "../../Role";
import Group from "../../../../../components/editProject/Group";
import { makeStyles } from "@material-ui/core";
import { teamText, teamInput } from "../../../../../styles/form";

const useStyles = makeStyles({
  item: {
    "& + &": {
      marginTop: "5rem",
    },
  },
  text: teamText,
  input: teamInput,
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
      <Role member={member} />
      <TeamBio member={member} />
    </li>
  );
}
