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

const defaultHeaderUrl = defaultCardHeaderImage;

const useStyles = makeStyles((theme) => ({
  card: {
    borderColor: theme.palette.common.gray,
    padding: 2,
    margin: "1rem",
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
}));
const ProjectCard = ({ headerUrl = defaultHeaderUrl, body, className }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.card, className)} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.projectImage}
          title="Project Image"
          image={headerUrl}
        />
        <CardContent className={classes.cardContent}>{body}</CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProjectCard;
