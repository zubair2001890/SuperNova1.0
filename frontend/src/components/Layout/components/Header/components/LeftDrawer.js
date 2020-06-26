import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Drawer } from "@material-ui/core";
import DrawerTimeline from "./DrawerTimeline";

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
    ...theme.mixins.appBar,
  },
  drawerContentContainer: {
    display: "flex",
    width: "100%",
    paddingLeft: theme.spacing(2),
  },
  drawerTimeline: {
    flex: "0 0 auto",
  },
  listItemTextPrimary: {
    ...theme.mixins.navLinkPrimary,
    '&:hover': {
      color: theme.palette.common.white,
    }
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
      <div className={classes.mockAppBarLayout}></div>
      <div className={classes.drawerContentContainer}>
        <DrawerTimeline className={classes.drawerTimeline} />
        <List component="nav" aria-label="secondary navigation menu">
          <ListItem button component={RouterLink} to="/">
            <ListItemText
              classes={{ primary: classes.listItemTextPrimary }}
              primary="BROWSE PROJECTS"
            />
          </ListItem>
          <ListItem button component={RouterLink} to="/">
            <ListItemText
              classes={{ primary: classes.listItemTextPrimary }}
              primary="UPLOAD A PROJECT"
            />
          </ListItem>
          <ListItem button component={RouterLink} to="/">
            <ListItemText
              classes={{ primary: classes.listItemTextPrimary }}
              primary="CONTACT US"
            />
          </ListItem>
          <ListItem button component={RouterLink} to="/">
            <ListItemText
              classes={{ primary: classes.listItemTextPrimary }}
              primary="MY PROFILE"
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
