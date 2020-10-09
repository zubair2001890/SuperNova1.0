import React from "react";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";
import paths from "../constants/paths";
import MasterConstellation from "../components/Constellations/MasterConstellation";
import {
  constellationStylesDesktop,
  constellationStylesIPad,
} from "../components/Constellations/constellationStyles";
import {getSubfields} from "../helpers/apiHelpers";


// Grouped Slides
function SlideOneGroup(props) {
  return (
    <>
      <MasterConstellation
        subfield={props.item.name1}
        left="calc(50% - 276px/2 + 100px)"
        top="calc(50% - 147px/2 + 10.5px)"
        constellationStyles={constellationStylesDesktop.constellation1}
      />
      <MasterConstellation
        subfield={props.item.name7}
        left="calc(50% - 243px/2 + 180.5px)"
        top="calc(50% - 322px/2 + 106px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation7}
      />
      <MasterConstellation
        subfield={props.item.name9}
        left="calc(50% - 610px/2 + 180px)"
        top="calc(50% - 406px/2 + 50px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation9}
      />
    </>
  );
}

function SlideTwoGroup(props) {
  return (
    <>
      <MasterConstellation
        subfield={props.item.name3}
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation3}
      />
      <MasterConstellation
        subfield={props.item.name2}
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation2}
      />
      <MasterConstellation
        subfield={props.item.name4}
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation4}
      />
    </>
  );
}

//Individual Slides

function SlideOne(props) {
  return (
    <MasterConstellation
      subfield={props.item.name1}
      path={paths.exploreSubField}
      constellationStyles={constellationStylesIPad.constellation1}
    />
  );
}

function SlideTwo(props) {
  return (
    <MasterConstellation
      subfield={props.item.name2}
      path={paths.exploreSubField}
      constellationStyles={constellationStylesIPad.constellation2}
    />
  );
}

function SlideThree(props) {
  return (
    <MasterConstellation
      subfield={props.item.name3}
      path={paths.exploreSubField}
      constellationStyles={constellationStylesIPad.constellation3}
    />
  );
}

function SlideFour(props) {
  return (
    <MasterConstellation
      subfield={props.item.name4}
      path={paths.exploreSubField}
      constellationStyles={constellationStylesIPad.constellation4}
    />
  );
}

function SlideSeven(props) {
  return (
    <MasterConstellation
      subfield={props.item.name7}
      path={paths.exploreSubField}
      constellationStyles={constellationStylesIPad.constellation7}
    />
  );
}

function SlideNine(props) {
  return (
    <MasterConstellation
      subfield={props.item.name9}
      path={paths.exploreSubField}
      constellationStyles={constellationStylesIPad.constellation9}
    />
  );
}

export default () => {
  const classes = useStyles();
  let subfieldNames = getSubfields("Biology");
  const backgroundImageURL =
    "url(" + require("./FieldPage/assets/FP-biology_/FP-biology_.png") + ")";
  const symbolImageURL =
    "url(" + require("./FieldPage/assets/FP-biology_/Symbol.png") + ")";

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
      {<SlideOneGroup item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideTwoGroup item={items[1]} titleStyle={classes.fieldTitle} />}
    </div>,
  ];

  const content1 = [
    <div className={classes.carouselSlide}>
      {<SlideOne item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideTwo item={items[1]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideThree item={items[1]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideFour item={items[1]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideSeven item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideNine item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
  ];

  return (
    <>
      <FieldPage
        symbolImag={symbolImageURL}
        title="BIOLOGY"
        content={content}
        content1={content1}
        bImageURL={backgroundImageURL}
      />
    </>
  );
};
