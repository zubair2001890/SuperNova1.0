import React from "react";
import { makeStyles } from "@material-ui/core";
import Star from "./components/Star";
import unselectedStar from "./assets/constellationstarunselected/constellationstarunselected.png";
import selectedStar from "./assets/constellationstarselected/constellationstarselected.png";
import Consumer from "../../pages/SubFieldPage/StarContext";

const useStyles = makeStyles(() => ({
  constellation: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  constellationImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "auto",
  },
}));

const isStarSelected = [unselectedStar, selectedStar];

export default function InteractiveConstellation() {
  const classes = useStyles();

  return (
    <div className={classes.constellation}>
      <img
        alt="constellation"
        src={require("./assets/constellationnostars/constellationnostars.png")}
        className={classes.constellationImage}
      />
      <Consumer>
        {(ctx) => {
          return (
            <>
              <Star top="-1%" left="0%" star={isStarSelected[ctx.stars[0]]} onClick={() => ctx.updateCarousel(0)} />
              <Star top="80%" left="10%" star={isStarSelected[ctx.stars[1]]} onClick={() => ctx.updateCarousel(1)} />
              <Star top="9%" left="26%" star={isStarSelected[ctx.stars[2]]} onClick={() => ctx.updateCarousel(2)} />
              <Star top="69%" left="32%" star={isStarSelected[ctx.stars[3]]} onClick={() => ctx.updateCarousel(3)} />
              <Star top="40%" left="41%" star={isStarSelected[ctx.stars[4]]} onClick={() => ctx.updateCarousel(4)} />
              <Star top="51%" left="70%" star={isStarSelected[ctx.stars[5]]} onClick={() => ctx.updateCarousel(5)} />
              <Star top="40%" left="92%" star={isStarSelected[ctx.stars[6]]} onClick={() => ctx.updateCarousel(6)} />
            </>
          );
        }}
      </Consumer>
    </div>
  );
}
