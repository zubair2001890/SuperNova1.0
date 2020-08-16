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
        top="calc(54%)"
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
      name1: "SOCIAL SCIENCES 1",
      name2: "SOCIAL SCIENCES 2",
      name3: "SOCIAL SCIENCES 3",
    },
    {
      name1: "SOCIAL SCIENCES 4",
      name2: "SOCIAL SCIENCES 5",
      name3: "SOCIAL SCIENCES 6",
    },
    {
      name1: "SOCIAL SCIENCES 7",
      name2: "SOCIAL SCIENCES 8",
      name3: "SOCIAL SCIENCES 9",
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
      <FieldPage title="SOCIAL SCIENCES" content={content}/>
    </>
  );
};
