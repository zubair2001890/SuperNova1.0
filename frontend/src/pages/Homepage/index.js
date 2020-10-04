import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  setDarkTheme as setPageDarkTheme,
  setParticles as setPageParticles,
} from "../../store/slices/page";
import useWindowScrollY from "../../hooks/useWindowScrollY";
import Intro from "./components/Intro";
import SlidingParagraphs from "./components/SlidingParagraphs";
import Projects from "./components/Projects";
import {
  fetchProjects,
  selectData as selectProjectsData,
  selectLoading as selectProjectsLoading,
} from "../../store/slices/projects";
import { fetchFeaturedProject } from "../../store/slices/middlewareAPI/middlewareAPI";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const scrollY = useWindowScrollY();
  const projectsData = useSelector(selectProjectsData);
  const featuredProjects = projectsData.slice(0, 4);
  const projectsLoading = useSelector(selectProjectsLoading);

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    dispatch(setPageParticles(true));
    dispatch(fetchProjects());
    dispatch(fetchFeaturedProject());
    return () => {
      dispatch(setPageDarkTheme(false));
      dispatch(setPageParticles(false));
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
