import React from "react";
import { InView } from "react-intersection-observer";

// docs for react-intersection-observer
// https://www.npmjs.com/package/react-intersection-observer

export default ({
  root,
  threshold = 1,
  rootMargin = '25% 0px 0px 25%',
  triggerOnce= true,
  render
}) => {

  return (
    <InView
      root={root}
      threshold={threshold}
      rootMargin={rootMargin}
      triggerOnce={triggerOnce}
    >
      {({ inView, ref, entry }) => render({ inView, ref, entry })}
    </InView>
  );
};
