import React from "react";
import { makeStyles } from "@material-ui/core";
import Star from "./components/Star";
import unselectedStar from "./assets/constellationstarunselected/constellationstarunselected.png";
import selectedStar from "./assets/constellationstarselected/constellationstarselected.png";

const useStyles = makeStyles(() => ({
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
}));

const isStarSelected = [
  unselectedStar,
  selectedStar,
];

export default function Constellation(props) {
  const classes = useStyles();

  let stars = props.stars;

  return (
    <div className={classes.constellation} style={{ top: props.top, left: props.left }}>
      <img alt="constellation" src={require("./assets/constellationnostars/constellationnostars.png")} className={classes.constellationImage} />
      <Star top="-1%" left="0%" star={isStarSelected[stars[0]]} />
      <Star top="80%" left="10%" star={isStarSelected[stars[1]]} />
      <Star top="9%" left="26%" star={isStarSelected[stars[2]]} />
      <Star top="69%" left="32%" star={isStarSelected[stars[3]]} />
      <Star top="40%" left="41%" star={isStarSelected[stars[4]]} />
      <Star top="51%" left="70%" star={isStarSelected[stars[5]]} />
      <Star top="40%" left="92%" star={isStarSelected[stars[6]]} />
    </div>
  );
}
