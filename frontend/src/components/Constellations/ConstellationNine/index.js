import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

// Constellation /explore/chemistry [PHYSICAL CHEMISTRY]
const useStyles = makeStyles(() => ({
  constellation: {
    position: "absolute",
    height: 206,
    width: 310,
  },
  constellationImage: {
    position: "absolute",
    width: "80%",
    height: "80%",
    backgroundImage: "url(" + require("../assets/constellation9.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "transform .4s",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
  subfieldName: {
    position: "relative",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "1.5rem",
    letterSpacing: 2.6,
    fontWeight: "bold",
    top: "-21%",
    left: "46%",
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
