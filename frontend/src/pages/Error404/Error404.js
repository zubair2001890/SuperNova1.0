/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import paths from "../../constants/paths";

const useStyles = makeStyles(() => ({
  pageContainer: {
    backgroundImage:
      "url(" + require("./assets/error_404_background.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
  },
  title: {
    color: "white",
    textAlign: "center",
    position: "relative",
    top: "25%",
    fontSize: 100,
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    position: "relative",
    top: "40%",
    fontSize: 34,
  },
  description: {
    color: "white",
    textAlign: "center",
    position: "relative",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing: 1.5,
    width: "40%",
  },
  buttonContainer: {
    position: "relative",
    top: "55%",
    left: "calc(50% - 65px)",
  },
  button: {
    fontSize: 16,
    fontWeight: "bold",
  }
}));

export default function Links() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.pageContainer}>
        <Typography variant="h1" className={classes.title}>
          Oops!
        </Typography>
        <Typography variant="h2" className={classes.subtitle}>404 - Page not found</Typography>
        <Typography variant="h3" className={classes.description}>The page you were looking for might have been removed, had its name changed or is temporarily unavailable.</Typography>
        <div className={classes.buttonContainer}>
          <Button variant="contained" className={classes.button} component={RouterLink} to={paths.home}>HOMEPAGE</Button>
        </div>
      </div>
    </>
  );
}
