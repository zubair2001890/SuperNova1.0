/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import AnimatedArrows from "../components/AnimatedArrows";

export default function Links() {
  const animatedArrowsRef = useRef(null);

  // fade out AnimatedArrow on scroll-down;impor
  useEffect(() => {
    const animatedArrows = animatedArrowsRef.current;
    const animatedArrowsInitialRectTop = animatedArrows.getBoundingClientRect()
      .top;
    const fadeOutAnimatedArrows = () => {
      const animatedArrowsRectTop = animatedArrows.getBoundingClientRect().top;
      const animatedArrowsOpacity =
        Math.round(
          (animatedArrowsRectTop / animatedArrowsInitialRectTop) * 10
        ) / 10;
      animatedArrows.style.opacity = animatedArrowsOpacity;
    };
    window.addEventListener("scroll", fadeOutAnimatedArrows);
    return () => {
      window.removeEventListener("scroll", fadeOutAnimatedArrows);
    };
  }, []);

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Homepage
      </Typography>
      <AnimatedArrows ref={animatedArrowsRef} />
    </>
  );
}
