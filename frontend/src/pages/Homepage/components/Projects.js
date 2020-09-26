import React from "react";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../../store/slices/page";
import { makeStyles, Typography, Avatar, Tooltip } from "@material-ui/core";
import ProjectCard from "../../../components/ProjectCard";
import FundsProgress from "../../../components/ProjectCard/components/FundsProgress";

const maxTitleLength = 45;

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    minHeight: "calc(100vh - 200px)",
    backgroundColor: "white",
    padding: "100px 0px",
    opacity: 1,
    zIndex: 100,
  },
  sectionTitle: {
    color: "black",
    textAlign: "center",
    letterSpacing: "0.09em",
    marginBottom: "10rem",
  },
  projectCardsGrid: {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
  },
  card: {
    margin: "1rem",
  },
  cardBody: {
    "& > *": {
      marginTop: 0,
      marginBottom: 0,
      "&:not(:last-child)": { marginBottom: theme.spacing(2) },
    },
  },
  projectTitle: {
    fontSize: 16,
    letterSpacing: 0.96,
    fontWeight: 700,
    lineHeight: "19px",
    fontFamily: "'Montserrat', sans-serif",
    maxHeight: 36,
    overflowY: "hidden",
  },
  avatar: {
    width: 56,
    height: 56,
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 1.12,
    fontWeight: 500,
    lineHeight: "18px",
    fontFamily: "'Montserrat', sans-serif",
  },
}));

export default ({ projectsData }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div
      className={classes.sectionContainer}
      ref={(el) => {
        if (!el) return;
        let positionOnPage = el.getBoundingClientRect().top;
        if (positionOnPage <= 80) {
          dispatch(setPageDarkTheme(true));
        }
        else {
          dispatch(setPageDarkTheme(false));
        }
      }}
    >
      <Typography variant="h2" className={classes.sectionTitle}>
        FEATURED PROJECTS
      </Typography>
      <div className={classes.projectCardsGrid}>
        {projectsData && projectsData.map(renderProject(classes))}
      </div>
    </div>
  );
};

function renderProject(classes) {
  return (project) => (
    <ProjectCard
      key={project._id}
      headerUrl={project.projectImage}
      className={classes.card}
      id={project._id}
      body={
        <div className={classes.cardBody}>
          <p className={classes.projectTitle}>
            {project.projectName.length < maxTitleLength ? (
              project.projectName
            ) : (
              <Tooltip title={project.projectName} placement="top">
                <span>
                  {project.projectName.slice(0, maxTitleLength - 3) + "..."}
                </span>
              </Tooltip>
            )}
          </p>
          <Avatar
            className={classes.avatar}
            alt="Researcher Avatar"
            src={project.projectImage}
          />
          <p className={classes.subtitle}>
            {project.fullName}<br />
            {project.university}
          </p>
          <FundsProgress
            fundsRaised={project.totalPledged}
            fundsGoal={project.goal}
          />
        </div>
      }
    />
  );
}
