import React from "react";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import GrowVerticalBar from "./GrowVerticalBar";
import AnimateArrows from "./AnimatedArrows";

const createExploreMarginBottom = 50;

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
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

export default ({ scrollY }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        SUPERNOVA
      </Typography>
      <Typography variant="h2" gutterBottom>
        <>
          <span style={{ color: theme.palette.common.red }}>SCIENCE.</span>{" "}
          <span style={{ color: theme.palette.common.white }}>
            POWERED BY YOU.
          </span>
        </>
      </Typography>
      <Typography
        variant="h3"
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
      <AnimateArrows
        style={{ opacity: 1 - scrollY / createExploreMarginBottom }}
      />
    </div>
  );
};
