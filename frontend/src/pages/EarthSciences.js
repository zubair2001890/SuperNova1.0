import React from "react";
import Constellation from "../components/Constellation";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";

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
        left="calc(60% + 10px)"
      />
    </>
  );
}

export default () => {
  const classes = useStyles();

  var items = [
    {
      name1: "EARTH SCIENCES 1",
      name2: "EARTH SCIENCES 2",
      name3: "EARTH SCIENCES 3",
    },
    {
      name1: "EARTH SCIENCES 4",
      name2: "EARTH SCIENCES 5",
      name3: "EARTH SCIENCES 6",
    },
    {
      name1: "EARTH SCIENCES 7",
      name2: "EARTH SCIENCES 8",
      name3: "EARTH SCIENCES 9",
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
      <FieldPage title="EARTH SCIENCES" content={content}/>
    </>
  );
};
