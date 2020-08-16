import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default (props) => {
  const useStyles = makeStyles(() => ({
    constellation: {
      position: "absolute",
      ...props.constellationStyles.constellation,
    },
    constellationImage: {
      position: "absolute",
      ...props.constellationStyles.constellationImage,
    },
    subfieldName: props.constellationStyles.subfieldName,
  }));

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