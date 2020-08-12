import React from "react";
import { makeStyles, Avatar, Tooltip } from "@material-ui/core";
import FundsProgress from "./FundsProgress";

const maxTitleLength = 45;

const useStyles = makeStyles((theme) => ({
  cardBody: {
    "& > *": {
      marginTop: 0,
      marginBottom: 0,
      "&:not(:last-child)": { marginBottom: theme.spacing(2) },
    },
  },
  projectTitle: {
    fontSize: 16,
    letterSpacing: 0.96,
    fontWeight: 700,
    lineHeight: "19px",
    fontFamily: "'Montserrat', sans-serif",
    maxHeight: 36,
    overflowY: "hidden",
  },
  avatar: {
    width: 56,
    height: 56,
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 1.12,
    fontWeight: 500,
    lineHeight: "18px",
    fontFamily: "'Montserrat', sans-serif",
  },
}));

export default function Body({
  project: {
    projectName,
    imageUrl,
    firstName,
    lastName,
    university,
    totalPledged,
    goal,
  },
}) {
  const classes = useStyles();
  return (
    <div className={classes.cardBody}>
      <p className={classes.projectTitle}>
        {projectName.length < maxTitleLength ? (
          projectName.title
        ) : (
          <Tooltip title={projectName} placement="top">
            <span>{projectName.slice(0, maxTitleLength - 3) + "..."}</span>
          </Tooltip>
        )}
      </p>
      <Avatar
        className={classes.avatar}
        alt="Researcher Avatar"
        src={imageUrl}
      />
      <p className={classes.subtitle}>
        {firstName} {lastName} <br />
        {university}
      </p>
      <FundsProgress fundsRaised={totalPledged} fundsGoal={goal} />
    </div>
  );
}