import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';
import useStyles from "./SubFieldPage/exploreSubFieldPageStyles";
import SubFieldPage from "./SubFieldPage";
import Projects from "./SubFieldPage/components/ProjectsForCarousel";
import {
  fetchProjects,
  selectData as selectProjectsData,
} from "../store/slices/projects";
import { setInitialHeaderTheme, setScrollHeaderTheme } from "../store/slices/page";

const Biology1 = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const projectsData = useSelector(selectProjectsData);

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(setInitialHeaderTheme("transparent"));
    dispatch(setScrollHeaderTheme("black"));
  }, [dispatch]);

  const content = [
    <div className={classes.carouselSlide} key={0}>
      <Projects projectsData={projectsData.slice(0, 1)} />
    </div>,
    <div className={classes.carouselSlide} key={1}>
      <Projects projectsData={projectsData.slice(1, 2)} />
    </div>,
    <div className={classes.carouselSlide} key={2}>
      <Projects projectsData={projectsData.slice(2, 3)} />
    </div>,
    <div className={classes.carouselSlide} key={3}>
      <Projects projectsData={projectsData.slice(3, 4)} />
    </div>,
  ];

  return (
    <>
      <SubFieldPage title={props.location.state.title} content={content} />
    </>
  );
};

export default withRouter(Biology1);
