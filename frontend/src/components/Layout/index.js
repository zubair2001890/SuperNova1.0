import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginFooter from "./components/LoginFooter";
import { selectDarkTheme, selectParticles } from "../../store/slices/page";
import Particles from "./components/Particles";

const useStyles = makeStyles((theme) => ({
  particles: {
    position: "fixed",
    top: 0,
    height: "100vh",
    width: "100vw",
  },
}));

export default ({ props, children }) => {
  const classes = useStyles();
  const pageDarkTheme = useSelector(selectDarkTheme);
  const pageParticles = useSelector(selectParticles);
  const [pageMounted, setPageMounted] = useState(false);

  useEffect(() => {
    // this is absolutely necessary to render/destroy Particles and pass props to it
    setPageMounted(true);
  }, []);

  return (
    <>
      {pageMounted && pageParticles && (
        <Particles darkTheme={pageDarkTheme} className={classes.particles} />
      )}
      <Header darkTheme={pageDarkTheme} />
      {children}
      <Footer />
    </>
  );
};
