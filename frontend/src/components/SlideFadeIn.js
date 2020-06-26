import React from "react";
import { Fade, Slide } from "@material-ui/core";

export default function SlideFadeIn({
  transitionIn,
  children,
  slideTimeout = 0,
  fadeTimeout = 0,
  slideDirection,
}) {
  return (
    <Slide in={transitionIn} timeout={slideTimeout} direction={slideDirection}>
      <div>
        <Fade in={transitionIn} timeout={fadeTimeout}>
          <div>{children}</div>
        </Fade>
      </div>
    </Slide>
  );
}
