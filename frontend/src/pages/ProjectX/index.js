import React, { useEffect } from "react";
import { Typography, makeStyles, Tabs, Tab, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../store/slices/page";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    position: "relative",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "20vw",
    maxWidth: 400,
    marginTop: 300,
  },
  center: {
    margin: "0 auto",
    maxWidth: 966,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: 92,
    paddingBottom: 92,
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  pageTitle: {
    position: "relative",
    top: 20,
  },
  subheadingVerticalMargin: {
    margin: "68px 0",
  },
  subheadingTextVerticalMargin: {
    paddingBottom: 48,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ProjectX() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.mockAppBarLayout} />
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="OVERVIEW" {...a11yProps(0)} />
          <Tab label="LAB NOTES" {...a11yProps(1)} />
          <Tab label="METHODS" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant="h1" align="center" className={classes.pageTitle}>
            This is where the project title goes.
          </Typography>
          <div className={classes.center}>
            <Typography
              variant="h2"
              className={classes.subheadingVerticalMargin}
            >
              SuperNova's Model:
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              At its core, SuperNova is a unique crowdfunding website for
              Scientific Research Projects providing the world's Scientists with
              an exciting new channel to receive the support required to carry
              out their vital research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              Unlike most crowdfunding platforms where donations are motivated
              by the promise of material gain, those who back projects on
              SuperNova will be given an exclusive educational opportunity to
              interact with the Scientists, gaining access to first hand
              commentary on cutting edge research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              By drawing on the inherent curiosity of the human mind and the
              fascination that Science provides it, SuperNova aims to become a
              thriving community providing a podium for Research to flourish,
              Scientists to collaborate, and for The People to play an active
              role in the advancement of Science itself.
            </Typography>
            <Typography
              variant="h2"
              className={classes.subheadingVerticalMargin}
            >
              More Model:
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              At its core, SuperNova is a unique crowdfunding website for
              Scientific Research Projects providing the world's Scientists with
              an exciting new channel to receive the support required to carry
              out their vital research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              Unlike most crowdfunding platforms where donations are motivated
              by the promise of material gain, those who back projects on
              SuperNova will be given an exclusive educational opportunity to
              interact with the Scientists, gaining access to first hand
              commentary on cutting edge research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              By drawing on the inherent curiosity of the human mind and the
              fascination that Science provides it, SuperNova aims to become a
              thriving community providing a podium for Research to flourish,
              Scientists to collaborate, and for The People to play an active
              role in the advancement of Science itself.
            </Typography>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h1" align="center" className={classes.pageTitle}>
            This is where the project title goes.
          </Typography>
          <div className={classes.center}>
            <Typography
              variant="h2"
              className={classes.subheadingVerticalMargin}
            >
              SuperNova's Model:
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              At its core, SuperNova is a unique crowdfunding website for
              Scientific Research Projects providing the world's Scientists with
              an exciting new channel to receive the support required to carry
              out their vital research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              Unlike most crowdfunding platforms where donations are motivated
              by the promise of material gain, those who back projects on
              SuperNova will be given an exclusive educational opportunity to
              interact with the Scientists, gaining access to first hand
              commentary on cutting edge research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              By drawing on the inherent curiosity of the human mind and the
              fascination that Science provides it, SuperNova aims to become a
              thriving community providing a podium for Research to flourish,
              Scientists to collaborate, and for The People to play an active
              role in the advancement of Science itself.
            </Typography>
            <Typography
              variant="h2"
              className={classes.subheadingVerticalMargin}
            >
              More Model:
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              At its core, SuperNova is a unique crowdfunding website for
              Scientific Research Projects providing the world's Scientists with
              an exciting new channel to receive the support required to carry
              out their vital research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              Unlike most crowdfunding platforms where donations are motivated
              by the promise of material gain, those who back projects on
              SuperNova will be given an exclusive educational opportunity to
              interact with the Scientists, gaining access to first hand
              commentary on cutting edge research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h1" align="center" className={classes.pageTitle}>
            This is where the project title goes.
          </Typography>
          <div className={classes.center}>
            <Typography
              variant="h2"
              className={classes.subheadingVerticalMargin}
            >
              SuperNova's Model:
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              At its core, SuperNova is a unique crowdfunding website for
              Scientific Research Projects providing the world's Scientists with
              an exciting new channel to receive the support required to carry
              out their vital research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              Unlike most crowdfunding platforms where donations are motivated
              by the promise of material gain, those who back projects on
              SuperNova will be given an exclusive educational opportunity to
              interact with the Scientists, gaining access to first hand
              commentary on cutting edge research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              By drawing on the inherent curiosity of the human mind and the
              fascination that Science provides it, SuperNova aims to become a
              thriving community providing a podium for Research to flourish,
              Scientists to collaborate, and for The People to play an active
              role in the advancement of Science itself.
            </Typography>
            <Typography
              variant="h2"
              className={classes.subheadingVerticalMargin}
            >
              More Model:
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              At its core, SuperNova is a unique crowdfunding website for
              Scientific Research Projects providing the world's Scientists with
              an exciting new channel to receive the support required to carry
              out their vital research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              Unlike most crowdfunding platforms where donations are motivated
              by the promise of material gain, those who back projects on
              SuperNova will be given an exclusive educational opportunity to
              interact with the Scientists, gaining access to first hand
              commentary on cutting edge research.
            </Typography>
            <Typography
              variant="body1"
              className={classes.subheadingTextVerticalMargin}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </div>
        </TabPanel>
      </div>
    </>
  );
}
