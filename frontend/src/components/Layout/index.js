import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { selectDarkTheme } from "../../store/slices/page";
import Particles from "./components/Particles";

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
  const pageDarkTheme = useSelector(selectDarkTheme);
  const [pageMounted, setPageMounted] = useState(false);

  useEffect(() => {
    // this is absolutely necessary to render/destroy Particles and pass props to it
    setPageMounted(true);
  }, []);

  return (
    <>
      <div className={classes.layoutTopContainer}>
        {pageMounted && (
          <Particles darkTheme={pageDarkTheme} className={classes.particles} />
        )}
        <Header darkTheme={pageDarkTheme} />
        {children}
      </div>
      <Footer />
    </>
  );
};
