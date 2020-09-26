import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  setInitialHeaderTheme,
  setScrollHeaderTheme,
} from "../../store/slices/page";
import HeaderCarousel from "../../components/HeaderCarousel";
import useStyles from "./exploreSubFieldPageStyles";
import InteractiveConstellation from "../../components/InteractiveConstellation";
import Consumer, { StarProvider } from "./StarContext";

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialHeaderTheme("transparent"));
    dispatch(setScrollHeaderTheme("black"));
  }, [dispatch]);

  const content = props.content;

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.pageHeader}>
          <div className={classes.mockAppBarLayout} />
          <StarProvider>
            <div className={classes.constellationContainer}>
              <InteractiveConstellation />
            </div>
            <div className={classes.carouselContainer}>
              <Consumer>
                {(ctx) => {
                  return (
                    <HeaderCarousel
                      className={classes.carousel}
                      content={content}
                      centerMode={true}
                      centerSlidePercentage={62}
                      infiniteLoop={true}
                      onChange={ctx.updateConstellation}
                      selectedItem={ctx.currentSlide}
                      onClickItem={ctx.updateConstellation}
                    />
                  );
                }}
              </Consumer>

              <Typography variant="h2" className={classes.subFieldTitle}>
                {props.title}
              </Typography>
            </div>
          </StarProvider>
        </div>
      </div>
    </>
  );
};
