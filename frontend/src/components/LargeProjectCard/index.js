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
    padding: 10,
    maxWidth: 720,
    height: 435,
    margin: "0px 20px",
  },
  projectImage: {
    paddingRight: "5%",
    borderRadius: 3,
    height: 200,
    width: "40%",
  },
  cardDetails: {
    padding: theme.spacing(3, 2, 3, 2),
    width: "60%",
  },
  cardBody: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardUpperBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cardLowerBody: {
    textAlign: "left",
    fontSize: 14,
    fontFamily: "AvertaDemo",
    letterSpacing: 0.84,
  },
}));
const ProjectCard = ({
  headerUrl = defaultHeaderUrl,
  details,
  aboutDescription,
  significanceDescription,
  className,
}) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.card, className)} variant="outlined">
      <CardActionArea className={classes.cardBody}>
        <div className={classes.cardUpperBody}>
          <CardContent className={classes.cardDetails}>{details}</CardContent>
          <CardMedia
            className={classes.projectImage}
            title="Project Image"
            image={headerUrl}
          />
        </div>
        <div className={classes.cardLowerBody}>
          <p>About this Project:</p>
          {aboutDescription}
          <p>Its significance within Subfield X:</p>
          {significanceDescription}
          </div>
      </CardActionArea>
    </Card>
  );
};
export default ProjectCard;
