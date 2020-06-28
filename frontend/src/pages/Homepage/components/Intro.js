import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GrowVerticalBar from "./GrowVerticalBar";

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
        gutterBottom
        style={{ color: "white", textAlign: "right" }}
        className={classes.createExploreContainer}
      >
        <span style={{ flex: "0 0 50%", textAlign: "right" }}>Create</span>
        <GrowVerticalBar
          scrollY={scrollY}
          className={classes.growVerticalBar}
        />
        <span style={{ flex: "0 0 50%", textAlign: "left" }}>Explore</span>
      </Typography>
    </div>
  );
};
