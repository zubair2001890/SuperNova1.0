import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInitialHeaderTheme, setScrollHeaderTheme } from "../store/slices/page";
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
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation8}
      />
      <MasterConstellation
        subfield={props.item.name5}
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
  const dispatch = useDispatch();
  let subfieldNames = getSubfields("Computer Science");
  const backgroundImageURL =
    "url(" +
    require("./FieldPage/assets/FP-computer_Sciences_/FP-computer_Sciences_.png") +
    ")";

  const symbolImageURL =
    "url(" +
    require("./FieldPage/assets/FP-computer_Sciences_/Symbol.png") +
    ")";

  var items = [
    {
      name1: subfieldNames[8],
      name7: subfieldNames[0],
      name9: subfieldNames[1],
    },
    {
      name3: subfieldNames[2],
      name2: subfieldNames[5],
      name4: subfieldNames[4],
    },
    {
      name8: subfieldNames[6],
      name5: subfieldNames[3],
      name6: subfieldNames[7],
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

  useEffect(() => {
    dispatch(setInitialHeaderTheme("transparent"));
    dispatch(setScrollHeaderTheme("black"));
  })

  return (
    <>
      <FieldPage
        symbolImag={symbolImageURL}
        title="COMPUTER SCIENCE"
        content={content}
        content1={content1}
        bImageURL={backgroundImageURL}
      />
    </>
  );
};
