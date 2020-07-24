import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../store/slices/page";
import Constellation from "../components/Constellation";
import HeaderCarousel from "../components/HeaderCarousel";

const useStyles = makeStyles((theme) => ({
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  pageHeader: {
    height: "100vh",
    width: "100%",
  },
  pageContainer: {
    position: "relative",
    margin: 0,
  },
  carouselContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    backgroundColor: "rgb(240, 160, 80)",
  },
  carousel: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage:
      "url(" +
      require("../components/Constellation/assets/background/background.png") +
      ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  carouselSlide: {
    position: "relative",
    height: "100vh",
    top: 0,
  },
  fieldTitle: {
    position: "absolute",
    color: "white",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

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
      name1: "MATHEMATICS AND STATISTICS 1",
      name2: "MATHEMATICS AND STATISTICS 2",
      name3: "MATHEMATICS AND STATISTICS 3",
    },
    {
      name1: "MATHEMATICS AND STATISTICS 4",
      name2: "MATHEMATICS AND STATISTICS 5",
      name3: "MATHEMATICS AND STATISTICS 6",
    },
    {
      name1: "MATHEMATICS AND STATISTICS 7",
      name2: "MATHEMATICS AND STATISTICS 8",
      name3: "MATHEMATICS AND STATISTICS 9",
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
              MATHEMATICS AND STATISTICS
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
