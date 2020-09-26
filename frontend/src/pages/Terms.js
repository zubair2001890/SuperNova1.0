import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  setInitialHeaderTheme,
  setScrollHeaderTheme,
} from "../store/slices/page";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  center: {
    margin: "0 auto",
    maxWidth: 966,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: 92,
    paddingBottom: 92,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
      paddingBottom: 40,
    },
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
    [theme.breakpoints.down("sm")]: {
      height: 58,
      padding: 0,
    },
  },
  pageHeader: {
    height: 370,
    backgroundImage: "url(" + require("./assets/terms.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: 113,
    },
  },
  pageTitle: {
    position: "relative",
    top: 20,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      lineHeight: 0,
    },
  },
  subheadingVerticalMargin: {
    margin: "68px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      margin: 0,
    },
  },
  subheadingTextVerticalMargin: {
    paddingBottom: 48,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
}));

function Terms() {
  const classes = useStyles();
  const dispatch = useDispatch();
  //media queries
  const theme = useTheme();
  const matchesMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(setInitialHeaderTheme("transparent"));
    dispatch(setScrollHeaderTheme("black"));
  }, [dispatch]);
  return (
    <>
      <div className={classes.pageHeader}>
        <div className={classes.mockAppBarLayout} />
        <Typography variant="h1" align="center" className={classes.pageTitle}>
          {matchesMediaQuery ? "T&Cs" : "TERMS AND CONDITIONS"}
        </Typography>
      </div>
      <div className={classes.center}>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          Terms:
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          Conditions:
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
      </div>
    </>
  );
}

export default Terms;
