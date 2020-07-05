import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cubeSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "5000px",
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
    width: 200,
    height: 200,
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
    opacity: 0.5,
    border: "3px solid green",
    borderRadius: 10,
  },
}));

export default function Cube({scrollY}) {
  const classes = useStyles();

  if (scrollY > 4770 && scrollY < 6000) {
    document.getElementById("cube-container").classList.remove("cube-container");
    document.getElementById("cube-container").classList.add("cube-container-fixed");
  }
  else if (document.getElementById("cube-container") && (scrollY <= 4770)) {
    document.getElementById("cube-container").classList.remove("cube-container-fixed");
    document.getElementById("cube-container").classList.add("cube-container");
    document.getElementById("cube-section").style.justifyContent = "flex-start";
  }
  else if (document.getElementById("cube-container") && (scrollY > 6000)) {
    document.getElementById("cube-container").classList.remove("cube-container-fixed");
    document.getElementById("cube-container").classList.add("cube-container");
    document.getElementById("cube-section").style.justifyContent = "flex-end";
  }

  return (
    <div className={classes.cubeSection} id="cube-section">
      <div class="cube-container" id="cube-container">
        <div className={classes.cube}>
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
