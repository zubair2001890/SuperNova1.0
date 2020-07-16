import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, makeStyles, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../store/slices/page";
import paths from "../../constants/paths";

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
  subheading: {
    margin: "68px 0",
  },
  subheadingParagraph: {
    paddingBottom: 48,
  },
  pageContainer: {
    position: "relative",
    margin: 0,
  },
  fieldLinks: {
    position: "absolute",
    height: 1080,
    top: 0,
    left: 0,
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
    padding: 0,
  },
  biologyContainer: {
    position: "absolute",
    top: 119,
    left: "53.23vw",
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
              <Button
                component={RouterLink}
                to={paths.biology}
                className={classes.fieldText}
              >
                BIOLOGY
              </Button>
            </div>
            <div className={classes.socialSciencesContainer}>
              <Button
                component={RouterLink}
                to={paths.socialsciences}
                className={classes.fieldText}
              >
                SOCIAL SCIENCES
              </Button>
            </div>
            <div className={classes.physicsContainer}>
              <Button
                component={RouterLink}
                to={paths.physics}
                className={classes.fieldText}
              >
                PHYSICS
              </Button>
            </div>
            <div className={classes.mathsStatsContainer}>
              <Button
                component={RouterLink}
                to={paths.mathematicsandstats}
                className={classes.fieldText}
              >
                MATHEMATICS STATISTICS
              </Button>
            </div>
            <div className={classes.spaceSciencesContainer}>
              <Button
                component={RouterLink}
                to={paths.spacesciences}
                className={classes.fieldText}
              >
                SPACE SCIENCES
              </Button>
            </div>
            <div className={classes.computerScienceContainer}>
              <Button
                component={RouterLink}
                to={paths.computerscience}
                className={classes.fieldText}
              >
                COMPUTER SCIENCE
              </Button>
            </div>
            <div className={classes.engineeringTechnologyContainer}>
              <Button
                component={RouterLink}
                to={paths.engineeringandtech}
                className={classes.fieldText}
              >
                ENGINEERING AND TECHNOLOGY
              </Button>
            </div>
            <div className={classes.earthSciencesContainer}>
              <Button
                component={RouterLink}
                to={paths.earthsciences}
                className={classes.fieldText}
              >
                EARTH SCIENCES
              </Button>
            </div>
            <div className={classes.chemistryContainer}>
              <Button
                component={RouterLink}
                to={paths.chemistry}
                className={classes.fieldText}
              >
                CHEMISTRY
              </Button>
            </div>
            <div className={classes.medicineContainer}>
              <Button
                component={RouterLink}
                to={paths.medicine}
                className={classes.fieldText}
              >
                MEDICINE
              </Button>
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
