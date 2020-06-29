import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../store/slices/page";

const useStyles = makeStyles((theme) => ({
  center: {
    margin: "0 auto",
    maxWidth: 966,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: 92,
    paddingBottom: 92,
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  pageHeader: {
    height: 370,
    backgroundImage: "url(" + require("./assets/model.png") + ")",
  },
  pageTitle: {
    position: "relative",
    top: 20,
    color: "white",
  },
  subheadingVerticalMargin: {
    margin: "68px 0",
  },
  subheadingTextVerticalMargin: {
    paddingBottom: 48,
  },
}));

function Model() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    return () => {
      dispatch(setPageDarkTheme(false));
    };
  }, [dispatch]);
  return (
    <>
      <div className={classes.pageHeader}>
        <div className={classes.mockAppBarLayout} />
        <Typography variant="h1" align="center" className={classes.pageTitle}>
          OUR MODEL
        </Typography>
      </div>
      <div className={classes.center}>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          SuperNova's Model:
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          At its core, SuperNova is a unique crowdfunding website for Scientific
          Research Projects providing the world's Scientists with an exciting
          new channel to receive the support required to carry out their vital
          research.
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          Unlike most crowdfunding platforms where donations are motivated by
          the promise of material gain, those who back projects on SuperNova
          will be given an exclusive educational opportunity to interact with
          the Scientists, gaining access to first hand commentary on cutting
          edge research.
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          By drawing on the inherent curiosity of the human mind and the
          fascination that Science provides it, SuperNova aims to become a
          thriving community providing a podium for Research to flourish,
          Scientists to collaborate, and for The People to play an active role
          in the advancement of Science itself.
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          More Model:
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          At its core, SuperNova is a unique crowdfunding website for Scientific
          Research Projects providing the world's Scientists with an exciting
          new channel to receive the support required to carry out their vital
          research.
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          Unlike most crowdfunding platforms where donations are motivated by
          the promise of material gain, those who back projects on SuperNova
          will be given an exclusive educational opportunity to interact with
          the Scientists, gaining access to first hand commentary on cutting
          edge research.
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          By drawing on the inherent curiosity of the human mind and the
          fascination that Science provides it, SuperNova aims to become a
          thriving community providing a podium for Research to flourish,
          Scientists to collaborate, and for The People to play an active role
          in the advancement of Science itself.
        </Typography>
      </div>
    </>
  );
}

export default Model;
