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
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation1}
      />
      <MasterConstellation
        subfield={props.item.name7}
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation7}
      />
      <MasterConstellation
        subfield={props.item.name9}
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

function SlideThreeGroup(props) {
  return (
    <>
      <MasterConstellation
        subfield={props.item.name8}
        left="calc(50% - 180px/2 - 0px)"
        top="calc(50% - 250px/2 - 0px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation8}
      />
      <MasterConstellation
        subfield={props.item.name5}
        left="calc(50% - 0px/2 - 0px)"
        top="calc(50% - 100px/2 - 0px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation5}
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

function SlideFive(props) {
  return (
    <MasterConstellation
      subfield={props.item.name5}
      path={paths.exploreSubField}
      constellationStyles={constellationStylesIPad.constellation5}
    />
  );
}

function SlideSix(props) {
  return (
    <MasterConstellation
      subfield={props.item.name6}
      path={paths.exploreSubField}
      constellationStyles={constellationStylesIPad.constellation6}
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

function SlideEight(props) {
  return (
    <MasterConstellation
      subfield={props.item.name8}
      path={paths.exploreSubField}
      constellationStyles={constellationStylesIPad.constellation8}
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
  let subfieldNames = getSubfields("Earth Sciences");
  const backgroundImageURL =
    "url(" +
    require("./FieldPage/assets/FP-earth_Sciences_/FP-earth_Sciences_.png") +
    ")";
  const symbolImageURL =
    "url(" + require("./FieldPage/assets/FP-earth_Sciences_/Symbol.png") + ")";

  var items = [
    {
      name1: subfieldNames[2],
      name7: subfieldNames[6],
      name9: subfieldNames[3],
    },
    {
      name3: subfieldNames[1],
      name2: subfieldNames[7],
      name4: subfieldNames[5],
    },
    {
      name8: subfieldNames[4],
      name5: subfieldNames[0],
    },
  ];

  const content = [
    <div className={classes.carouselSlide}>
      {<SlideOneGroup item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideTwoGroup item={items[1]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideThreeGroup item={items[2]} titleStyle={classes.fieldTitle} />}
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
      {<SlideFive item={items[2]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideSix item={items[2]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideSeven item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideEight item={items[2]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideNine item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
  ];

  return (
    <>
      <FieldPage
        symbolImag={symbolImageURL}
        title="EARTH SCIENCES"
        content={content}
        content1={content1}
        bImageURL={backgroundImageURL}
      />
    </>
  );
};
