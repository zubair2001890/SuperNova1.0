/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AnimatedArrows from "../components/AnimatedArrows";
import GrowVerticalBar from "../components/GrowVerticalBar";
import HomepageTitle from "../components/HomepageTitle";
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
}));

function Title({ style }) {
  return (
    <Typography variant="h1" style={style}>
      SUPERNOVA
    </Typography>
  );
}

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
        children={
          <Title
            style={{
              fontFamily: "avaMeridian",
              textAlign: "center",
              fontSize: "7.45vw",
              letterSpacing: 10.01,
            }}
          />
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
