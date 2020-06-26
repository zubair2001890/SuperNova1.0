import React from "react";
import { Fade, Slide } from "@material-ui/core";


export default function SlideFadeIn({children}) {
    return (
        <>
        <Slide in={true} timeout={1000} direction="up">
          <div>
            <Fade in={true} timeout={1500}>
              <div>{children}</div>
            </Fade>
          </div>
        </Slide>
      </>
    )
}
