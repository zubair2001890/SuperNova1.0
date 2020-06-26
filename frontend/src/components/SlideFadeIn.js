import React from "react";
import { Fade, Slide } from "@material-ui/core";


export default function SlideFadeIn({children, slideTimeout, fadeTimeout, slideDirection}) {
    return (
        <>
        <Slide in={true} timeout={slideTimeout} direction={slideDirection}>
          <div>
            <Fade in={true} timeout={fadeTimeout}>
              <div>{children}</div>
            </Fade>
          </div>
        </Slide>
      </>
    )
}