import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../store/slices/page";
// import Carousel from "react-material-ui-carousel";
import Constellation from "../components/Constellation";
import "./carousel-styles.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.pageHeader}>
          <div className={classes.mockAppBarLayout} />
          {/* <div className={classes.carouselContainer}>
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
              BIOLOGY
            </Typography>
          </div> */}
          <div className={classes.carouselContainer}>
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              showThumbs={false}
              autoPlay={false}
              useKeyboardArrows={true}
              className={classes.carousel}
            >
              <div className={classes.carouselSlide}>
                {
                  <Item
                    item={items[0]}
                    className={classes.carouselSlide}
                    titleStyle={classes.fieldTitle}
                  />
                }
              </div>
              <div>
              {
                  <Item
                    item={items[1]}
                    className={classes.carouselSlide}
                    titleStyle={classes.fieldTitle}
                  />
                }
              </div>
              <div>
              {
                  <Item
                    item={items[2]}
                    className={classes.carouselSlide}
                    titleStyle={classes.fieldTitle}
                  />
                }
              </div>
            </Carousel>
            <Typography variant="h2" className={classes.fieldTitle}>
              BIOLOGY
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
