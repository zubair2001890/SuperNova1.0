import React from "react";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";
import paths from "../constants/paths";
import ConstellationOne from "../components/Constellations/ConstellationOne";
import ConstellationSeven from "../components/Constellations/ConstellationSeven";
import ConstellationNine from "../components/Constellations/ConstellationNine";
import ConstellationThree from "../components/Constellations/ConstellationThree";

function SlideOne(props) {
  console.log(props.item);
  return (
    <>
      <ConstellationOne
        subfield={props.item.name1}
        left="calc(50% - 276px/2 - 300px)"
        top="calc(50% - 147px/2 - 144.5px)"
        path={paths.exploreSubField}
      />
      <ConstellationSeven
        subfield={props.item.name7}
        left="calc(50% - 243px/2 - 431.5px)"
        top="calc(50% - 322px/2 + 196px)"
        path={paths.exploreSubField}
      />
      <ConstellationNine
        subfield={props.item.name9}
        left="calc(50% - 310px/2 + 300px)"
        top="calc(50% - 206px/2 + 211px)"
        path={paths.exploreSubField}
      />
    </>
  );
}

function SlideTwo(props) {
  return (
    <>
      <ConstellationThree
        subfield={props.item.name3}
        left="calc(50% - 167px/2 - 470.5px)"
        top="calc(50% - 299px/2 - 30.5px)"
        path={paths.exploreSubField}
      />
    </>
  );
}

export default () => {
  const classes = useStyles();
  const backgroundImageURL =
    "url(" +
    require("./FieldPage/assets/FP-chemistry_/FP-chemistry_.png") +
    ")";

  var items = [
    {
      name1: "ORGANIC CHEMISTRY",
      name7: "INORGANIC CHEMISTRY",
      name9: "PHYSICAL CHEMISTRY",
    },
    {
      name3: "ANALYTICAL CHEMISTRY",
    },
  ];

  const content = [
    <div className={classes.carouselSlide}>
      {<SlideOne item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideTwo item={items[1]} titleStyle={classes.fieldTitle} />}
    </div>,
  ];

  return (
    <>
      <FieldPage
        title="CHEMISTRY"
        content={content}
        bImageURL={backgroundImageURL}
      />
    </>
  );
};
