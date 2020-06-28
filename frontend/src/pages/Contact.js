import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paragraphText: {
    margin: "auto",
    width: "50%",
  },
}));

function Model() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.paragraphText}>
        <Typography variant="body1">
          You can reach us at the following addresses:
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="body1">research@supernova.ac</Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="body1">wyf@supernova.ac</Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="body1">zm@supernova.ac</Typography>
      </div>
    </>
  );
}

export default Model;
