import React, { useEffect } from "react";
import {
  Typography,
  makeStyles,
  Tabs,
  Tab,
  Box,
  Grid,
  LinearProgress,
  Avatar,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setDarkTheme as setPageDarkTheme } from "../../store/slices/page";
import PropTypes from "prop-types";
import ProjectMockData from "../../mockData/projects.json";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    flexGrow: 1,
    display: "flex",
    position: "relative",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.common.black}`,
    width: "20vw",
    maxWidth: 400,
    height: 600,
    position: "relative",
    top: 180,
  },
  tabLinks: {
    ...theme.mixins.navLinkPrimary,
    color: theme.palette.common.black,
  },
  tabsPanel: {
    minHeight: 2000,
  },
  center: {
    margin: "0 auto",
    maxWidth: 966,
    paddingLeft: theme.spacing(2),
    paddingBottom: 92,
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  pageTitle: {
    position: "relative",
    top: 20,
  },
  headerGrid: {
    position: "relative",
    top: 100,
    paddingBottom: 100,
    width: "max-content",
  },
  imageContainer: {
    minWidth: 500,
  },
  projectDetails: {
    marginLeft: 100,
  },
  fundsProgress: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  raisedProgressBar: {
    backgroundColor: "#000000",
    width: 238,
    height: 7,
    borderRadius: 50,
  },
  avatar: {
    width: 62,
    height: 62,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  backProjectButton: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: "Montserrat",
    fontSize: 16,
    lineHeight: "29px",
    letterSpacing: "0.06em",
    fontWeight: 700,
    border: "1px solid #DADCE0",
    borderRadius: 12,
    "&:hover": {
      backgroundColor: theme.palette.common.black,
    },
  },
  subheading: {
    margin: "68px 0",
  },
  subheadingTitle: {
    fontFamily: "Montserrat",
    fontSize: 24,
    lineHeight: "29px",
    letterSpacing: "0.01em",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  subheadingParagraph: {
    paddingBottom: 48,
  },
  scientistName: {
    fontFamily: "Montserrat",
    fontSize: 24,
    lineHeight: "29px",
    letterSpacing: "-0.004em",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  scientistTitle: {
    fontFamily: "Montserrat",
    fontSize: 20,
    lineHeight: "24px",
    letterSpacing: "-0.004em",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  stageNumber: {
    fontFamily: "Montserrat",
    fontSize: 30,
    lineHeight: "37px",
    letterSpacing: "-0.004em",
    fontWeight: 700,
    marginBottom: "2rem",
  },
  stageTarget: {
    fontFamily: "Montserrat",
    fontSize: 24,
    lineHeight: "29px",
    letterSpacing: "-0.004em",
    fontWeight: 600,
    position: "relative",
    top: -64,
    textAlign: "end",
  },
  stageHeading: {
    fontFamily: "Montserrat",
    fontSize: 26,
    lineHeight: "32px",
    letterSpacing: "-0.004em",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  stageSubheading: {
    fontFamily: "Montserrat",
    fontSize: 24,
    lineHeight: "29px",
    letterSpacing: "-0.004em",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  stageSubheading2: {
    fontFamily: "Montserrat",
    fontSize: 20,
    lineHeight: "24px",
    letterSpacing: "-0.004em",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  timePosted: {
    fontFamily: "Montserrat",
    fontSize: 20,
    lineHeight: "24px",
    letterSpacing: "-0.004em",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  containerRelative: {
    position: "relative",
    top: 100,
  },
  notesEntry: {
    marginBottom: theme.spacing(6),
  },
  methods: {
    position: "relative",
    top: 100,
  },
}));

function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabsPanel}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
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
      <div className={classes.pageContent}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          textColor="secondary"
          variant="fullWidth"
          orientation="vertical"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          <Tab
            label="OVERVIEW"
            className={classes.tabLinks}
            {...a11yProps(0)}
          />
          <Tab
            label="LAB NOTES"
            className={classes.tabLinks}
            {...a11yProps(1)}
          />
          <Tab label="METHODS" className={classes.tabLinks} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className={classes.center}>
            <Typography variant="h1" className={classes.pageTitle}>
              This is where the project title goes.
            </Typography>
            <Grid container direction="row" className={classes.headerGrid}>
              <Grid item className={classes.imageContainer}>
                <img
                  src={ProjectMockData[0].projectImage}
                  alt="Project"
                  style={{ width: "100%" }}
                ></img>
              </Grid>
              <Grid item className={classes.projectDetails}>
                <Typography variant="h2" style={{ letterSpacing: "0.09em" }}>
                  {`${new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "GBP",
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  }).format(2048)}`}
                </Typography>
                <Typography
                  variant="h3"
                  style={{
                    letterSpacing: "0.09em",
                    fontSize: 24,
                    lineHeight: "29px",
                    fontWeight: 700,
                    marginBottom: 24,
                  }}
                >
                  Raised of{" "}
                  {`${new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "GBP",
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  }).format(8192)}`}{" "}
                  goal
                </Typography>
                <Typography
                  variant="h3"
                  style={{
                    letterSpacing: "0.09em",
                    fontSize: 24,
                    lineHeight: "29px",
                    fontWeight: 700,
                  }}
                >
                  25% complete (Stage 1)
                </Typography>
                <Box className={classes.fundsProgress}>
                  <LinearProgress
                    variant="determinate"
                    value={25}
                    color="secondary"
                    className={classes.raisedProgressBar}
                  />
                </Box>
                <Typography
                  variant="h3"
                  style={{
                    letterSpacing: 0,
                    fontSize: 24,
                    lineHeight: "29px",
                    fontWeight: 700,
                  }}
                >
                  Project opened on 13/06/2019
                </Typography>
                <Grid container direction="row">
                  <Grid item>
                    <Avatar
                      className={classes.avatar}
                      alt="Project Backer"
                      src={ProjectMockData[0].backerAvatarUrls[0]}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      className={classes.avatar}
                      alt="Project Backer"
                      src={ProjectMockData[0].backerAvatarUrls[1]}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      className={classes.avatar}
                      alt="Project Backer"
                      src={ProjectMockData[0].backerAvatarUrls[2]}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  className={classes.backProjectButton}
                  disableElevation
                >
                  BACK THIS PROJECT
                </Button>
              </Grid>
            </Grid>
            <Typography variant="h2" className={classes.subheading}>
              About this Project
            </Typography>
            <Typography component="h3" className={classes.subheadingTitle}>
              Project aims:
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography component="h3" className={classes.subheadingTitle}>
              The Scientific Context of the Project:
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography component="h3" className={classes.subheadingTitle}>
              Why the Scientist believes the research is important / valuable:
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography variant="h2" className={classes.subheading}>
              The Scientists
            </Typography>
            <Typography component="h5" className={classes.scientistName}>
              Hugh Horowitz
            </Typography>
            <Typography component="h6" className={classes.scientistTitle}>
              Project Leader
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "I've been researching stars for 24 years. This project is my
              second in the Berlin Astrophysics department. I'm excited about
              this project beacause..."
            </Typography>
            <Typography component="h5" className={classes.scientistName}>
              Arthur Franklin
            </Typography>
            <Typography component="h6" className={classes.scientistTitle}>
              Theoretical advisor
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "I've been researching stars for 24 years. This project is my
              second in the Berlin Astrophysics department. I'm excited about
              this project beacause..."
            </Typography>
            <Typography component="h5" className={classes.scientistName}>
              Jada Williams
            </Typography>
            <Typography component="h6" className={classes.scientistTitle}>
              Observatory operator
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "I've been researching stars for 24 years. This project is my
              second in the Berlin Astrophysics department. I'm excited about
              this project beacause..."
            </Typography>
            <Typography variant="h2" className={classes.subheading}>
              Timeline and Budget Breakdown
            </Typography>
            <Typography component="h3" className={classes.stageNumber}>
              Stage 1:
            </Typography>
            <Typography component="h5" className={classes.stageTarget}>
              Target £2048
            </Typography>
            <Typography component="h4" className={classes.stageHeading}>
              Purchase of necessary equipment an data acquisition
            </Typography>
            <Typography component="h5" className={classes.stageSubheading}>
              Aim:
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography component="h6" className={classes.stageSubheading2}>
              Fund allocation:
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography component="h3" className={classes.stageNumber}>
              Stage 2:
            </Typography>
            <Typography component="h5" className={classes.stageTarget}>
              Target £2048
            </Typography>
            <Typography component="h4" className={classes.stageHeading}>
              Purchase of necessary equipment an data acquisition
            </Typography>
            <Typography component="h5" className={classes.stageSubheading}>
              Aim:
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography component="h6" className={classes.stageSubheading2}>
              Fund allocation:
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography component="h3" className={classes.stageNumber}>
              Stage 3:
            </Typography>
            <Typography component="h5" className={classes.stageTarget}>
              Target £2048
            </Typography>
            <Typography component="h4" className={classes.stageHeading}>
              Purchase of necessary equipment an data acquisition
            </Typography>
            <Typography component="h5" className={classes.stageSubheading}>
              Aim:
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography component="h6" className={classes.stageSubheading2}>
              Fund allocation:
            </Typography>
            <Typography variant="body1" className={classes.subheadingParagraph}>
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
        <TabPanel value={value} index={1}>
          <div className={classes.center}>
            <Typography variant="h1" className={classes.pageTitle}>
              Lab Notes
            </Typography>
            <div className={classes.containerRelative}>
              <Typography component="h6" className={classes.timePosted}>
                Posted 24/08/2020 18:21
              </Typography>
              <Typography variant="body1" className={classes.notesEntry}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <Typography component="h6" className={classes.timePosted}>
                Posted 10/07/2020 18:59
              </Typography>
              <Typography variant="body1" className={classes.notesEntry}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className={classes.center}>
            <Typography variant="h1" className={classes.pageTitle}>
              Methods
            </Typography>
            <div className={classes.containerRelative}>
              <Typography component="h6" className={classes.timePosted}>
                Scientific Methods and Techniques:
              </Typography>
              <Typography variant="body1" className={classes.notesEntry}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <Typography component="h6" className={classes.timePosted}>
                Details on Equipment:
              </Typography>
              <Typography variant="body1" className={classes.notesEntry}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <Typography component="h6" className={classes.timePosted}>
                Further Scientific details:
              </Typography>
              <Typography variant="body1" className={classes.notesEntry}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
            </div>
          </div>
        </TabPanel>
      </div>
    </>
  );
}
