/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typography from "@material-ui/core/Typography";
import AnimatedArrows from "../components/AnimatedArrows";
import GrowVerticalBar from "../components/GrowVerticalBar";

export default function Links() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Homepage
      </Typography>
      <AnimatedArrows />
      <GrowVerticalBar />
    </>
  );
}
