import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  constellation: {
    position: "absolute",
    height: 299,
    width: 167,
  },
  constellationImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage: "url(" + require("../assets/constellation3.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    "&:hover": {
      backgroundImage:
        "url(" + require("../assets/constellation3hoverstate.png") + ")",
      height: "120%",
      width: "120%",
    },
  },
  subfieldName: {
    position: "relative",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 30,
    letterSpacing: 2.6,
    fontWeight: "bold",
    top: "20%",
    left: "110%",
    width: "max-content",
    transition: "text-shadow 0.2s linear",
    "&:hover": {
      textShadow: "0 0 50px white",
    },
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
