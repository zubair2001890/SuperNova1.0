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
      <div>
        {/* div is necessary because both transitions change style.transitions
        property. This issue is avoided by making each transition act on a
        different element */}
        <Fade in={startTransition} timeout={fadeTimeout}>
          <div>{children}</div>
        </Fade>
      </div>
    </Slide>
  );
};
