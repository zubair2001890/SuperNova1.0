import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import GrowVerticalBar from "./GrowVerticalBar";
import AnimateArrows from "./AnimatedArrows";

const createExploreMarginBottom = 50;

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
    fontSize: 125,
    fontWeight: 700,
  },
  subtitle: {
    animation: "slideFadeUp 1.5s ease 2s backwards",
    fontSize: 45,
    textAlign: "center",
  },
  createExplore: {
    display: "flex",
    width: "100%",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    animation: "slideFadeUp 1.5s ease 2s backwards",
    fontSize: 35,
  },
  growVerticalBar: {
    flex: "0 0 auto",
  },
  arrows: {
    animation: "slideFadeUp 1.5s ease 2s backwards",
  }
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
        <Typography
          variant="h5"
          style={{
            color: "white",
            textAlign: "right",
            marginBottom: createExploreMarginBottom,
          }}
          className={classes.createExplore}
        >
          <span style={{ flex: "0 0 50%", textAlign: "right" }}>CREATE</span>
          <GrowVerticalBar
            scrollY={scrollY}
            className={classes.growVerticalBar}
          />
          <span style={{ flex: "0 0 50%", textAlign: "left" }}>EXPLORE</span>
        </Typography>
        <AnimateArrows
          className={classes.arrows}
          style={{ opacity: 1 - scrollY / createExploreMarginBottom }}
        />
      </div>
    </div>
  );
};
