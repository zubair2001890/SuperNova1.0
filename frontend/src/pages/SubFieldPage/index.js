import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../store/slices/page";
import HeaderCarousel from "../../components/HeaderCarousel";
import useStyles from "./exploreSubFieldPageStyles";
import Constellation from "../../components/InteractiveConstellation";

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

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.pageHeader}>
          <div className={classes.mockAppBarLayout} />
          <div className={classes.constellationContainer}>
            <Constellation />
          </div>
          <div className={classes.carouselContainer}>
            <HeaderCarousel className={classes.carousel} content={content} centerMode="true" centerSlidePercentage={50} />
            <Typography variant="h2" className={classes.subFieldTitle}>
              {props.title}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
