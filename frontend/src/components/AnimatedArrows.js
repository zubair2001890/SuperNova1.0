import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// We can turn these and more into a props
const containerHeight = 60;
const arrowBorderWidth = 5;
const arrowWidth = 7.5;

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: containerHeight,
  },
  arrow: {
    position: "absolute",
    left: "50%",
    width: arrowWidth,
    height: arrowWidth,
    borderBottom: `${arrowBorderWidth}px solid #ff3b00`,
    borderRight: `${arrowBorderWidth}px solid #ff3b00`,
    transform: "rotate(45deg) translateY(-50%)",
    animation: `$arrowanimate 2s infinite`,
    "&:nth-of-type(2)": {
      animationDelay: ".2s",
    },
    "&:nth-of-type(3)": {
      animationDelay: ".4s",
    },
  },
  "@keyframes arrowanimate": {
    "0%": {
      opacity: "0",
      top: "0",
    },
    "50%": {
      opacity: "1",
    },
    "100%": {
      opacity: "0",
      top: containerHeight,
    },
  },
}));

export default ({ className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, className)}>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
    </div>
  );
};
