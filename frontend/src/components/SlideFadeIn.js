import React from "react";
import { Fade, Slide } from "@material-ui/core";


export default function SlideFadeIn({ isIn, children, slideTimeout, fadeTimeout, slideDirection}) {
    return (
        <>
        <Slide in={isIn} timeout={slideTimeout} direction={slideDirection}>
          <div>
            <Fade in={isIn} timeout={fadeTimeout}>
              <div>{children}</div>
            </Fade>
          </div>
        </Slide>
      </>
    )
}