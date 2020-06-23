import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Link as MaterialLink,
  Typography,
} from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white",
  },
  bottomNavBar: {
    backgroundColor: "black",
    // TODO: Import colour from palette
    paddingTop: theme.spacing(2),
  },
  footer: {
    width: "100%",
    bottom: 0,
    backgroundColor: "black",
  },
  regularLink: {
    color: "white",
    fontSize: 18,
  },
  boldLink: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  gridItem: {
    textAlign: "center",
  },
  gridRow: {
    alignItems: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    justifyContent: "space-around",
  },
  footerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 33, // TODO: Resize when window gets small and text overflows container
    fontFamily: "Roboto",
  },
  whiteLine: {
    width: "100%",
    height: 2,
    backgroundColor: "white",
  },
  whiteLineContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container className={classes.gridRow}>
        <Grid item xs={3} className={classes.whiteLineContainer}>
          <div className={classes.whiteLine}></div>
        </Grid>
        <Grid item xs={2}>
          <Typography className={clsx(classes.footerTitle, classes.gridItem)}>
            SUPERNOVA
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.whiteLineContainer}>
          <div className={classes.whiteLine}></div>
        </Grid>
      </Grid>
      <Grid container className={classes.gridRow}>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.boldLink}
          >
            ABOUT
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.boldLink}
          >
            CREATE
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.boldLink}
          >
            EXPLORE
          </MaterialLink>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridRow}>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.regularLink}
          >
            Our Mission
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.regularLink}
          >
            Upload a Project
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.regularLink}
          >
            Browse Projects
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.regularLink}
          >
            T&Cs
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.regularLink}
          >
            Create Account
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.regularLink}
          >
            Funded Projects
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.regularLink}
          >
            Our Model
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.regularLink}
          >
            Contact Us
          </MaterialLink>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <MaterialLink
            component={RouterLink}
            to="/"
            className={classes.regularLink}
          >
            FAQ
          </MaterialLink>
        </Grid>
      </Grid>
      <BottomNavigation className={classes.bottomNavBar}>
        <BottomNavigationAction
          className={classes.icon}
          icon={<FacebookIcon />}
        />
        <BottomNavigationAction
          className={classes.icon}
          icon={<TwitterIcon />}
        />
        <BottomNavigationAction
          className={classes.icon}
          icon={<InstagramIcon />}
        />
        <BottomNavigationAction
          className={classes.icon}
          icon={<LinkedInIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
