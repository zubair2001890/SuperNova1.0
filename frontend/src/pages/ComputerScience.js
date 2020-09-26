import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInitialHeaderTheme, setScrollHeaderTheme } from "../store/slices/page";
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
        left="calc(50% - 276px/2 - 360px)"
        top="calc(50% - 147px/2 - 254.5px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation1}
      />
      <MasterConstellation
        subfield={props.item.name7}
        left="calc(50% - 243px/2 - 481.5px)"
        top="calc(50% - 322px/2 + 226px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation7}
      />
      <MasterConstellation
        subfield={props.item.name9}
        left="calc(50% - 310px/2 + 480px)"
        top="calc(50% - 206px/2 + 241px)"
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
        left="calc(50% - 167px/2 - 570.5px)"
        top="calc(50% - 299px/2 - 55.5px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation3}
      />
      <MasterConstellation
        subfield={props.item.name2}
        left="calc(50% - 237px/2 + 19.5px)"
        top="calc(50% - 181px/2 + 281.5px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation2}
      />
      <MasterConstellation
        subfield={props.item.name4}
        left="calc(50% - 275px/2 + 459.5px)"
        top="calc(50% - 187px/2 - 126.5px)"
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
        left="calc(50% - 222px/2 - 608px)"
        top="calc(50% - 199px/2 - 66.5px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation8}
      />
      <MasterConstellation
        subfield={props.item.name5}
        left="calc(50% - 196px/2 + 42px)"
        top="calc(50% - 254px/2 + 298px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation5}
      />
      <MasterConstellation
        subfield={props.item.name6}
        left="calc(50% - 298px/2 + 403px)"
        top="calc(50% - 195px/2 - 165.5px)"
        path={paths.exploreSubField}
        constellationStyles={constellationStylesDesktop.constellation6}
      />
    </>
  );
}

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const backgroundImageURL =
    "url(" +
    require("./FieldPage/assets/FP-computer_Sciences_/FP-computer_Sciences_.png") +
    ")";

  var items = [
    {
      name1: "THEORY OF COMPUTATION",
      name7: "ALGORITHMS AND DATA STRUCTURES",
      name9: "AI, MACHINE LEARNING AND ROBOTICS",
    },
    {
      name3: "COMMUNICATION AND SECURITY",
      name2: "COMPUTER GRAPHICS",
      name4: "COMPUTER ARCHITECTURE",
    },
    {
      name8: "CONCURRENT, PARALLEL AND DISTRIBUTED SYSTEMS",
      name5: "COMPUTATIONAL SCIENCES",
      name6: "SOFTWARE ENGINEERING",
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

  useEffect(() => {
    dispatch(setInitialHeaderTheme("transparent"));
    dispatch(setScrollHeaderTheme("black"));
  })

  return (
    <>
      <FieldPage
        title="COMPUTER SCIENCE"
        content={content}
        bImageURL={backgroundImageURL}
      />
    </>
  );
};
