import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../store/slices/page";

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
    height: 1080,
    backgroundImage: "url(" + require("./assets/exploreHome.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    display: "block",
  },
  pageTitle: {
    marginTop: 78,
  },
  subheadingVerticalMargin: {
    margin: "68px 0",
  },
  subheadingTextVerticalMargin: {
    paddingBottom: 48,
  },
  container: {
    position: "relative",
    margin: 0,
  },
  fieldLinks: {
    position: "absolute",
    height: 1080,
    top: 0,
    left: 0,
  },
  biologyContainer: {
    position: "absolute",
    top: 119,
    left: "53.23vw",
  },
  fieldText: {
    position: "relative",
    margin: 0,
    textAlign: "center",
    fontFamily: "Montserrat",
    color: "white",
    fontSize: 30,
    lineHeight: "37px",
    letterSpacing: "0.09em",
    fontWeight: 700,
  },
  socialSciencesContainer: {
    position: "absolute",
    top: 287,
    left: "63.125vw",
  },
  physicsContainer: {
    position: "absolute",
    top: 522,
    left: "67.66vw",
  },
  mathsStatsContainer: {
    position: "absolute",
    top: 767,
    left: "62.66vw",
  },
  spaceSciencesContainer: {
    position: "absolute",
    top: 924,
    left: "52.86vw",
  },
  computerScienceContainer: {
    position: "absolute",
    top: 924,
    left: "36.5625vw",
  },
  engineeringTechnologyContainer: {
    position: "absolute",
    top: 756,
    left: "21.15vw",
  },
  earthSciencesContainer: {
    position: "absolute",
    top: 503,
    left: "21.72vw",
  },
  chemistryContainer: {
    position: "absolute",
    top: 240,
    left: "22.55vw",
  },
  medicineContainer: {
    position: "absolute",
    top: 119,
    left: "37.08vw",
  },
}));

export default () => {
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
      <div className={classes.container}>
        <div className={classes.pageHeader}>
          <div className={classes.mockAppBarLayout} />
          <div className={classes.fieldLinks}>
            <div className={classes.biologyContainer}>
              <p className={classes.fieldText}>BIOLOGY</p>
            </div>
            <div className={classes.socialSciencesContainer}>
              <p className={classes.fieldText}>SOCIAL SCIENCES</p>
            </div>
            <div className={classes.physicsContainer}>
              <p className={classes.fieldText}>PHYSICS</p>
            </div>
            <div className={classes.mathsStatsContainer}>
              <p className={classes.fieldText}>MATHEMATICS STATISTICS</p>
            </div>
            <div className={classes.spaceSciencesContainer}>
              <p className={classes.fieldText}>SPACE SCIENCES</p>
            </div>
            <div className={classes.computerScienceContainer}>
              <p className={classes.fieldText}>COMPUTER SCIENCE</p>
            </div>
            <div className={classes.engineeringTechnologyContainer}>
              <p className={classes.fieldText}>ENGINEERING AND TECHNOLOGY</p>
            </div>
            <div className={classes.earthSciencesContainer}>
              <p className={classes.fieldText}>EARTH SCIENCES</p>
            </div>
            <div className={classes.chemistryContainer}>
              <p className={classes.fieldText}>CHEMISTRY</p>
            </div>
            <div className={classes.medicineContainer}>
              <p className={classes.fieldText}>MEDICINE</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <Typography variant="h1" className={classes.pageTitle}>
          Welcome to the Explore Section
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          How it works:
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          SuperNova's Featured Projects:
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          Science and the world of research:
        </Typography>
        <Typography
          variant="body1"
          className={classes.subheadingTextVerticalMargin}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="h2" className={classes.subheadingVerticalMargin}>
          Educational Resources:
        </Typography>
      </div>
    </>
  );
};
