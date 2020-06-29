import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// We can turn these into props
const containerHeight = 60;
const arrowBorderWidth = 5;
const arrowWidth = 7.5;
const arrowColor = "#ff3b00"; // TODO: to be taken from theme.palette!

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
    borderBottom: `${arrowBorderWidth}px solid ${arrowColor}`,
    borderRight: `${arrowBorderWidth}px solid ${arrowColor}`,
    transform: `rotate(45deg) translateX(calc(-50% - ${
      arrowWidth - (arrowWidth * Math.sqrt(2)) / 2
    }px))`,
    animation: `$animatedArrow 2s infinite`,
    "&:nth-of-type(2)": {
      animationDelay: ".2s",
    },
    "&:nth-of-type(3)": {
      animationDelay: ".4s",
    },
  },
  "@keyframes animatedArrow": {
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

export default React.forwardRef(({ className, style = {} }, ref) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, className)} style={style} ref={ref}>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
    </div>
  );
});
