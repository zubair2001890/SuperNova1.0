/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AnimatedArrows from "../components/AnimatedArrows";
import GrowVerticalBar from "../components/GrowVerticalBar";
import SlideFadeIn from "../components/SlideFadeIn";
import { useDispatch } from "react-redux";
import {
  setDarkTheme as setPageDarkTheme,
  setParticles as setPageParticles,
} from "../store/slices/page";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    minHeight: "100vh",
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  title: {
    fontFamily: "avaMeridian",
    textAlign: "center",
    letterSpacing: 10,
    color: "white",
  },
}));

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    dispatch(setPageParticles(true));
    return () => {
      dispatch(setPageDarkTheme(false));
      dispatch(setPageParticles(false));
    };
  }, [dispatch]);

  return (
    <div className={classes.pageContainer}>
      <div className={classes.mockAppBarLayout}></div>
      <SlideFadeIn
        transitionIn={true}
        children={
          <Typography variant="h1" className={classes.title}>
            SUPERNOVA
          </Typography>
        }
        slideTimeout={1000}
        fadeTimeout={1500}
        slideDirection="up"
      />
      <AnimatedArrows />
      <GrowVerticalBar />
    </div>
  );
};
