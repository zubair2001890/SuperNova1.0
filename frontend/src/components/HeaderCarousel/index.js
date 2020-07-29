import React from "react";
import "./carousel-styles.css";
import { Carousel } from "react-responsive-carousel";

export default (props) => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={props.infiniteLoop === false ? false : true}
      showThumbs={false}
      autoPlay={false}
      useKeyboardArrows={true}
      className={props.className}
      centerMode={props.centerMode}
      centerSlidePercentage={props.centerSlidePercentage}
      onChange={props.onChange}
      selectedItem={props.selectedItem}
    >
        {/* props.content should be an array of divs, where each div will be a new slide */}
      {props.content}
    </Carousel>
  );
};
