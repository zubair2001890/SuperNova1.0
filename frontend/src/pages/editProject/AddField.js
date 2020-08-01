import React from "react";
import { makeStyles } from "@material-ui/core";

const buttonSize = "1.5rem";

const useStyles = makeStyles({
  addButton: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "50%",
    width: buttonSize,
    height: buttonSize,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    fontSize: "1.25rem",
  },
  text: {
    display: "none",
  },
});

export default function AddField({ push }) {
  const emptyCollaborator = { name: "", role: "", bio: "" };
  const handleClick = () => push(emptyCollaborator);
  const classes = useStyles();
  return (
    <button onClick={handleClick} className={classes.addButton}>
      +<div className={classes.text}>Add Collaborator</div>
    </button>
  );
}
