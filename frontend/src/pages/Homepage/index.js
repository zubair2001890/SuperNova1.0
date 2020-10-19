import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  setInitialHeaderTheme,
  setScrollHeaderTheme,
} from "../../store/slices/page";
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
    dispatch(setInitialHeaderTheme("transparent"));
    dispatch(setScrollHeaderTheme("white"));
    dispatch(fetchProjects());
    dispatch(fetchFeaturedProject());
  }, [dispatch]);

  return (
    <div className={classes.pageContainer}>
      <Intro scrollY={scrollY} />
      <SlidingParagraphs />
      <Projects projectsData={projectsData} />
    </div>
  );
};

// Potential solution for parallax:
// document.addEventListener('scroll',function(e) {
//   var newPos = (window.scrollY*-1)/2
//   document.body.style.backgroundPosition = "center "+newPos+"px";
// });
