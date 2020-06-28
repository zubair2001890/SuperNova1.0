import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "avaMeridian",
    textAlign: "center",
    letterSpacing: 10,
    color: theme.palette.common.white,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        SUPERNOVA
      </Typography>
    </div>
  );
};
