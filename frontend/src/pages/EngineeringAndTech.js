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
        top="calc(5% - 10px)"
        left="calc(15% + 50px)"
      />
      <Constellation
        subfield={props.item.name3}
        top="calc(54%)"
        left="calc(64% - 80px)"
      />
    </>
  );
}

export default () => {
  const classes = useStyles();

  var items = [
    {
      name1: "ENGINEERING AND TECHNOLOGY 1",
      name2: "ENGINEERING AND TECHNOLOGY 2",
      name3: "ENGINEERING AND TECHNOLOGY 3",
    },
    {
      name1: "ENGINEERING AND TECHNOLOGY 4",
      name2: "ENGINEERING AND TECHNOLOGY 5",
      name3: "ENGINEERING AND TECHNOLOGY 6",
    },
    {
      name1: "ENGINEERING AND TECHNOLOGY 7",
      name2: "ENGINEERING AND TECHNOLOGY 8",
      name3: "ENGINEERING AND TECHNOLOGY 9",
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
      <FieldPage title="ENGINEERING AND TECHNOLOGY" content={content}/>
    </>
  );
};
