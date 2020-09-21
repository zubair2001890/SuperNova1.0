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


// Potential solution for parallax:
// document.addEventListener('scroll',function(e) {
//   var newPos = (window.scrollY*-1)/2
//   document.body.style.backgroundPosition = "center "+newPos+"px";
// });


// Notes on how to change header colour when it intersects projects section:
// Use `ref` in <Projects /> to get `getBoundingClientRect().top`, i.e. how far away it is from the top of the viewport
// Create some sort of global state, maybe Context or Redux, that tracks whether or not the projects section is at the top of the viewport
// If the projects section is at the top of the viewport, i.e. `getBoundingClientRect().top === 0`, change the `dark` state of the header