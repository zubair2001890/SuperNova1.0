import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, makeStyles, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../store/slices/page";
import paths from "../../constants/paths";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    position: "relative",
    margin: 0,
  },
  pageHeader: {
    width: "100%",
    backgroundImage: "url(" + require("./assets/exploreHome.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "block",
    height: 1080,
    "@media (max-height:1080px)": {
      height: "100vh",
    },
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  fieldLinks: {
    position: "absolute",
    width: "100vw",
    top: 0,
    left: 0,
    height: 1080,
    "@media (max-height:1080px)": {
      height: "100vh",
    },
  },
  fieldText: {
    position: "relative",
    margin: 0,
    textAlign: "center",
    fontFamily: "Montserrat",
    color: "white",
    letterSpacing: "0.09em",
    fontWeight: 700,
    padding: 0,
    width: 0,
    height: 0,
    overflow: "visible",
    transform: "translate(-50%, -50%)",
    fontSize: 30,
    lineHeight: "37px",
    "@media (max-height:1080px)": {
      fontSize: "2.78vh",
      lineHeight: "3.426vh",
    },
  },
  biologyContainer: {
    position: "absolute",
    top: "calc(50% - 37px/2 - 361px)",
    left: "calc(50% - 161px/2 + 207px)",
    "@media (max-height:1080px)": {
      top: "calc(50% - 35.14vh)",
      left: "calc(50% + 11.71vh)",
    },
  },
  socialSciencesContainer: {
    position: "absolute",
    top: "calc(50% - 74px/2 - 204px)",
    left: "calc(50% - 176px/2 + 414px)",
    "@media (max-height:1080px)": {
      top: "calc(50% - 22.31vh)",
      left: "calc(50% + 30.19vh)",
    },
  },
  physicsContainer: {
    position: "absolute",
    top: "calc(50% - 37px/2 + 6px)",
    left: "calc(50% - 152px/2 + 522px)",
    "@media (max-height:1080px)": {
      top: "calc(50% - 1.16vh)",
      left: "calc(50% + 41.23vh)",
    },
  },
  mathsStatsContainer: {
    position: "absolute",
    top: "calc(50% - 111px/2 + 307px)",
    left: "calc(50% - 264px/2 + 500px)",
    "@media (max-height:1080px)": {
      top: "calc(50% + 23.29vh)",
      left: "calc(50% + 34.07vh)",
    },
  },
  spaceSciencesContainer: {
    position: "absolute",
    top: "calc(50% - 74px/2 + 445px)",
    left: "calc(50% - 176px/2 + 220px)",
    "@media (max-height:1080px)": {
      top: "calc(50% + 37.78vh)",
      left: "calc(50% + 12.22vh)",
    },
  },
  computerScienceContainer: {
    position: "absolute",
    top: "calc(50% - 74px/2 + 445px)",
    left: "calc(50% - 200px/2 - 24px)",
    "@media (max-height:1080px)": {
      top: "calc(50% + 37.78vh)",
      left: "calc(50% - 11.48vh)",
    },
  },
  engineeringTechnologyContainer: {
    position: "absolute",
    top: "calc(50% - 111px/2 + 307px)",
    left: "calc(50% - 260px/2 - 238px)",
    "@media (max-height:1080px)": {
      top: "calc(50% + 23.29vh)",
      left: "calc(50% - 34.07vh)",
    },
  },
  earthSciencesContainer: {
    position: "absolute",
    top: "calc(50% - 74px/2 + 24.5px)",
    left: "calc(50% - 176px/2 - 358px)",
    "@media (max-height:1080px)": {
      top: "calc(50% - 1.16vh)",
      left: "calc(50% - 41.23vh)",
    },
  },
  chemistryContainer: {
    position: "absolute",
    top: "calc(50% - 37px/2 - 222.5px)",
    left: "calc(50% - 206px/2 - 223px)",
    "@media (max-height:1080px)": {
      top: "calc(50% - 22.31vh)",
      left: "calc(50% - 30.19vh)",
    },
  },
  medicineContainer: {
    position: "absolute",
    top: "calc(50% - 37px/2 - 361px)",
    left: "calc(50% - 179px/2 - 37px)",
    "@media (max-height:1080px)": {
      top: "calc(50% - 35.14vh)",
      left: "calc(50% - 11.71vh)",
    },
  },
  center: {
    margin: "0 auto",
    maxWidth: 966,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: 92,
    paddingBottom: 92,
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
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const fields = [
    {
      path: paths.biology,
      containerClass: classes.biologyContainer,
      label: "BIOLOGY",
      index: 1,
    },
    {
      path: paths.socialSciences,
      containerClass: classes.socialSciencesContainer,
      label: "SOCIAL SCIENCES",
      index: 2,
    },
    {
      path: paths.physics,
      containerClass: classes.physicsContainer,
      label: "PHYSICS",
      index: 3,
    },
    {
      path: paths.mathsAndStats,
      containerClass: classes.mathsStatsContainer,
      label: "MATHEMATICS AND STATISTICS",
      index: 4,
    },
    {
      path: paths.spaceSciences,
      containerClass: classes.spaceSciencesContainer,
      label: "SPACE SCIENCES",
      index: 5,
    },
    {
      path: paths.computerScience,
      containerClass: classes.computerScienceContainer,
      label: "COMPUTER SCIENCE",
      index: 6,
    },
    {
      path: paths.engineeringAndTech,
      containerClass: classes.engineeringTechnologyContainer,
      label: "ENGINEERING AND TECHNOLOGY",
      index: 7,
    },
    {
      path: paths.earthSciences,
      containerClass: classes.earthSciencesContainer,
      label: "EARTH SCIENCES",
      index: 8,
    },
    {
      path: paths.chemistry,
      containerClass: classes.chemistryContainer,
      label: "CHEMISTRY",
      index: 9,
    },
    {
      path: paths.medicine,
      containerClass: classes.medicineContainer,
      label: "MEDICINE",
      index: 10,
    },
  ];

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    return () => {
      dispatch(setPageDarkTheme(false));
    };
  }, [dispatch]);

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.pageHeader}>
          <div className={classes.mockAppBarLayout} />
          <div className={classes.fieldLinks}>
            {fields.map((field) => (
              <div className={field.containerClass} key={field.index}>
                <Button
                  component={RouterLink}
                  to={field.path}
                  className={classes.fieldText}
                >
                  {field.label}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <Typography variant="h1" className={classes.pageTitle}>
          Welcome to the Explore Section
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          How it works:
        </Typography>
        <Typography variant="body1" className={classes.subheadingParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          SuperNova's Featured Projects:
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          Science and the world of research:
        </Typography>
        <Typography variant="body1" className={classes.subheadingParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          Educational Resources:
        </Typography>
      </div>
    </>
  );
};
