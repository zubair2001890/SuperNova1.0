import React from "react";
import "./carousel-styles.css";
import { Carousel } from "react-responsive-carousel";

export default (props) => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={false}
      useKeyboardArrows={true}
      className={props.className}
    >
        {/* props.content should be an array of divs */}
      {props.content}
    </Carousel>
  );
};
