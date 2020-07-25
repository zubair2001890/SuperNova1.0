import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../store/slices/page";
import Constellation from "../components/Constellation";
import HeaderCarousel from "../components/HeaderCarousel";
import useStyles from "./exploreFieldPageStyles";
import Media from "react-media";

function Item(props) {
  return (
    <>
      <Constellation
        subfield={props.item.name2}
        top="calc(60% - 20px)"
        left="calc(10% + 50px)"
      />
      <Constellation
        subfield={props.item.name1}
        top="calc(5% + 10px)"
        left="calc(15% + 50px)"
      />
      <Constellation
        subfield={props.item.name3}
        top="calc(52%)"
        left="calc(58%)"
      />
    </>
  );
}

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  var items = [
    {
      name1: "CHEMISTRY 1",
      name2: "CHEMISTRY 2",
      name3: "CHEMISTRY 3",
    },
    {
      name1: "CHEMISTRY 4",
      name2: "CHEMISTRY 5",
      name3: "CHEMISTRY 6",
    },
    {
      name1: "CHEMISTRY 7",
      name2: "CHEMISTRY 8",
      name3: "CHEMISTRY 9",
    },
  ];

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    return () => {
      dispatch(setPageDarkTheme(false));
    };
  }, [dispatch]);

  const content = [
    <div className={classes.carouselSlide}>
      {<Item item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<Item item={items[1]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<Item item={items[2]} titleStyle={classes.fieldTitle} />}
    </div>,
  ];

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.pageHeader}>
          <div className={classes.mockAppBarLayout} />
          <div className={classes.carouselContainer}>
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
                  CHEMISTRY
                </Typography>
              )}
            />
            <Media
              query="(max-width: 600px)"
              render={() => (
                <Typography variant="h5" className={classes.fieldTitle}>
                  CHEMISTRY
                </Typography>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};
