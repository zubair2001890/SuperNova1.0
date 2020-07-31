import React from "react";
import Constellation from "../components/Constellation";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";
import paths from "../constants/paths";

function Item(props) {
  return (
    <>
      <Constellation
        subfield={props.item.name2}
        top="calc(60% - 20px)"
        left="calc(10% + 50px)"
        path={paths.exploreSubField}
      />
      <Constellation
        subfield={props.item.name1}
        top="calc(5% + 10px)"
        left="calc(15% + 50px)"
        path={paths.exploreSubField}
      />
      <Constellation
        subfield={props.item.name3}
        top="calc(50%)"
        left="calc(60%)"
        path={paths.exploreSubField}
      />
    </>
  );
}

export default () => {
  const classes = useStyles();

  var items = [
    {
      name1: "PHYSICS 1",
      name2: "PHYSICS 2",
      name3: "PHYSICS 3",
    },
    {
      name1: "PHYSICS 4",
      name2: "PHYSICS 5",
      name3: "PHYSICS 6",
    },
    {
      name1: "PHYSICS 7",
      name2: "PHYSICS 8",
      name3: "PHYSICS 9",
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
      <FieldPage title="PHYSICS" content={content}/>
    </>
  );
};
