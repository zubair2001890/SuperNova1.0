import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import logo from "./assets/logo.png";

const useStyles = makeStyles(() => ({
  pageContainer: {
    backgroundImage: "url(" + require("./assets/loading_background.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
  },
  logoContainer: {
    position: "relative",
    top: "calc(50% - 116px)",
    left: "calc(50% - 116px)",
  },
  logo: {
    animation: "rotate 3s infinite linear",
  },
  text: {
    color: "white",
    textAlign: "center",
    position: "relative",
    top: "40%",
    fontSize: 24,
    letterSpacing: 1.5,
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.logo} alt="logo"></img>
        </div>
        <Typography variant="h3" className={classes.text}>
          LOADING...
        </Typography>
      </div>
    </>
  );
}
