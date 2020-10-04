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
  let subfieldNames = getSubfields("Engineering and Technology");
  const backgroundImageURL =
    "url(" + require("./FieldPage/assets/FP-engrtech/FP-engrtech.png") + ")";

  var items = [
    {
      name1: subfieldNames[0],
      name7: subfieldNames[3],
      name9: subfieldNames[6],
    },
    {
      name3: subfieldNames[1],
      name2: subfieldNames[7],
      name4: subfieldNames[5],
    },
    {
      name8: subfieldNames[2],
      name5: subfieldNames[8],
      name6: subfieldNames[4],
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
        title="ENGINEERING AND TECHNOLOGY"
        content={content}
        bImageURL={backgroundImageURL}
      />
    </>
  );
};
