import React, { useState, useEffect } from "react";
import { Fade, Slide } from "@material-ui/core";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default ({
  transitionIn = false,
  children,
  slideTimeout = 1000,
  fadeTimeout = 1000,
  slideDirection,
  delay = 0,
}) => {
  const [startTransition, setStartTransition] = useState(transitionIn);

  useEffect(() => {
    if (delay) {
      (async () => {
        await sleep(delay);
        setStartTransition(true);
      })();
    }
  }, [delay]);

  useEffect(() => {
    setStartTransition(transitionIn);
  }, [transitionIn]);

  return (
    <Slide
      in={startTransition}
      timeout={slideTimeout}
      direction={slideDirection}
    >
      <Fade in={startTransition} timeout={fadeTimeout}>
        {children}
      </Fade>
    </Slide>
  );
};
