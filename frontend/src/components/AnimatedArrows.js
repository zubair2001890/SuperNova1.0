import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// We can turn these and more into a props
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
  const containerRef = useRef();

  // copy of the code to fade out this element on scroll translated in javascript
  // TODO: improve it or move it to a parent container (in this case use forwardRef)
  /*
  useEffect(() => {
    window.addEventListener("scroll", () => {
      containerRef.current.style.opacity = 1 - window.pageYOffset / 250;
    });
  }, []);
  */

  return (
    <div ref={containerRef} className={clsx(classes.container, className)}>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
    </div>
  );
};
