import React from "react";
import clsx from "clsx";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";
import IntersectionObserver from "../../../components/IntersectionObserver";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    height: "100vh",
    backgroundColor: "transparent",
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
  },
  paragraph: {
    color: theme.palette.common.white,
  },
  slideFadeLeft: {
    animation: "slideFadeLeft .8s ease 0s backwards",
  },
  slideFadeRight: {
    animation: "slideFadeRight .8s ease 0s backwards",
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <IntersectionObserver
          threshold={0.6}
          render={({ inView, ref }) => {
            return (
              <Paper elevation={0} className={classes.paper} ref={ref}>
                {inView && (
                  <Typography
                    component="p"
                    variant="h6"
                    gutterBottom
                    className={clsx(classes.paragraph, classes.slideFadeLeft)}
                  >
                    We are a crowdfunding platform for scientific research
                    projects.
                  </Typography>
                )}
              </Paper>
            );
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <IntersectionObserver
          threshold={0.6}
          render={({ inView, ref }) => {
            return (
              <Paper elevation={0} className={classes.paper} ref={ref}>
                {inView && (
                  <Typography
                    component="p"
                    variant="h6"
                    gutterBottom
                    className={clsx(classes.paragraph, classes.slideFadeRight)}
                  >
                    We aim to bridge the gap between the scientists changing the
                    world and the people living in it.
                  </Typography>
                )}
              </Paper>
            );
          }}
        />
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <IntersectionObserver
          threshold={0.6}
          render={({ inView, ref }) => {
            return (
              <Paper elevation={0} className={classes.paper} ref={ref}>
                {inView && (
                  <Typography
                    component="p"
                    variant="h6"
                    gutterBottom
                    className={clsx(classes.paragraph, classes.slideFadeLeft)}
                  >
                    With thousands of projects to fund, you have the potential
                    to change the way we see the world.
                  </Typography>
                )}
              </Paper>
            );
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <IntersectionObserver
          threshold={0.6}
          render={({ inView, ref }) => {
            return (
              <Paper elevation={0} className={classes.paper} ref={ref}>
                {inView && (
                  <Typography
                    component="p"
                    variant="h6"
                    gutterBottom
                    className={clsx(classes.paragraph, classes.slideFadeRight)}
                  >
                    Explore Science for yourself and decide where you will make
                    your mark.
                  </Typography>
                )}
              </Paper>
            );
          }}
        />
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};
