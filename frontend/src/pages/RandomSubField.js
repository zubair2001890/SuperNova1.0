import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Constellation from "../components/Constellation";
import useStyles from "./SubFieldPage/exploreSubFieldPageStyles";
import SubFieldPage from "./SubFieldPage";
import ProjectCard from "../components/ProjectCard";
import Projects from "./SubFieldPage/components/ProjectsForCarousel";
import {
  fetchProjects,
  selectData as selectProjectsData,
} from "../store/slices/projects";

function Item(props) {
  return (
    <>
      <Constellation
        subfield={props.item.name2}
        top="calc(60% - 20px)"
        left="calc(10% + 50px)"
      />
      <Constellation
        subfield={props.item.name1}
        top="calc(5% + 10px)"
        left="calc(15% + 50px)"
      />
      <Constellation
        subfield={props.item.name3}
        top="calc(50%)"
        left="calc(60%)"
      />
    </>
  );
}

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const projectsData = useSelector(selectProjectsData);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  var items = [
    {
      name1: "BIOLOGY 1",
      name2: "BIOLOGY 2",
      name3: "BIOLOGY 3",
    },
    {
      name1: "BIOLOGY 4",
      name2: "BIOLOGY 5",
      name3: "BIOLOGY 6",
    },
    {
      name1: "BIOLOGY 7",
      name2: "BIOLOGY 8",
      name3: "BIOLOGY 9",
    },
  ];

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
