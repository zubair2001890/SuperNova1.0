import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../store/slices/page";
import Constellation from "../components/Constellation";
import HeaderCarousel from "../components/HeaderCarousel";
import useStyles from "./exploreFieldPageStyles";

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
        top="calc(50%)"
        left="calc(60%)"
      />
    </>
  );
}

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  var items = [
    {
      name1: "BIOLOGY 1",
      name2: "BIOLOGY 2",
      name3: "BIOLOGY 3",
    },
    {
      name1: "BIOLOGY 4",
      name2: "BIOLOGY 5",
      name3: "BIOLOGY 6",
    },
    {
      name1: "BIOLOGY 7",
      name2: "BIOLOGY 8",
      name3: "BIOLOGY 9",
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
            <HeaderCarousel className={classes.carousel} content={content} />
            <Typography variant="h2" className={classes.fieldTitle}>
              BIOLOGY
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
