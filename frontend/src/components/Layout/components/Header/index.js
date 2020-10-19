import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectInitialHeaderTheme,
  selectScrollHeaderTheme,
} from "../../../../store/slices/page";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
//media queries
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useWindowScrollY from "../../../../hooks/useWindowScrollY";

import LeftDrawer from "./components/LeftDrawer";
import AvatarDropdown from "./components/Avatar";
import paths from "../../../../constants/paths";
import logoRed from "./assets/logo-red.svg";
import logoBlack from "./assets/logo-black.svg";
import logoWhite from "./assets/logo-white.svg";

const useStyles = makeStyles((theme) => ({
  appBarTransparent: {
    backgroundColor: "transparent",
    color: theme.palette.common.white,
  },
  appBarBlack: {
    backgroundColor: "black",
    backgroundImage: "url(" + require("../assets/header.png") + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: theme.palette.common.white,
    animation: "fadeInHeaderBackground 0.5s",
  },
  appBarWhite: {
    backgroundColor: "white",
    color: theme.palette.common.black,
  },
  appBar: {
    zIndex: theme.zIndex.snackbar,
    transition: "background-color 0.5s",
  },
  toolBar: {
    ...theme.mixins.appBar,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: 56,
      padding: 0,
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
  },
  toggleBtn: {
    animation: "slideFadeUp 1.5s ease 2s backwards",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
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
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  appBarRightLink: {
    ...theme.mixins.navLinkPrimary,
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
}));

const getInitialLogoSrc = (dark) =>
  dark === "transparent" ? logoWhite : dark === "black" ? logoWhite : logoBlack;

export default function Header() {
  const initialHeaderTheme = useSelector(selectInitialHeaderTheme);
  const scrollHeaderTheme = useSelector(selectScrollHeaderTheme);
  const [dark, setDark] = useState(initialHeaderTheme);
  const scrollY = useWindowScrollY();
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const [logoImg, setLogoImg] = useState(null);

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  //media queries
  const theme = useTheme();
  const matchesMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setLogoImg(
      <img
        src={getInitialLogoSrc(dark)}
        className={clsx(classes.logo, classes.logoFadeIn)}
        alt="supernova logo"
      />
    );

    if (scrollY > 0) {
      setDark(scrollHeaderTheme);
    } else {
      setDark(initialHeaderTheme);
    }
  }, [
    dark,
    classes.logo,
    classes.logoFadeIn,
    scrollY,
    initialHeaderTheme,
    scrollHeaderTheme,
  ]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
    <>
      <LeftDrawer
        open={drawerState.left}
        onDrawerClose={toggleDrawer("left", false)}
      />
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarTransparent]: dark == "transparent",
          [classes.appBarBlack]: dark == "black",
          [classes.appBarWhite]: dark == "white",
        })}
      >
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
                  src={getInitialLogoSrc(dark)}
                  className={classes.logo}
                  alt="supernova logo"
                />
              );
            }}
          >
            {logoImg}
          </RouterLink>
          <div className={classes.appBarRight}>
            {matchesMediaQuery ? null : (
              <Button
                color="inherit"
                component={RouterLink}
                to={paths.explore}
                size="large"
                className={classes.appBarRightLink}
              >
                EXPLORE
              </Button>
            )}
            {isAuthenticated ? (
              <AvatarDropdown />
            ) : (
              <Button
                color="inherit"
                onClick={loginWithRedirect}
                size="large"
                className={classes.appBarRightLink}
              >
                LOG IN
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
