import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  constellation: {
    position: "absolute",
    height: 147,
    width: 276,
  },
  constellationImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage: "url(" + require("../assets/constellation1.png") + ")",
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

export default (props) => {
  const classes = useStyles();

  return (
    <RouterLink to={{ pathname: props.path, state: { title: props.subfield } }}>
      <div
        className={classes.constellation}
        style={{ top: props.top, left: props.left }}
      >
        <div className={classes.constellationImage} />
        <div className={classes.subfieldName}>{props.subfield}</div>
      </div>
    </RouterLink>
  );
};
