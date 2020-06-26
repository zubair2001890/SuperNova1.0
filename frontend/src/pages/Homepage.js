/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AnimatedArrows from "../components/AnimatedArrows";
import GrowVerticalBar from "../components/GrowVerticalBar";
import SlideFadeIn from "../components/SlideFadeIn";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../store/slices/page";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: "white",
    minHeight: "100vh",
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  title: {
    fontFamily: "avaMeridian",
    textAlign: "center",
    fontSize: "7.45vw",
    letterSpacing: 10.01,
  },
}));

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(setPageDarkTheme(false));
  }, [dispatch]);

  return (
    <div className={classes.pageContainer}>
      <div className={classes.mockAppBarLayout}></div>
      <Typography variant="h1" gutterBottom style={{ color: "black" }}>
        Homepage
      </Typography>
      <SlideFadeIn
        children={<Typography className={classes.title}>SUPERNOVA</Typography>}
        slideTimeout={1000}
        fadeTimeout={1500}
        slideDirection="up"
      />
      <AnimatedArrows />
      <GrowVerticalBar />
    </div>
  );
};
