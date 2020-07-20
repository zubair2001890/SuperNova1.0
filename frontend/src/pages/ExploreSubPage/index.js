import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../store/slices/page";
import Carousel from "react-material-ui-carousel";
import Constellation from "./components/Constellation";

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
      "url(" + require("./assets/background/background.png") + ")",
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
      <Constellation subfield={props.item.name2} top={40} left={400} />
      <Constellation subfield={props.item.name1} top={100} left={350} />
      <Constellation subfield={props.item.name3} top={-350} left={1200} />
    </>
  );
}

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  var items = [
    {
      title: "SCIENCE",
      name1: "SCIENCE 1",
      name2: "SCIENCE 2",
      name3: "SCIENCE 3",
    },
    {
      title: "MORE SCIENCE",
      name1: "MORE SCIENCE 1",
      name2: "MORE SCIENCE 2",
      name3: "MORE SCIENCE 3",
    },
    {
      title: "OTHER SCIENCE",
      name1: "OTHER SCIENCE 1",
      name2: "OTHER SCIENCE 2",
      name3: "OTHER SCIENCE 3",
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
