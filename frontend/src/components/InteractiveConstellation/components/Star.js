import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  star: {
    position: "absolute",
    height: "20%",
  },
}));

export default function Star(props) {
  const classes = useStyles();

  return (
    <img
      alt="star"
      src={props.star}
      className={classes.star}
      style={{ top: props.top, left: props.left }}
      onClick={props.onClick}
    />
  );
}
