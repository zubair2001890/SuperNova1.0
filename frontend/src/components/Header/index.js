import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import LeftDrawer from "./components/LeftDrawer";
import paths from "../../constants/paths";
import logoBgDark from "../../images/logo-bg-dark.png";
import logoBgLight from "../../images/logo-bg-light.png";
import logoOrange from "../../images/logo-orange.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    color: (props) =>
      props.darkTheme ? theme.palette.common.white : theme.palette.common.black,
  },
  toolBar: {
    ...theme.mixins.appBar,
    position: "relative",
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
    "&:hover": {
      animation: "$rotate 3s infinite linear",
    },
  },
  appBarRight: {
    marginLeft: "auto",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(4),
    },
  },
  appBarRightLink: {
    ...theme.mixins.navBarLink,
  },
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

export default function Header({ darkTheme = true }) {
  const classes = useStyles({ darkTheme });
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const [logoSrc, setLogoSrc] = useState(darkTheme ? logoBgDark : logoBgLight);

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
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            aria-label="menu button"
            onClick={toggleDrawer("left", true)}
            size="medium"
            color="inherit"
          >
            <MenuIcon fontSize="large" color="inherit" />
          </IconButton>
          <RouterLink className={classes.logoContainer} to={paths.home}>
            <img
              src={logoSrc}
              onMouseOver={() => {
                setLogoSrc(logoOrange);
              }}
              onMouseOut={() => {
                setLogoSrc(darkTheme ? logoBgDark : logoBgLight);
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
      <LeftDrawer
        open={drawerState.left}
        onDrawerClose={toggleDrawer("left", false)}
        onCloseBtnClick={toggleDrawer("left", false)}
      />
    </>
  );
}
