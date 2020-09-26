import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  setDarkTheme as setPageDarkTheme,
  setInitialHeaderTheme,
  setScrollHeaderTheme,
} from "../store/slices/page";

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
    backgroundImage: "url(" + require("./assets/contact.png") + ")",
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
      paddingBottom: 35,
    },
  },
  subheadingTextVerticalMargin: {
    paddingBottom: 48,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    dispatch(setInitialHeaderTheme("transparent"));
    dispatch(setScrollHeaderTheme("black"));
    // return () => {
    //   dispatch(setPageDarkTheme(false));
    // };
  }, [dispatch]);
  return (
    <>
      <div className={classes.pageHeader}>
        <div className={classes.mockAppBarLayout} />
        <Typography variant="h1" align="center" className={classes.pageTitle}>
          CONTACT US
        </Typography>
      </div>
      <div className={classes.center}>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          You can reach us at the following addresses:
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          research@supernova.ac
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          wyf@supernova.ac
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          zm@supernova.ac
        </Typography>
      </div>
    </>
  );
}

export default Contact;
