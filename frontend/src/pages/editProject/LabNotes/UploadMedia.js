import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    letterSpacing: "0.2px",
    fontSize: "1.25rem",
  },
});

export default function UploadMedia() {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.title}>Upload Media</h2>
    </div>
  );
}
