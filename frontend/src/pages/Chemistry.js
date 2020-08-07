import React from "react";
import ConstellationOne from "../components/Constellations/ConstellationOne";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";
import paths from "../constants/paths";

function Item(props) {
  return (
    <>
      <ConstellationOne
        subfield={props.item.name2}
        top="calc(60% - 20px)"
        left="calc(10% + 50px)"
        path={paths.exploreSubField}
      />
      <ConstellationOne
        subfield={props.item.name1}
        top="calc(5% + 10px)"
        left="calc(15% + 50px)"
        path={paths.exploreSubField}
      />
      <ConstellationOne
        subfield={props.item.name3}
        top="calc(52%)"
        left="calc(58%)"
        path={paths.exploreSubField}
      />
    </>
  );
}

export default () => {
  const classes = useStyles();

  var items = [
    {
      name1: "CHEMISTRY 1",
      name2: "CHEMISTRY 2",
      name3: "CHEMISTRY 3",
    },
    {
      name1: "CHEMISTRY 4",
      name2: "CHEMISTRY 5",
      name3: "CHEMISTRY 6",
    },
    {
      name1: "CHEMISTRY 7",
      name2: "CHEMISTRY 8",
      name3: "CHEMISTRY 9",
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
      <FieldPage title="CHEMISTRY" content={content} />
    </>
  );
};
