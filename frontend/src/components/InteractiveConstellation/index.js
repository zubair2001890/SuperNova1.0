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

export default function Constellation(props) {
  const classes = useStyles();

  return (
    <div className={classes.constellation} style={{ top: props.top, left: props.left }}>
      <img alt="constellation" src={require("./assets/constellationnostars/constellationnostars.png")} className={classes.constellationImage} />
      <Star top="-1%" left="0%" star={unselectedStar} />
      <Star top="80%" left="10%" star={unselectedStar} />
      <Star top="9%" left="26%" star={unselectedStar} />
      <Star top="69%" left="32%" star={unselectedStar} />
      <Star top="40%" left="41%" star={unselectedStar} />
      <Star top="51%" left="70%" star={unselectedStar} />
      <Star top="40%" left="92%" star={unselectedStar} />
    </div>
  );
}
