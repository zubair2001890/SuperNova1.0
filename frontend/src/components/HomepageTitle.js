import React from "react";
import { Typography, Fade, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "avaMeridian",
    textAlign: "center",
    fontSize: "7.45vw",
    letterSpacing: 10.01,
  },
  fadeAnimation: {
    in: true,
    timeout: 1500,
  },
}));

export default function HomepageTitle() {
  const classes = useStyles();

  return (
    <>
      <Slide in={true} timeout={1000} direction="up">
        <div>
          <Fade in={true} timeout={1500}>
            <Typography className={classes.title}>SUPERNOVA</Typography>
          </Fade>
        </div>
      </Slide>
    </>
  );
}
