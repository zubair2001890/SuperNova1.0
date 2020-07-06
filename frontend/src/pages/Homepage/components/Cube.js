import React from "react";
import { makeStyles } from "@material-ui/core";

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
    color: "black",
    opacity: 1,
    borderRadius: 20,
  },
}));

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
            front
          </div>
          <div className={classes.cubeFace} id="cube-face-back">
            back
          </div>
          <div className={classes.cubeFace} id="cube-face-right">
            right
          </div>
          <div className={classes.cubeFace} id="cube-face-left">
            left
          </div>
          <div className={classes.cubeFace} id="cube-face-top">
            top
          </div>
          <div className={classes.cubeFace} id="cube-face-bottom">
            bottom
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "800px",
    backgroundColor: "#000647",
  }}
  ></div>; */
