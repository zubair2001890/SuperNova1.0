import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
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
import paths from "../../../constants/paths";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white",
  },
  bottomNavBar: {
    backgroundColor: theme.palette.common.black,
    paddingTop: theme.spacing(2),
  },
  footer: {
    width: "100%",
    // must be positioned to not be covered by particles
    position: "relative",
    bottom: 0,
    backgroundColor: theme.palette.common.black,
  },
  regularLink: {
    ...theme.mixins.navLinkSecondary,
    color: "white",
  },
  boldLink: {
    color: "white",
    ...theme.mixins.navLinkPrimary,
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
  loginGridRow: {
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    justifyContent: "space-around",
    height: 80,
  },
  footerTitle: {
    color: "white",
    fontFamily: "avaMeridian",
    fontSize: "2vw",
    letterSpacing: 2.97,
  },
  whiteLine: {
    width: "100%",
    height: 2,
    backgroundColor: theme.palette.common.white,
  },
  whiteLineContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      {["/login", "/loginincorrect"].includes(props.location.pathname) ? (
        // {props.location.pathname === "/login" ? (
        <>
          <Grid container className={classes.loginGridRow}>
            <Grid item xs={3} className={classes.whiteLineContainer}>
              <div className={classes.whiteLine}></div>
            </Grid>
            <Grid item xs={2}>
              <Typography
                className={clsx(classes.footerTitle, classes.gridItem)}
              >
                SUPERNOVA
              </Typography>
            </Grid>
            <Grid item xs={3} className={classes.whiteLineContainer}>
              <div className={classes.whiteLine}></div>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container className={classes.gridRow}>
            <Grid item xs={3} className={classes.whiteLineContainer}>
              <div className={classes.whiteLine}></div>
            </Grid>
            <Grid item xs={2}>
              <Typography
                className={clsx(classes.footerTitle, classes.gridItem)}
              >
                SUPERNOVA
              </Typography>
            </Grid>
            <Grid item xs={3} className={classes.whiteLineContainer}>
              <div className={classes.whiteLine}></div>
            </Grid>
          </Grid>
        </>
      )}

      {["/login", "/loginincorrect"].includes(props.location.pathname) ? null : (
        // {props.location.pathname === "/login" ? null : (
        <>
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
            </Grid>{" "}
          </Grid>
        </>
      )}
      {["/login", "/loginincorrect"].includes(props.location.pathname) ? null : (
        // {props.location.pathname === "/login" ? null : (
        <>
          <Grid container spacing={2} className={classes.gridRow}>
            <Grid item xs={4} className={classes.gridItem}>
              <MaterialLink
                component={RouterLink}
                to={paths.mission}
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
                to={paths.terms}
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
                to={paths.model}
                className={classes.regularLink}
              >
                Our Model
              </MaterialLink>
            </Grid>
            <Grid item xs={4} className={classes.gridItem}>
              <MaterialLink
                component={RouterLink}
                to={paths.contact}
                className={classes.regularLink}
              >
                Contact Us
              </MaterialLink>
            </Grid>
            <Grid item xs={4} className={classes.gridItem}>
              <MaterialLink
                component={RouterLink}
                to={paths.faq}
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
          </BottomNavigation>{" "}
        </>
      )}
    </div>
  );
}
export default withRouter(Footer);
