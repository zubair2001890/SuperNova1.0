import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
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
  const theme = useTheme();

  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        SUPERNOVA
      </Typography>
      <Typography variant="h2" gutterBottom>
        <>
          <span style={{ color: theme.palette.common.red }}>SCIENCE.</span>{" "}
          <span style={{ color: theme.palette.common.white }}>
            POWERED BY YOU.
          </span>
        </>
      </Typography>
    </div>
  );
};
