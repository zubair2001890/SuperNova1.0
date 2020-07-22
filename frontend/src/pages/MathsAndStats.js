import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../store/slices/page";
import Carousel from "react-material-ui-carousel";
import Constellation from "../components/Constellation";

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
      "url(" + require("../components/Constellation/assets/background/background.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  carouselSlide: {
    position: "relative",
    height: "100%",
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
      <Typography variant="h2" className={props.titleStyle}>
        {props.item.title}
      </Typography>
      <Constellation subfield={props.item.name2} top="calc(50% + 10px)" left="calc(50% - 550px)" />
      <Constellation subfield={props.item.name1} top="calc(50% - 450px)" left="calc(50% - 450px)" />
      <Constellation subfield={props.item.name3} top="calc(50%)" left="calc(50% + 250px)" />
    </>
  );
}

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  var items = [
    {
      title: "MATHEMATICS AND STATICTICS",
      name1: "MATHEMATICS AND STATICTICS 1",
      name2: "MATHEMATICS AND STATICTICS 2",
      name3: "MATHEMATICS AND STATICTICS 3",
    },
    {
      title: "MATHEMATICS AND STATICTICS",
      name1: "MATHEMATICS AND STATICTICS 4",
      name2: "MATHEMATICS AND STATICTICS 5",
      name3: "MATHEMATICS AND STATICTICS 6",
    },
    {
      title: "MATHEMATICS AND STATICTICS",
      name1: "MATHEMATICS AND STATICTICS 7",
      name2: "MATHEMATICS AND STATICTICS 8",
      name3: "MATHEMATICS AND STATICTICS 9",
    },
  ];

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    return () => {
      dispatch(setPageDarkTheme(false));
    };
  }, [dispatch]);

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.pageHeader}>
          <div className={classes.mockAppBarLayout} />
          <div className={classes.carouselContainer}>
            <Carousel
              autoPlay={false}
              animation={"slide"}
              navButtonsAlwaysVisible={true}
              indicators={false}
              className={classes.carousel}
            >
              {items.map((item) => (
                <Item
                  item={item}
                  className={classes.carouselSlide}
                  titleStyle={classes.fieldTitle}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
