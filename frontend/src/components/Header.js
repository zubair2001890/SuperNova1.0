import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  Link,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Drawer,
} from "@material-ui/core";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";
import paths from "../constants/paths";
import logo from "../images/Stellated-Dodecahedron-white.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "black",
    opacity: 1, // Change to zero once background image is added
  },
  flexHeader: {
    display: "flex",
    width: "100%",
  },
  menuButton: {
    color: "white",
    alignSelf: "center",
    flex: 1,
  },
  menuIcon: {
    color: "white",
  },
  link: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: "white",
  },
  rightToolbar: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
  paperAnchorLeft: {
    width: 412,
    paddingLeft: theme.spacing(2),
    background:
      "transparent linear-gradient(180deg, #FF0000 0%, #650000 100%) 0% 0% no-repeat padding-box",
    border: "1px solid #707070",
    "clip-path": "polygon(0 0, 100% 0, 50% 100%, 0% 100%)",
  },
  closeLeftDrawerButtonContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.flexHeader}>
            <div className={classes.menuButton}>
              <IconButton
                className={classes.menuIcon}
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className={classes.logo}>
              <IconButton aria-label="logo">
                <Avatar src={logo} />
              </IconButton>
            </div>
            <div className={classes.rightToolbar}>
              <Typography>
                <Link
                  component={RouterLink}
                  to={paths.explore}
                  className={classes.link}
                >
                  EXPLORE
                </Link>
                <Link
                  component={RouterLink}
                  to={paths.login}
                  className={classes.link}
                >
                  LOG IN
                </Link>
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={drawerState.left}
        onClose={toggleDrawer("left", false)}
        BackdropProps={{ invisible: true }}
        elevation={0}
        classes={{
          paperAnchorLeft: classes.paperAnchorLeft,
        }}
      >
        <div className={classes.closeLeftDrawerButtonContainer}>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", false)}
            size="medium"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </div>
        <List component="nav" aria-label="secondary navigation menu">
          <ListItem button component={RouterLink} to="/">
            <ListItemText primary="BROWSE PROJECTS" />
          </ListItem>
          <ListItem button component={RouterLink} to="/">
            <ListItemText primary="UPLOAD PROJECT" />
          </ListItem>
          <ListItem button component={RouterLink} to="/">
            <ListItemText primary="CONTACT US" />
          </ListItem>
          <ListItem button component={RouterLink} to="/">
            <ListItemText primary="MY PROFILE" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
