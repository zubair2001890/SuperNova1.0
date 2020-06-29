import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import GrowVerticalBar from "./GrowVerticalBar";
import AnimateArrows from "./AnimatedArrows";
import SlideFadeIn from "../../../components/SlideFadeIn";

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
  },
  createExploreContainer: {
    display: "flex",
    width: "100%",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  growVerticalBar: {
    flex: "0 0 auto",
  },
}));

export default ({ scrollY, className }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.container, className)}>
      <SlideFadeIn delay={500} slideDirection="up">
        <Typography variant="h1" className={classes.title}>
          SUPERNOVA
        </Typography>
      </SlideFadeIn>
      <SlideFadeIn delay={2000} slideDirection="up">
        <Typography variant="h4" gutterBottom>
          <>
            <span style={{ color: theme.palette.common.red }}>SCIENCE.</span>{" "}
            <span style={{ color: theme.palette.common.white }}>
              POWERED BY YOU.
            </span>
          </>
        </Typography>
      </SlideFadeIn>
      <SlideFadeIn delay={2000} slideDirection="up">
        <Typography
          variant="h5"
          style={{
            color: "white",
            textAlign: "right",
            marginBottom: createExploreMarginBottom,
          }}
          className={classes.createExploreContainer}
        >
          <span style={{ flex: "0 0 50%", textAlign: "right" }}>CREATE</span>
          <GrowVerticalBar
            scrollY={scrollY}
            className={classes.growVerticalBar}
          />
          <span style={{ flex: "0 0 50%", textAlign: "left" }}>EXPLORE</span>
        </Typography>
      </SlideFadeIn>
      <SlideFadeIn delay={2000} slideDirection="up">
        <AnimateArrows
          style={{ opacity: 1 - scrollY / createExploreMarginBottom }}
        />
      </SlideFadeIn>
    </div>
  );
};
