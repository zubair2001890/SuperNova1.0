import React from "react";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";
import paths from "../constants/paths";
import MasterConstellation from "../components/Constellations/MasterConstellation";
import { constellationStylesDesktop } from "../components/Constellations/constellationStyles";

function SlideOne(props) {
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
        left="20%"
        top="-49%"
        width="382px"
      />
    </>
  );
}

function SlideTwo(props) {
  return (
    <>
      <MasterConstellation
        subfield={props.item.name3}
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation3}
        left="33%"
        top="-24%"
        width="464px"
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

function SlideThree(props) {
  return (
    <>
      <MasterConstellation
        subfield={props.item.name8}
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation8}
        left="30%"
        top="-50%"
        width="464px"
      />
    </>
  );
}

export default () => {
  const classes = useStyles();
  const backgroundImageURL =
    "url(" + require("./FieldPage/assets/FP-physics/FP-physics.png") + ")";

  var items = [
    {
      name1: "MECHANICS",
      name7: "THERMODYNAMICS AND STATISTICAL MECHANICS",
      name9: "ELECTROMAGNETISM AND PHOTONICS",
    },
    {
      name3: "QUANTUM MECHANICS, ATOMICS PHYSICS AND MOLECULAR PHYSICS",
      name2: "CONDENSED MATTER PHYSICS",
      name4: "OPTICS",
    },
    {
      name8: "HIGH-ENERGY PARTICLE PHYSICS AND NUCLEAR PHYSICS",
    },
  ];

  const content = [
    <div className={classes.carouselSlide}>
      {<SlideOne item={items[0]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideTwo item={items[1]} titleStyle={classes.fieldTitle} />}
    </div>,
    <div className={classes.carouselSlide}>
      {<SlideThree item={items[2]} titleStyle={classes.fieldTitle} />}
    </div>,
  ];

  return (
    <>
      <FieldPage
        title="PHYSICS"
        content={content}
        bImageURL={backgroundImageURL}
      />
    </>
  );
};
