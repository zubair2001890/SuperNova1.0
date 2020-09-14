import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, Typography, Button } from "@material-ui/core";
import GrowVerticalBar from "./GrowVerticalBar";
import AnimateArrows from "./AnimatedArrows";

const createExploreMarginBottom = 20;

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "75vh",
    paddingTop: "25vh",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontFamily: "avaMeridian",
    textAlign: "center",
    letterSpacing: 10,
    color: theme.palette.common.white,
    animation: "slideFadeUp 1.5s ease 1s backwards",
    fontSize: 100,
    "@media (max-width:1000px)": {
      fontSize: 70,
    },
  },
  subtitle: {
    animation: "slideFadeUp 1.5s ease 2s backwards",
    fontSize: 45,
    textAlign: "center",
    "@media (max-width:1000px)": {
      fontSize: 30,
    },
  },
  createExplore: {
    display: "flex",
    width: "100%",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    animation: "slideFadeUp 1.5s ease 2s backwards",
    fontSize: 35,
    "@media (max-width:1000px)": {
      fontSize: 20,
    },
  },
  growVerticalBar: {
    flex: "0 0 auto",
  },
  arrows: {
    animation: "slideFadeUp 1.5s ease 2s backwards",
  },
}));

export default ({ scrollY, className }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.container, className)}>
      <Typography variant="h1" className={classes.title}>
        SUPERNOVA
      </Typography>
      <Typography variant="h4" className={classes.subtitle}>
        <>
          <span style={{ color: theme.palette.common.red }}>SCIENCE.</span>{" "}
          <span style={{ color: theme.palette.common.white }}>
            POWERED BY YOU.
          </span>
        </>
      </Typography>
      <div className={classes.createExploreContainer}>
        <Button
          style={{ color: "white", marginBottom: createExploreMarginBottom }}
        >
          <Typography
            variant="h5"
            style={{
              color: "white",
              textAlign: "right",
            }}
            className={classes.createExplore}
          >
            CREATE
          </Typography>
        </Button>
        <GrowVerticalBar
          scrollY={scrollY}
          className={classes.growVerticalBar}
        />
        <Button
          style={{ color: "white", marginBottom: createExploreMarginBottom }}
        >
          <Typography
            variant="h5"
            style={{
              color: "white",
              textAlign: "right",
            }}
            className={classes.createExplore}
          >
            EXPLORE
          </Typography>
        </Button>
      </div>
    </div>
  );
};
