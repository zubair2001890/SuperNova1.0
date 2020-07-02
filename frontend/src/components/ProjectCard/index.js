import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  Typography,
  Avatar,
  LinearProgress,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import projectMockData from "../../mockData/projects";
import defaultCardHeaderImage from "./assets/default-project-header-image.png";

const defaultHeaderUrl = defaultCardHeaderImage;
const defaultTitle = "Project Name: -";
const defaultSubtitle = (
  <span>
    Person Name: - <br />
    Name of Univeristy: -
  </span>
);

const getProgressValue = ({ fundsRaised, fundsGoal }) => {
  if (typeof fundsRaised === "number" && typeof fundsGoal === "number") {
    return (fundsRaised / fundsGoal) * 100;
  }
  return 0;
};

const getFooter = ({ fundsRaised, fundsGoal }) => {
  if (typeof fundsRaised === "number" && typeof fundsGoal === "number") {
    return `${new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(projectMockData[1].total_raised_funds)}
    raised of
    ${new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(projectMockData[1].funds_goal)}
    goal`;
  }
  return "-";
};

const useStyles = makeStyles((theme) => ({
  card: {
    borderColor: theme.palette.common.gray,
    padding: 4,
  },
  projectImage: {
    height: "30%",
    paddingTop: "30%",
    borderRadius: 3,
  },
  cardContent: {
    padding: theme.spacing(3, 2, 3, 2),
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
    fontWeight: 600,
    lineHeight: "18px",
    fontFamily: "'Montserrat', sans-serif",
  },
  linearProgress: {
    backgroundColor: theme.palette.common.black,
    height: 7,
    borderRadius: 50,
  },
  footer: {
    fontSize: 15,
    letterSpacing: 0.75,
    fontWeight: 700,
    lineHeight: "29px",
  },
}));
const ProjectCard = ({
  headerUrl = defaultHeaderUrl,
  title = defaultTitle,
  avatarUrl,
  subtitle = defaultSubtitle,
  fundsRaised,
  fundsGoal,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.projectImage}
          title="Project Image"
          image={headerUrl}
        />
        <CardContent className={classes.cardContent}>
          <p className={classes.projectTitle}>
            {title.length < 45 ? title : title.slice(0, 41) + "..."}
          </p>
          <Avatar
            className={classes.avatar}
            alt="Researcher Avatar"
            src={avatarUrl}
          />
          <p className={classes.subtitle}>{subtitle}</p>
          <LinearProgress
            variant="determinate"
            value={getProgressValue({ fundsRaised, fundsGoal })}
            color="secondary"
            className={classes.linearProgress}
          />
          <p className={classes.footer}>
            {getFooter({ fundsRaised, fundsGoal })}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProjectCard;
