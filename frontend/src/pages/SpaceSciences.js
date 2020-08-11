import React from "react";
import useStyles from "./FieldPage/exploreFieldPageStyles";
import FieldPage from "./FieldPage";
import paths from "../constants/paths";
import ConstellationOne from "../components/Constellations/ConstellationOne";
import ConstellationSeven from "../components/Constellations/ConstellationSeven";
import ConstellationNine from "../components/Constellations/ConstellationNine";
import ConstellationThree from "../components/Constellations/ConstellationThree";
import ConstellationTwo from "../components/Constellations/ConstellationTwo";
import ConstellationFour from "../components/Constellations/ConstellationFour";
import ConstellationEight from "../components/Constellations/ConstellationEight";
import ConstellationFive from "../components/Constellations/ConstellationFive";
import ConstellationSix from "../components/Constellations/ConstellationSix";

function SlideOne(props) {
  return (
    <>
      <ConstellationOne
        subfield={props.item.name1}
        left="calc(50% - 276px/2 - 360px)"
        top="calc(50% - 147px/2 - 254.5px)"
        path={paths.exploreSubField}
      />
      <ConstellationSeven
        subfield={props.item.name7}
        left="calc(50% - 243px/2 - 481.5px)"
        top="calc(50% - 322px/2 + 226px)"
        path={paths.exploreSubField}
      />
      <ConstellationNine
        subfield={props.item.name9}
        left="calc(50% - 310px/2 + 480px)"
        top="calc(50% - 206px/2 + 241px)"
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
        left="calc(50% - 167px/2 - 570.5px)"
        top="calc(50% - 299px/2 - 55.5px)"
        path={paths.exploreSubField}
      />
      <ConstellationTwo
        subfield={props.item.name2}
        left="calc(50% - 237px/2 + 19.5px)"
        top="calc(50% - 181px/2 + 281.5px)"
        path={paths.exploreSubField}
      />
      <ConstellationFour
        subfield={props.item.name4}
        left="calc(50% - 275px/2 + 459.5px)"
        top="calc(50% - 187px/2 - 126.5px)"
        path={paths.exploreSubField}
      />
    </>
  );
}

function SlideThree(props) {
  return (
    <>
      <ConstellationEight
        subfield={props.item.name8}
        left="calc(50% - 222px/2 - 608px)"
        top="calc(50% - 199px/2 - 66.5px)"
        path={paths.exploreSubField}
      />
      <ConstellationFive
        subfield={props.item.name5}
        left="calc(50% - 196px/2 + 42px)"
        top="calc(50% - 254px/2 + 298px)"
        path={paths.exploreSubField}
      />
      <ConstellationSix
        subfield={props.item.name6}
        left="calc(50% - 298px/2 + 403px)"
        top="calc(50% - 195px/2 - 165.5px)"
        path={paths.exploreSubField}
      />
    </>
  );
}

export default () => {
  const classes = useStyles();

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
      <FieldPage title="SPACE SCIENCES" content={content} />
    </>
  );
};
