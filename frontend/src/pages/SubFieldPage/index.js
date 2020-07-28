import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../store/slices/page";
import HeaderCarousel from "../../components/HeaderCarousel";
import useStyles from "./exploreSubFieldPageStyles";
import InteractiveConstellation from "../../components/InteractiveConstellation";
import Consumer, { StarProvider } from "./StarContext";

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    return () => {
      dispatch(setPageDarkTheme(false));
    };
  }, [dispatch]);

  const content = props.content;

  let stars = [1, 0, 0, 0, 0, 0, 0];

  function updateConstellation(currentSlide) {
    for (var i = 0; i < stars.length; i++) {
      if (i === currentSlide) {
        stars[i] = 1;
      } else stars[i] = 0;
    }
  }

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.pageHeader}>
          <div className={classes.mockAppBarLayout} />
          <StarProvider>
            <div className={classes.constellationContainer}>
              <InteractiveConstellation stars={stars} />
            </div>
            <div className={classes.carouselContainer}>
              <Consumer>
                {(ctx) => {
                  return (
                      <HeaderCarousel
                        className={classes.carousel}
                        content={content}
                        centerMode="true"
                        centerSlidePercentage={50}
                        infiniteLoop={false}
                        onChange={ctx.updateConstellation}
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
