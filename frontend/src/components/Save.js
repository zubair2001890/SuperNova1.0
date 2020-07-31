import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    marginTop: "3.25rem",
    padding: "0.625rem 3.25rem",
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "white",
    textTransform: "uppercase",
    marginLeft: "auto",
    background: "#000000 0% 0% no-repeat padding-box",
    borderRadius: "0.5rem",
    display: "block",
    border: 0,
    cursor: "pointer",
  },
});

const SaveButton = () => {
  const classes = useStyles();
  return (
    <button type="submit" className={classes.button}>
      Save
    </button>
  );
};

export default SaveButton;
