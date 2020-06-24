import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProjectImage from './static/images/ProjectImage.png';
import Avatar from '@material-ui/core/Avatar';
import PersonPicture from './static/images/PersonPicture.jpg';
import { Box, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 273,
    height: 408,
  },
  //   cardActionArea: {},
  projectImage: {
    position: 'relative',
    top: 4.03,
    left: 3.9,
    width: 265,
    height: 149,
  },
  projectTitleContainer: {
    width: 235,
    height: 38,
    position: 'relative',
    top: 14,
    left: 12.9,
    fontSize: 16,
  },
  projectTitle: {
    fontWeight: 'bold',
  },
  personPictureContainer: {
    width: 56,
    height: 58,
    position: 'relative',
    top: 32,
    left: 12.9,
  },
  personPicture: {
    width: 56,
    height: 58,
  },
  personDetailsContainer: {
    width: 205,
    height: 45,
    position: 'relative',
    top: 43,
    left: 13.9,
  },
  raisedProgressBarContainer: {
    width: 238,
    height: 5,
    position: 'relative',
    top: 58.5,
    left: 12.9,
  },
  raisedProgressBar: {
    fill: '#ebebeb',
    backgroundColor: '#000000',
  },
  raisedDescriptionContainer: {
    width: 240,
    height: 19,
    position: 'relative',
    top: 74,
    left: 13.9,
  },
  raisedDescription: {
    fontWeight: 'bold',
  },
});

const ProjectCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.projectImage}
        image={ProjectImage}
        title="Project Image"
      />

      <Box className={classes.projectTitleContainer}>
        <Typography className={classes.projectTitle} component="h3">
          Dark energy dark matter astrophysics star?
        </Typography>
      </Box>
      <Box className={classes.personPictureContainer}>
        <Avatar
          className={classes.personPicture}
          alt="Travis Howard"
          src={PersonPicture}
        />
      </Box>

      <Box className={classes.personDetailsContainer}>
        <Typography variant="body2" component="h6">
          Person B
        </Typography>
        <Typography variant="body2" component="h6">
          University of B
        </Typography>
      </Box>
      <CardActionArea>
        <Box className={classes.raisedProgressBarContainer}>
          <LinearProgress
            variant="determinate"
            value={40}
            color="secondary"
            className={classes.raisedProgressBar}
          />
        </Box>
        <Box className={classes.raisedDescriptionContainer}>
          <Typography className={classes.raisedDescription} component="h4">
            £2,048 raised of £8,192 goal
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
