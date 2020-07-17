import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import defaultCardHeaderImage from "./assets/default-project-header-image.png";

const defaultprojectImage = defaultCardHeaderImage;

const useStyles = makeStyles((theme) => ({
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
}) => {
  const classes = useStyles();
  return (
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
  );
};
export default ProjectCard;
