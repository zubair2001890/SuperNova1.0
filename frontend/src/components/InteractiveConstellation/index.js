import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  constellation: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  constellationImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "auto",
  },
  star1: {
    position: "absolute",
    top: "-1%",
    left: "0%",
    height: "20%",
    height: "20%",
  },
  star2: {
    position: "absolute",
    top: "80%",
    left: "10%",
    height: "20%",
    height: "20%",
  },
  star3: {
    position: "absolute",
    top: "9%",
    left: "26%",
    height: "20%",
    height: "20%",
  },
  star4: {
    position: "absolute",
    top: "69%",
    left: "32%",
    height: "20%",
    height: "20%",
  },
  star5: {
    position: "absolute",
    top: "40%",
    left: "41%",
    height: "20%",
    height: "20%",
  },
  star6: {
    position: "absolute",
    top: "51%",
    left: "70%",
    height: "20%",
    height: "20%",
  },
  star7: {
    position: "absolute",
    top: "40%",
    left: "92%",
    height: "20%",
    height: "20%",
  },
}));

export default function Constellation(props) {
  const classes = useStyles();

  return (
    <div className={classes.constellation} style={{ top: props.top, left: props.left }}>
      <img alt="constellation" src={require("./assets/constellationnostars/constellationnostars.png")} className={classes.constellationImage} />
      <img alt="star 1" src={require("./assets/constellationstarunselected/constellationstarunselected.png")} className={classes.star1} />
      <img alt="star 2" src={require("./assets/constellationstarunselected/constellationstarunselected.png")} className={classes.star2} />
      <img alt="star 3" src={require("./assets/constellationstarunselected/constellationstarunselected.png")} className={classes.star3} />
      <img alt="star 4" src={require("./assets/constellationstarunselected/constellationstarunselected.png")} className={classes.star4} />
      <img alt="star 5" src={require("./assets/constellationstarunselected/constellationstarunselected.png")} className={classes.star5} />
      <img alt="star 6" src={require("./assets/constellationstarunselected/constellationstarunselected.png")} className={classes.star6} />
      <img alt="star 7" src={require("./assets/constellationstarunselected/constellationstarunselected.png")} className={classes.star7} />
    </div>
  );
}
