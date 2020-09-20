import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";
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
  appBarDark: {
    backgroundColor: "transparent",
    color: theme.palette.common.white,
    zIndex: theme.zIndex.snackbar,
    animation: "whiteToBlack 0.5s",
  },
  appBarLight: {
    backgroundColor: "white",
    color: theme.palette.common.black,
    zIndex: theme.zIndex.snackbar,
    animation: "blackToWhite 0.5s",
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

const getInitialLogoSrc = (dark) => (dark ? logoWhite : logoBlack);

export default function Header({ darkTheme = true }) {
  const [dark, setDark] = useState(darkTheme);
  const scrollY = useWindowScrollY();
  const classes = useStyles({ dark });
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
      setDark(false);
    } else {
      setDark(true);
    }

    // Example for an authorized backend request
    // if (isAuthenticated) {
    //   getAccessTokenSilently({
    //     audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
    //     scope: "read:current_user",
    //   }).then(res => dispatch(sendUpdateAccount({ data: { test: 'all' }, authToken: res })));
    // }
  }, [dark, classes.logo, classes.logoFadeIn, scrollY]);

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
        className={`${dark ? classes.appBarDark : classes.appBarLight}`}
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
