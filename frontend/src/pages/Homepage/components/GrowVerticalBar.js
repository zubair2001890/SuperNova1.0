import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "inline-block",
      height: 60,
      width: 50,
      position: "relative",
    },
    verticalBar: {
      position: "absolute",
      width: 4,
      backgroundColor: theme.palette.common.red,
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      height: "100%",
      transition: "height", // TODO: add proper transition ?
    },
  };
});

export default ({
  className,
  scrollY = 0,
  maxHeight = Infinity,
  style = {},
}) => {
  const classes = useStyles();
  const verticalBarRef = useRef(null);
  const initialHeight = useRef(null);

  useEffect(() => {
    initialHeight.current = verticalBarRef.current.clientHeight;
  }, []);

  useEffect(() => {
    const setVerticalBarHeight = () => {
      verticalBarRef.current.style.height =
        Math.min(maxHeight, initialHeight.current + scrollY) + "px";
    };
    setVerticalBarHeight();
  }, [scrollY, maxHeight]);

  return (
    <span className={clsx(classes.container, className)} style={style}>
      <span className={classes.verticalBar} ref={verticalBarRef}></span>
    </span>
  );
};
