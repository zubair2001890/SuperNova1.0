import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperAnchorLeft: {
    width: 412,
    paddingLeft: theme.spacing(2),
    background:
      "transparent linear-gradient(180deg, #FF0000 0%, #650000 100%) 0% 0% no-repeat padding-box",
    border: "1px solid #707070",
    "clip-path": "polygon(0 0, 100% 0, 50% 100%, 0% 100%)",
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar
  },
  closeLeftDrawerButtonContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  drawerLinks: {
    ...theme.mixins.navLinkPrimary,
  },
}));

export default ({ className, open, onDrawerClose, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={onDrawerClose}
      BackdropProps={{ invisible: true }}
      elevation={0}
      classes={{
        paperAnchorLeft: classes.paperAnchorLeft,
      }}
      className={className}
      {...otherProps}
    >
      <div class={classes.mockAppBarLayout}></div>
      <List component="nav" aria-label="secondary navigation menu">
        <ListItem button component={RouterLink} to="/">
          <ListItemText
            classes={{ primary: classes.drawerLinks }}
            primary="BROWSE PROJECTS"
          />
        </ListItem>
        <ListItem button component={RouterLink} to="/">
          <ListItemText
            classes={{ primary: classes.drawerLinks }}
            primary="UPLOAD A PROJECT"
          />
        </ListItem>
        <ListItem button component={RouterLink} to="/">
          <ListItemText
            classes={{ primary: classes.drawerLinks }}
            primary="CONTACT US"
          />
        </ListItem>
        <ListItem button component={RouterLink} to="/">
          <ListItemText
            classes={{ primary: classes.drawerLinks }}
            primary="MY PROFILE"
          />
        </ListItem>
      </List>
    </Drawer>
  );
};
