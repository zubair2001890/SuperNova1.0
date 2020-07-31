import React from "react";
import { change } from "redux-form";
import { connect } from "react-redux";
import forms from "../../../../../../../constants/forms";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    width: "100%",
    padding: "1rem",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
    },
  },
});

function Item({ setIsFocused, setQuery, setIsOpen, name, fieldName, change }) {
  const handleClick = () => {
    setQuery(name);
    change(forms.editProject, fieldName, name);
    setIsOpen(false);
  };

  const handleFocus = () => setIsFocused(true);

  const classes = useStyles();

  return (
    <li>
      <button
        onFocus={handleFocus}
        onClick={handleClick}
        className={classes.button}
      >
        {name}
      </button>
    </li>
  );
}

export default connect(null, { change })(Item);
