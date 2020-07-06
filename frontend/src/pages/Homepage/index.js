import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  setDarkTheme as setPageDarkTheme,
  setParticles as setPageParticles,
} from "../../store/slices/page";
import useWindowScrollY from "../../hooks/useWindowScrollY";
import Intro from "./components/Intro";
import SlidingParagraphs from "./components/SlidingParagraphs";
import Projects from "./components/Projects";
import { fetchProjects } from "../../store/slices/projectsSlice";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const scrollY = useWindowScrollY();

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    dispatch(setPageParticles(true));
    dispatch(fetchProjects());
    return () => {
      dispatch(setPageDarkTheme(false));
      dispatch(setPageParticles(false));
    };
  }, [dispatch]);

  return (
    <div className={classes.pageContainer}>
      <Intro scrollY={scrollY} />
      <SlidingParagraphs />
      <Projects />
    </div>
  );
};
