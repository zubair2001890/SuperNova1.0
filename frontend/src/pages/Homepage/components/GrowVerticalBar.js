import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      position: "relative",
      height: 0,
    },
    verticalBar: {
      position: "absolute",
      width: 4,
      backgroundColor: "#ff3b00", // TODO: import red from theme.palette
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      minHeight: (props) => props.initialHeight,
      transition: "height", // TODO: add proper transition ?
    },
  };
});

export default ({
  className,
  initialHeight = 50,
  scrollYGrowStart = 0,
  scrollYGrowEnd = Infinity,
}) => {
  const classes = useStyles({ initialHeight });
  const verticalBarRef = useRef(null);

  useEffect(() => {
    const setVerticalBarHeight = () => {
      if (window.scrollY < scrollYGrowEnd) {
        verticalBarRef.current.style.height =
          Math.max(initialHeight, window.scrollY - scrollYGrowStart) + "px";
      }
    };
    setVerticalBarHeight();
    window.addEventListener("scroll", setVerticalBarHeight);
    return () => {
      window.removeEventListener("scroll", setVerticalBarHeight);
    };
  }, [initialHeight, scrollYGrowStart, scrollYGrowEnd]);

  return (
    <div className={clsx(classes.container, className)}>
      <span className={classes.verticalBar} ref={verticalBarRef}></span>
    </div>
  );
};
