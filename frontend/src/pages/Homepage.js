/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import AnimatedArrows from "../components/AnimatedArrows";
import GrowVerticalBar from "../components/GrowVerticalBar";
import { useDispatch } from "react-redux";
import { setDarkTheme as setHeaderDarkTheme } from "../store/slices/header";

export default function Links() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderDarkTheme(false));
  }, [dispatch]);

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
