import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// We can turn these into props
const containerHeight = 60;
const arrowBorderWidth = 5;
const arrowWidth = 7.5;
const arrowColor = "#ff3b00"; // TODO: to be taken from theme.palette!

// TODO: fadeIn effect to be added in theme.mixins in relation to other elements of Homepage

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
    transform: "rotate(45deg) translateY(-50%)",
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

/* React.forwardRef is used here to be able to handle imperatively from a parent component the div container inside this component, for fade-in/out effect etc. */
export default React.forwardRef(({ className }, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={clsx(classes.container, className)}>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
    </div>
  );
});
