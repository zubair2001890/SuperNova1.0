import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import LeftDrawer from "./components/LeftDrawer";
import paths from "../../../../constants/paths";
import logoRed from "./assets/logo-red.svg";
import logoBlack from "./assets/logo-black.svg";
import logoWhite from "./assets/logo-white.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    color: (props) =>
      props.darkTheme ? theme.palette.common.white : theme.palette.common.black,
    zIndex: theme.zIndex.snackbar,
  },
  toolBar: {
    ...theme.mixins.appBar,
    position: "relative",
  },
  toggleBtn: {
    animation: "slideFadeUp 1.5s ease 2s backwards",
  },
  logoContainer: {
    height: "80%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  logo: {
    marginRight: "auto",
    height: "100%",
  },
  logoRotate: {
    animation: "rotate 3s infinite linear",
  },
  logoFadeIn: {
    animation: "fadeIn 1.5s ease .8s backwards",
  },
  appBarRight: {
    marginLeft: "auto",
    animation: "slideFadeUp 1.5s ease 2s backwards",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(4),
    },
  },
  appBarRightLink: {
    ...theme.mixins.navLinkPrimary,
  },
}));

const getInitialLogoSrc = (darkTheme) => (darkTheme ? logoWhite : logoBlack);

export default function Header({ darkTheme = true }) {
  const classes = useStyles({ darkTheme });
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const [logoImg, setLogoImg] = useState(null);

  useEffect(() => {
    setLogoImg(
      <img
        src={getInitialLogoSrc(darkTheme)}
        className={clsx(classes.logo, classes.logoFadeIn)}
        alt="supernova logo"
      />
    );
  }, [darkTheme, classes.logo, classes.logoFadeIn]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <LeftDrawer
        open={drawerState.left}
        onDrawerClose={toggleDrawer("left", false)}
      />
      <AppBar position="absolute" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            aria-label="menu button"
            onClick={toggleDrawer("left", !drawerState.left)}
            size="medium"
            color="inherit"
            className={classes.toggleBtn}
          >
            {drawerState.left ? (
              <CloseIcon fontSize="large" color="inherit" />
            ) : (
              <MenuIcon fontSize="large" color="inherit" />
            )}
          </IconButton>
          <RouterLink
            className={classes.logoContainer}
            to={paths.home}
            onMouseOver={() => {
              setLogoImg(
                <img
                  src={logoRed}
                  className={clsx(classes.logo, classes.logoRotate)}
                  alt="supernova logo"
                />
              );
            }}
            onMouseOut={() => {
              setLogoImg(
                <img
                  src={getInitialLogoSrc(darkTheme)}
                  className={classes.logo}
                  alt="supernova logo"
                />
              );
            }}
          >
            {logoImg}
          </RouterLink>
          <div className={classes.appBarRight}>
            <Button
              color="inherit"
              component={RouterLink}
              to={paths.explore}
              size="large"
              className={classes.appBarRightLink}
            >
              EXPLORE
            </Button>
            <Button
              color="inherit"
              onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
              size="large"
              className={classes.appBarRightLink}
            >
              {isAuthenticated ? "LOG OUT" : "LOG IN"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
