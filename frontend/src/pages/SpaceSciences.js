import React from "react";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";
import paths from "../constants/paths";
import MasterConstellation from "../components/Constellations/MasterConstellation";
import {
  constellationStylesDesktop,
  constellationStylesIPad,
} from "../components/Constellations/constellationStyles";

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
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation8}
      />
      <MasterConstellation
        subfield={props.item.name5}
        left="calc(50% - 50px/2 - 0px)"
        top="calc(50% - 154px/2 - 0px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation5}
      />
      <MasterConstellation
        subfield={props.item.name6}
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation6}
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
  const backgroundImageURL =
    "url(" +
    require("./FieldPage/assets/FP-SPace_Sciences/FP-SPace_Sciences.png") +
    ")";

  const symbolImageURL =
    "url(" + require("./FieldPage/assets/FP-SPace_Sciences/Symbol.png") + ")";

  var items = [
    {
      name1: "OBSERVATIONAL ASTRONOMY",
      name7: "THEORETICAL ASTRONOMY",
      name9: "ASTROPHYSICS",
    },
    {
      name3: "PLANETARY SCIENCE",
      name2: "GALACTIC ASTRONOMY",
      name4: "STELLAR ASTRONOMY",
    },
    {
      name8: "EXTRAGALACTIC ASTRONOMY",
      name5: "AERONAUTICS AND ASTRONAUTICS",
      name6: "PHYSICAL COSMOLOGY",
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
        title="SPACE SCIENCES"
        content={content}
        content1={content1}
        bImageURL={backgroundImageURL}
      />
    </>
  );
};
