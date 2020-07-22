import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Typography,
  makeStyles,
  Button,
  useMediaQuery,
} from "@material-ui/core";
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
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  fieldLinks: {
    position: "absolute",
    width: "100vw",
    top: 0,
    left: 0,
  },
  biologyContainer: {
    position: "absolute",
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
  },
  socialSciencesContainer: {
    position: "absolute",
  },
  physicsContainer: {
    position: "absolute",
  },
  mathsStatsContainer: {
    position: "absolute",
  },
  spaceSciencesContainer: {
    position: "absolute",
  },
  computerScienceContainer: {
    position: "absolute",
  },
  engineeringTechnologyContainer: {
    position: "absolute",
  },
  earthSciencesContainer: {
    position: "absolute",
  },
  chemistryContainer: {
    position: "absolute",
  },
  medicineContainer: {
    position: "absolute",
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
  const moreThan1080PixelsHigh = useMediaQuery("(min-height:1080px)");

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    return () => {
      dispatch(setPageDarkTheme(false));
    };
  }, [dispatch]);

  return (
    <>
      <div className={classes.pageContainer}>
        <div
          className={classes.pageHeader}
          style={{ height: moreThan1080PixelsHigh ? 1080 : "100vh" }}
        >
          <div className={classes.mockAppBarLayout} />
          <div
            className={classes.fieldLinks}
            style={{ height: moreThan1080PixelsHigh ? 1080 : "100vh" }}
          >
            <div
              className={classes.biologyContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 37px/2 - 361px)"
                  : "calc(50% - 35.14vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 161px/2 + 207px)"
                  : "calc(50% + 11.71vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.biology}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
              >
                BIOLOGY
              </Button>
            </div>
            <div
              className={classes.socialSciencesContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 74px/2 - 204px)"
                  : "calc(50% - 22.31vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 176px/2 + 414px)"
                  : "calc(50% + 30.19vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.socialsciences}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
              >
                SOCIAL SCIENCES
              </Button>
            </div>
            <div
              className={classes.physicsContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 37px/2 + 6px)"
                  : "calc(50% - 1.16vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 152px/2 + 522px)"
                  : "calc(50% + 41.23vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.physics}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
              >
                PHYSICS
              </Button>
            </div>
            <div
              className={classes.mathsStatsContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 111px/2 + 307px)"
                  : "calc(50% + 23.29vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 264px/2 + 500px)"
                  : "calc(50% + 34.07vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.mathematicsandstats}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
              >
                MATHEMATICS AND STATISTICS
              </Button>
            </div>
            <div
              className={classes.spaceSciencesContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 74px/2 + 445px)"
                  : "calc(50% + 37.78vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 176px/2 + 220px)"
                  : "calc(50% + 12.22vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.spacesciences}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
              >
                SPACE SCIENCES
              </Button>
            </div>
            <div
              className={classes.computerScienceContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 74px/2 + 445px)"
                  : "calc(50% + 37.78vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 200px/2 - 24px)"
                  : "calc(50% - 11.48vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.computerscience}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
              >
                COMPUTER SCIENCE
              </Button>
            </div>
            <div
              className={classes.engineeringTechnologyContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 111px/2 + 307px)"
                  : "calc(50% + 23.29vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 260px/2 - 238px)"
                  : "calc(50% - 34.07vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.engineeringandtech}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
              >
                ENGINEERING AND TECHNOLOGY
              </Button>
            </div>
            <div
              className={classes.earthSciencesContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 74px/2 + 24.5px)"
                  : "calc(50% - 1.16vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 176px/2 - 358px)"
                  : "calc(50% - 41.23vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.earthsciences}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
              >
                EARTH SCIENCES
              </Button>
            </div>
            <div
              className={classes.chemistryContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 37px/2 - 222.5px)"
                  : "calc(50% - 22.31vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 206px/2 - 223px)"
                  : "calc(50% - 30.19vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.chemistry}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
              >
                CHEMISTRY
              </Button>
            </div>
            <div
              className={classes.medicineContainer}
              style={{
                top: moreThan1080PixelsHigh
                  ? "calc(50% - 37px/2 - 361px)"
                  : "calc(50% - 35.14vh)",
                left: moreThan1080PixelsHigh
                  ? "calc(50% - 179px/2 - 37px)"
                  : "calc(50% - 11.71vh)",
              }}
            >
              <Button
                component={RouterLink}
                to={paths.medicine}
                className={classes.fieldText}
                style={{
                  fontSize: moreThan1080PixelsHigh ? 30 : "2.78vh",
                  lineHeight: moreThan1080PixelsHigh ? "37px" : "3.426vh",
                }}
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
