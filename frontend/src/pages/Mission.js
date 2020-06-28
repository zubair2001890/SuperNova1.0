import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paragraphText: {
    margin: "auto",
    width: "50%",
  },
}));

function Mission() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography variant="h4" align="center">
          OUR MISSION
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="h5">SuperNova's Mission:</Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="body1">
          At its core, SuperNova is a unique crowdfunding website for Scientific
          Research Projects providing the world's Scientists with an exciting
          new channel to receive the support required to carry out their vital
          research.
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="body1">
          Unlike most crowdfunding platforms where donations are motivated by
          the promise of material gain, those who back projects on SuperNova
          will be given an exclusive educational opportunity to interact with
          the Scientists, gaining access to first hand commentary on cutting
          edge research.
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="body1">
          By drawing on the inherent curiosity of the human mind and the
          fascination that Science provides it, SuperNova aims to become a
          thriving community providing a podium for Research to flourish,
          Scientists to collaborate, and for The People to play an active role
          in the advancement of Science itself.
        </Typography>
      </div>

      <div className={classes.paragraphText}>
        <Typography variant="h5">More Mission:</Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="body1">
          At its core, SuperNova is a unique crowdfunding website for Scientific
          Research Projects providing the world's Scientists with an exciting
          new channel to receive the support required to carry out their vital
          research.
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="body1">
          Unlike most crowdfunding platforms where donations are motivated by
          the promise of material gain, those who back projects on SuperNova
          will be given an exclusive educational opportunity to interact with
          the Scientists, gaining access to first hand commentary on cutting
          edge research.
        </Typography>
      </div>
      <div className={classes.paragraphText}>
        <Typography variant="body1">
          By drawing on the inherent curiosity of the human mind and the
          fascination that Science provides it, SuperNova aims to become a
          thriving community providing a podium for Research to flourish,
          Scientists to collaborate, and for The People to play an active role
          in the advancement of Science itself.
        </Typography>
      </div>
    </>
  );
}

export default Mission;
