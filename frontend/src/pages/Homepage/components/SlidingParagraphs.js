import React from "react";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";
import SlideFadeIn from "../../../components/SlideFadeIn";
import IntersectionObserver from "../../../components/IntersectionObserver";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    height: "100vh",
    backgroundColor: 'transparent',
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
  },
  paragraph: {
    color: theme.palette.common.white,
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
                <SlideFadeIn transitionIn={inView} slideDirection="left">
                  <Typography
                    component="p"
                    variant="h4"
                    gutterBottom
                    className={classes.paragraph}
                  >
                    We are a crowdfunding platform for scientific research
                    projects.
                  </Typography>
                </SlideFadeIn>
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
                <SlideFadeIn transitionIn={inView} slideDirection="right">
                  <Typography
                    component="p"
                    variant="h4"
                    gutterBottom
                    className={classes.paragraph}
                  >
                    We aim to bridge the gap between the scientists changing the
                    world and the people living in it.
                  </Typography>
                </SlideFadeIn>
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
                <SlideFadeIn transitionIn={inView} slideDirection="left">
                  <Typography
                    component="p"
                    variant="h4"
                    gutterBottom
                    className={classes.paragraph}
                  >
                    With thousands of projects to fund, you have the potential
                    to change the way we see the world.
                  </Typography>
                </SlideFadeIn>
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
                <SlideFadeIn transitionIn={inView} slideDirection="right">
                  <Typography
                    component="p"
                    variant="h4"
                    gutterBottom
                    className={classes.paragraph}
                  >
                    Explore Science for yourself and decide where you will make
                    your mark.
                  </Typography>
                </SlideFadeIn>
              </Paper>
            );
          }}
        />
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};
