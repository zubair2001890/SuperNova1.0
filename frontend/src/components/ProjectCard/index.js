import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import defaultCardHeaderImage from "./assets/default-project-header-image.png";
import { getProjectPath } from "../../helpers/createPaths";

const defaultprojectImage = defaultCardHeaderImage;

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  card: {
    borderColor: theme.palette.common.gray,
    padding: 3,
    maxWidth: 273,
  },
  projectImage: {
    paddingTop: "50%",
    borderRadius: 3,
  },
  cardContent: {
    padding: theme.spacing(3, 2, 3, 2),
  },
}));
const ProjectCard = ({
  projectImage = defaultprojectImage,
  body,
  className,
  id,
}) => {
  const classes = useStyles();
  const projectUrl = getProjectPath(id);
  return (
    <Link to={projectUrl} className={classes.link}>
      <Card className={clsx(classes.card, className)} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.projectImage}
            title="Project Image"
            image={projectImage}
          />
          <CardContent className={classes.cardContent}>{body}</CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default ProjectCard;
