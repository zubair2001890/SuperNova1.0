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
        {/* div is necessary because both transitions change style.transitions
        property. This issue is avoided by making each transition act on a
        different element */}
        <Fade in={transitionIn} timeout={fadeTimeout}>
          <div>{children}</div>
        </Fade>
      </div>
    </Slide>
  );
}
