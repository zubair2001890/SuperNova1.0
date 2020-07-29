import React from "react";
import Constellation from "../components/Constellation";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";
import { Link as RouterLink } from "react-router-dom";
import paths from "../constants/paths";

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
        path={paths.biology1}
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
      <FieldPage title="BIOLOGY" content={content} />
    </>
  );
};
