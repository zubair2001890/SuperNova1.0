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
        left="calc(50% - 276px/2 - 240px)"
        top="calc(50% - 147px/2 - 174.5px)"
        constellationStyles={constellationStylesDesktop.constellation1}
      />
      <MasterConstellation
        subfield={props.item.name7}
        left="calc(50% - 243px/2 - 401.5px)"
        top="calc(50% - 322px/2 + 206px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation7}
      />
      <MasterConstellation
        subfield={props.item.name9}
        left="calc(50% - 310px/2 + 390px)"
        top="calc(50% - 206px/2 + 251px)"
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
        left="calc(50% - 167px/2 - 410.5px)"
        top="calc(50% - 299px/2 - 0px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation3}
      />
      <MasterConstellation
        subfield={props.item.name2}
        left="calc(50% - 237px/2 + 19.5px)"
        top="calc(50% - 181px/2 + 251.5px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation2}
      />
      <MasterConstellation
        subfield={props.item.name4}
        left="calc(50% - 275px/2 + 350px)"
        top="calc(50% - 187px/2 - 100px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation4}
      />
    </>
  );
}

export default () => {
  const classes = useStyles();
  let subfieldNames = getSubfields("Biology");
  const backgroundImageURL =
    "url(" + require("./FieldPage/assets/FP-biology_/FP-biology_.png") + ")";

  var items = [
    {
      name1: subfieldNames[5],
      name7: subfieldNames[4],
      name9: subfieldNames[3],
    },
    {
      name3: subfieldNames[0],
      name2: subfieldNames[1],
      name4: subfieldNames[2],
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
        title="BIOLOGY"
        content={content}
        bImageURL={backgroundImageURL}
      />
    </>
  );
};
