import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  setInitialHeaderTheme,
  setScrollHeaderTheme,
} from "../../store/slices/page";
import HeaderCarousel from "../../components/HeaderCarousel";
import useStyles from "./exploreFieldPageStyles";
import Media from "react-media";

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const backgroundImageURL = props.bImageURL;

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
          <div
            className={classes.carouselContainer}
            style={{ backgroundImage: backgroundImageURL }}
          >
            <Media
              query="(min-width: 1200px)"
              render={() => (
                <HeaderCarousel
                  className={classes.carousel}
                  content={content}
                />
              )}
            />{" "}
            <Media
              query="(min-width: 600px)"
              render={() => (
                <Typography variant="h2" className={classes.fieldTitle}>
                  {props.title}
                </Typography>
              )}
            />
            <Media
              query="(max-width: 600px)"
              render={() => (
                <Typography variant="h5" className={classes.fieldTitle}>
                  {props.title}
                </Typography>
              )}
            />
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <Typography variant="h1" className={classes.pageTitle} align="center">
          {props.title}
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          About Field X:
        </Typography>
        <Typography variant="body1" className={classes.subheadingParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          Featured Field X Projects:
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          Featured Field X Scientists:
        </Typography>
        <Typography variant="body1" className={classes.subheadingParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          Educational Resources for Field X:
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          All subfields:
        </Typography>
      </div>
    </>
  );
};
