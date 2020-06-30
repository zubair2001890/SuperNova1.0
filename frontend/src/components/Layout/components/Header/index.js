import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";
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
    animation: "fadeIn 1.5s ease 1s backwards",
    "&:hover": {
      animation: "rotate 3s infinite linear",
    },
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

const getLogoSrc = (darkTheme) => (darkTheme ? logoWhite : logoBlack);

export default function Header({ darkTheme = true }) {
  const classes = useStyles({ darkTheme });
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const [logoSrc, setLogoSrc] = useState(getLogoSrc(darkTheme));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  useEffect(() => {
    setLogoSrc(getLogoSrc(darkTheme));
  }, [darkTheme]);

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
          <RouterLink className={classes.logoContainer} to={paths.home}>
            <img
              src={logoSrc}
              onMouseOver={() => {
                setLogoSrc(logoRed);
              }}
              onMouseOut={() => {
                setLogoSrc(getLogoSrc(darkTheme));
              }}
              alt="supernova logo"
              className={classes.logo}
            />
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
              component={RouterLink}
              to={paths.login}
              size="large"
              className={classes.appBarRightLink}
            >
              LOG IN
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
