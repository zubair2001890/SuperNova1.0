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
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import paths from "../../../constants/paths";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white",
  },
  bottomNavBar: {
    backgroundColor: "transparent",
    paddingTop: theme.spacing(2),
  },
  footer: {
    width: "100%",
    // must be positioned to not be covered by particles
    position: "relative",
    bottom: 0,
    backgroundImage: "url(" + require("./assets/footer.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  regularLink: {
    ...theme.mixins.navLinkSecondary,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  boldLink: {
    color: "white",
    ...theme.mixins.navLinkPrimary,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  gridItem: {
    textAlign: "center",
  },
  gridRow: {
    alignItems: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
    },
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vw",
      display: "flex",
      justifyContent: "center",
    },
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
  //media queries
  const theme = useTheme();
  const matchesMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.footer}>
      {["/login", "/createaccount", "/forgotpassword"].includes(
        props.location.pathname
      ) ? (
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

      {["/login", "/createaccount", "/forgotpassword"].includes(
        props.location.pathname
      ) ? null : (
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
          <Grid
            container
            spacing={matchesMediaQuery ? 0 : 2}
            className={classes.gridRow}
          >
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
