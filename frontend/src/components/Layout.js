import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import { selectDarkTheme } from "../store/slices/header";
import Particles from "react-particles-js";
import particlesParams from "./particlesParams";

const useStyles = makeStyles((theme) => ({
  layoutTopContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    overflowY: "scroll",
  },
  particles: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
}));

export default ({ children }) => {
  const classes = useStyles();
  const headerDarkTheme = useSelector(selectDarkTheme);

  return (
    <>
      <div className={classes.layoutTopContainer}>
        <Particles params={particlesParams} className={classes.particles} />
        <Header darkTheme={headerDarkTheme} />
        {children}
      </div>
      <Footer />
    </>
  );
};
