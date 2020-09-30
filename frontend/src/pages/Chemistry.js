import React from "react";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";
import paths from "../constants/paths";
import MasterConstellation from "../components/Constellations/MasterConstellation";
import { constellationStylesDesktop } from "../components/Constellations/constellationStyles";
import {getSubfields} from "../helpers/apiHelpers";

function SlideOne(props) {
  return (
    <>
      <MasterConstellation
        subfield={props.item.name1}
        left="calc(50% - 276px/2 - 300px)"
        top="calc(50% - 147px/2 - 144.5px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation1}
      />
      <MasterConstellation
        subfield={props.item.name7}
        left="calc(50% - 243px/2 - 431.5px)"
        top="calc(50% - 322px/2 + 196px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation7}
      />
      <MasterConstellation
        subfield={props.item.name9}
        left="calc(50% - 310px/2 + 300px)"
        top="calc(50% - 206px/2 + 211px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation9}
      />
    </>
  );
}

function SlideTwo(props) {
  return (
    <>
      <MasterConstellation
        subfield={props.item.name3}
        left="calc(50% - 167px/2 - 470.5px)"
        top="calc(50% - 299px/2 - 30.5px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation3}
      />
    </>
  );
}

export default () => {
  let subfieldNames = getSubfields("Chemistry");
  const classes = useStyles();
  const backgroundImageURL =
    "url(" +
    require("./FieldPage/assets/FP-chemistry_/FP-chemistry_.png") +
    ")";

  var items = [
    {
      name1: subfieldNames[2],
      name7: subfieldNames[1],
      name9: subfieldNames[3],
    },
    {
      name3: subfieldNames[0],
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
