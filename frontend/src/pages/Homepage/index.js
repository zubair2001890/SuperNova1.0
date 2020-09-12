import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../store/slices/page";
import useWindowScrollY from "../../hooks/useWindowScrollY";
import Intro from "./components/Intro";
import SlidingParagraphs from "./components/SlidingParagraphs";
import Projects from "./components/Projects";
import {
  fetchProjects,
  selectData as selectProjectsData,
} from "../../store/slices/projects";
import { fetchFeaturedProject } from "../../store/slices/middlewareAPI/middlewareAPI";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: theme.palette.common.black,
    backgroundImage: "url(" + require("./assets/homepage_background.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
  },
}));

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const scrollY = useWindowScrollY();
  const projectsData = useSelector(selectProjectsData);

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    dispatch(fetchProjects());
    dispatch(fetchFeaturedProject());
    return () => {
      dispatch(setPageDarkTheme(false));
    };
  }, [dispatch]);

  return (
    <div className={classes.pageContainer}>
      <Intro scrollY={scrollY} />
      <SlidingParagraphs />
      <Projects projectsData={projectsData} />
    </div>
  );
};
