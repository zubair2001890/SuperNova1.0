import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./SubFieldPage/exploreSubFieldPageStyles";
import SubFieldPage from "./SubFieldPage";
import Projects from "./SubFieldPage/components/ProjectsForCarousel";
import {
  fetchProjects,
  selectData as selectProjectsData,
} from "../store/slices/projects";

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const projectsData = useSelector(selectProjectsData);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const content = [
    <div className={classes.carouselSlide}>
      <Projects projectsData={projectsData.slice(0, 1)} />
    </div>,
    <div className={classes.carouselSlide}>
      <Projects projectsData={projectsData.slice(1, 2)} />
    </div>,
    <div className={classes.carouselSlide}>
      <Projects projectsData={projectsData.slice(2, 3)} />
    </div>,
    <div className={classes.carouselSlide}>
      <Projects projectsData={projectsData.slice(3, 4)} />
    </div>,
  ];

  return (
    <>
      <SubFieldPage title="SUBFIELD X" content={content} />
    </>
  );
};
