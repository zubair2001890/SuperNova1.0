import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  constellation: {
    position: "absolute",
    height: 400,
    width: 240,
  },
  constellationImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage:
      "url(" + require("./assets/constellation/constellation.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  subfieldName: {
    position: "relative",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 30,
    letterSpacing: 2.6,
    fontWeight: "bold",
    top: 200,
    left: 200,
    width: 300,
  },
}));

export default function Constellation(props) {
  const classes = useStyles();

  return (
    <div className={classes.constellation} style={{ top: props.top, left: props.left }}>
      <div className={classes.constellationImage} />
      <div className={classes.subfieldName}>{props.subfield}</div>
    </div>
  );
}
