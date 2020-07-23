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
        top="calc(55%)"
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
      name1: "MATHEMATICS AND STATICTICS 1",
      name2: "MATHEMATICS AND STATICTICS 2",
      name3: "MATHEMATICS AND STATICTICS 3",
    },
    {
      name1: "MATHEMATICS AND STATICTICS 4",
      name2: "MATHEMATICS AND STATICTICS 5",
      name3: "MATHEMATICS AND STATICTICS 6",
    },
    {
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
            <Typography variant="h2" className={classes.fieldTitle}>
              MATHEMATICS AND STATISTICS
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
