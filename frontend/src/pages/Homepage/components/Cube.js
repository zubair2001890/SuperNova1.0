import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cubeSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "3550px",
    backgroundColor: "#000647",
  },
  cube: {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transform: "translateZ(-100px)",
  },
  cubeFace: {
    position: "absolute",
    width: 400,
    height: 400,
    textAlign: "center",
    backgroundColor: "white",
    color: "#000647",
    opacity: 1,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

function cubeFace({ title, mainText }) {
  return (
    <>
      <Typography align="center" style={{ margin: 20 }} variant="h4">{title}</Typography>
      <Typography align="center" style={{ margin: 20 }}>{mainText}</Typography>
    </>
  );
}

const cubeFaces = [
  cubeFace({ title: "Our Model" }),
  cubeFace({
    title: "Discover",
    mainText:
      "Immerse yourself in the world of Science and discover our latest projects from all corners of academia.",
  }),
  cubeFace({
    title: "Upload",
    mainText:
      "Scientists upload detailed plans for their project onto SuperNova to access a new stream of funding for their research.",
  }),
  cubeFace({
    title: "Engage",
    mainText:
      "Scientists engage with the public through the funding process to meet their project goal before commencing their research journey.",
  }),
  cubeFace({
    title: "Share",
    mainText:
      "Scientists will share their latest findings and lab notes with project backers giving you an exclusive insight into Scientific research.",
  }),
  cubeFace({
    title: "Join",
    mainText:
      "Join our community of curious people and collaborating Scientists to welcome the next generation of Scientific breakthroughs..",
  }),
];

export default function Cube({scrollY}) {
  const classes = useStyles();

  if (scrollY > 7290) {
    document.getElementById("cube-container").className = "cube-container";
    document.getElementById("cube-section").style.justifyContent = "flex-end";
  }
  else if (scrollY > 6750) {
    document.getElementById("cube-container").className = "cube-container-fixed";
    document.getElementById("cube").className = "cube-show-face-6";
  }
  else if (scrollY > 6250) {
    document.getElementById("cube").className = "cube-show-face-5";
  }
  else if (scrollY > 5750) {
    document.getElementById("cube").className = "cube-show-face-4";
  }
  else if (scrollY > 5250) {
    document.getElementById("cube").className = "cube-show-face-3";
  }
  else if (scrollY > 4750) {
    document.getElementById("cube-container").className = "cube-container-fixed";
    document.getElementById("cube").className = "cube-show-face-2";
  }
  else if (document.getElementById("cube-container") && (scrollY <= 4770)) {
    document.getElementById("cube-container").className = "cube-container";
    document.getElementById("cube-section").style.justifyContent = "flex-start";
    document.getElementById("cube").className = "cube";
  }

  return (
    <div className={classes.cubeSection} id="cube-section">
      <div class="cube-container" id="cube-container">
        <div class="cube" id="cube">
          <div className={classes.cubeFace} id="cube-face-front">
            {cubeFaces[0]}
          </div>
          <div className={classes.cubeFace} id="cube-face-back">
          {cubeFaces[5]}
          </div>
          <div className={classes.cubeFace} id="cube-face-right">
          {cubeFaces[2]}
          </div>
          <div className={classes.cubeFace} id="cube-face-left">
          {cubeFaces[4]}
          </div>
          <div className={classes.cubeFace} id="cube-face-top">
          {cubeFaces[3]}
          </div>
          <div className={classes.cubeFace} id="cube-face-bottom">
          {cubeFaces[1]}
          </div>
        </div>
      </div>
    </div>
  );
}