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
        {props.location.pathname === "/login" ? null : (
          <>
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
          </>
        )}
      </Grid>
    </div>
  );
}
export default withRouter(Footer);
