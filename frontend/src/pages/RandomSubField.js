import React from "react";
import Constellation from "../components/Constellation";
import useStyles from "./SubFieldPage/exploreSubFieldPageStyles";
import SubFieldPage from "./SubFieldPage";

function Item(props) {
  return (
    <>
      <Constellation
        subfield={props.item.name2}
        top="calc(60% - 20px)"
        left="calc(10% + 50px)"
      />
      <Constellation
        subfield={props.item.name1}
        top="calc(5% + 10px)"
        left="calc(15% + 50px)"
      />
      <Constellation
        subfield={props.item.name3}
        top="calc(50%)"
        left="calc(60%)"
      />
    </>
  );
}

export default () => {
  const classes = useStyles();

  var items = [
    {
      name1: "BIOLOGY 1",
      name2: "BIOLOGY 2",
      name3: "BIOLOGY 3",
    },
    {
      name1: "BIOLOGY 4",
      name2: "BIOLOGY 5",
      name3: "BIOLOGY 6",
    },
    {
      name1: "BIOLOGY 7",
      name2: "BIOLOGY 8",
      name3: "BIOLOGY 9",
    },
  ];

  const content = [
    <div className={classes.carouselSlide}>Hello</div>,
    <div className={classes.carouselSlide}>World</div>,
    <div className={classes.carouselSlide}>!</div>,
  ];

  return (
    <>
      <SubFieldPage title="SUBFIELD X" content={content} />
    </>
  );
};
