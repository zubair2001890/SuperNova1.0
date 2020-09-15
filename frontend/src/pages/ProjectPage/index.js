import React, { Fragment, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Typography,
  makeStyles,
  Tabs,
  Tab,
  Box,
  Grid,
  LinearProgress,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import {
  setDarkTheme as setPageDarkTheme,
} from "../../store/slices/page";
import {
  fetchProject,
  selectData as selectProjectData,
} from "../../store/slices/projectDetails";
import LoginPage from "../../pages/Login";

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
    minHeight: 2000, },
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
    display: 'flex',
    justifyContent: 'flex-start',
  },
  projectDetails: {
    marginLeft: 100,
  },
  fundsProgress: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  raisedProgressBar: {
    backgroundColor: theme.palette.common.black,
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

const TabPanel = (props) => {
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
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const TabIndex = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const formatStartDate = (dateStarted) => {
  const dateObject = new Date(dateStarted);
  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  // If day or month is less than 10 it should be prepended with a 0
  if (day < 10) day = day.toString().concat("0").split("").reverse().join("");
  if (month < 10)
    month = month.toString().concat("0").split("").reverse().join("");
  return `${day}/${month}/${year}`;
};

const formatPostedTime = (timePosted) => {
  const dateObject = new Date(timePosted);
  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  let HH = dateObject.getHours();
  let MM = dateObject.getHours();
  // If day, month, HH or MM is less than 10 it should be prepended with a 0
  if (day < 10) day = day.toString().concat("0").split("").reverse().join("");
  if (month < 10)
    month = month.toString().concat("0").split("").reverse().join("");
  if (HH < 10) HH = HH.toString().concat("0").split("").reverse().join("");
  if (MM < 10) MM = MM.toString().concat("0").split("").reverse().join("");
  return `Posted ${day}/${month}/${year} ${HH}:${MM}`;
};

export default () => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const { id: projectId } = useParams();
  const projectData = useSelector(selectProjectData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [dispatch, projectId]);

  return isAuthenticated ? (
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
          <Tab label="OVERVIEW" className={classes.tabLinks} {...TabIndex(0)} />
          <Tab
            label="LAB NOTES"
            className={classes.tabLinks}
            {...TabIndex(1)}
          />
          <Tab label="METHODS" className={classes.tabLinks} {...TabIndex(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className={classes.center}>
            <Typography variant="h1" className={classes.pageTitle}>
              {projectData.projectName}
            </Typography>
            <Grid container direction="row" className={classes.headerGrid}>
              <Grid item className={classes.imageContainer}>
                <img
                  src={projectData.projectImage}
                  alt="Project"
                  style={{ height: "100%" }}
                ></img>
              </Grid>
              <Grid item className={classes.projectDetails}>
                <Typography variant="h2" style={{ letterSpacing: "0.09em" }}>
                  {`${new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "GBP",
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  }).format(projectData.totalPledged)}`}
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
                  }).format(projectData.goal)}`}{" "}
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
                    marginBottom: 24,
                  }}
                >
                  Project opened on{" "}
                  {formatStartDate(projectData.startDate)}
                </Typography>
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
            {projectData.projectDescription.aims && (<Fragment>
              <Typography component="h3" className={classes.subheadingTitle}>
                Project aims:
              </Typography>
              <Typography variant="body1" className={classes.subheadingParagraph}>
                {projectData.projectDescription.aims}
              </Typography>
            </Fragment>)}
            {projectData.projectDescription.context && (<Fragment>
              <Typography component="h3" className={classes.subheadingTitle}>
                The Scientific Context of the Project:
              </Typography>
              <Typography variant="body1" className={classes.subheadingParagraph}>
                {projectData.projectDescription.context}
              </Typography>
            </Fragment>)}
            {projectData.projectDescription.whyIsItImportant && (<Fragment>
              <Typography component="h3" className={classes.subheadingTitle}>
                Why the Scientist believes the research is important / valuable:
              </Typography>
              <Typography variant="body1" className={classes.subheadingParagraph}>
                {projectData.projectDescription.whyIsItImportant}
              </Typography>
            </Fragment>)}
            {projectData.teamDescription.length && (<Fragment>
              <Typography variant="h2" className={classes.subheading}>
                The Scientists
              </Typography>
              {projectData.teamDescription.map(scientist => (
                <Fragment>
                  <Typography component="h5" className={classes.scientistName}>
                    {scientist.name}
                  </Typography>
                  <Typography component="h6" className={classes.scientistTitle}>
                    {scientist.role}
                  </Typography>
                  <Typography variant="body1" className={classes.subheadingParagraph}>
                    {scientist.bio}
                  </Typography>
                </Fragment>
              ))}
            </Fragment>)}
            {projectData.teamDescription.length && (<Fragment>
              <Typography variant="h2" className={classes.subheading}>
                Timeline and Budget Breakdown
              </Typography>
              {projectData.timelineDescription.map((stage, idx) => (
                <Fragment>
                  <Typography component="h3" className={classes.stageNumber}>
                    Stage {idx + 1}
                  </Typography>
                  <Typography component="h5" className={classes.stageTarget}>
                    Target {stage.target}
                  </Typography>
                  <Typography component="h4" className={classes.stageHeading}>
                    {stage.milestone}
                  </Typography>
                  <Typography component="h5" className={classes.stageSubheading}>
                    Aim:
                  </Typography>
                  <Typography variant="body1" className={classes.subheadingParagraph}>
                    {stage.whatWillBeAchieved}
                  </Typography>
                </Fragment>
              ))}
            </Fragment>)}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={classes.center}>
            <Typography variant="h1" className={classes.pageTitle}>
              Lab Notes
            </Typography>
            <div className={classes.containerRelative}>
              {projectData.labNotes && projectData.labNotes.map(note => (
                <Fragment>
                  <Typography component="h6" className={classes.timePosted}>
                    {formatPostedTime(note.timePosted)}
                  </Typography>
                  <Typography variant="body1" className={classes.notesEntry}>
                    {note.content}
                  </Typography>
                </Fragment>

              ))}
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
                {projectData.methodDescription.methodsAndTechniques}
              </Typography>
              <Typography component="h6" className={classes.timePosted}>
                (Details on Equipment):
              </Typography>
              <Typography variant="body1" className={classes.notesEntry}>
                {projectData.methodDescription.equipment}
              </Typography>
              <Typography component="h6" className={classes.timePosted}>
                Further Scientific Details:
              </Typography>
              <Typography variant="body1" className={classes.notesEntry}>
                {projectData.methodDescription.furtherComments}
              </Typography>
            </div>
          </div>
        </TabPanel>
      </div>
    </>
  ) : (
    <LoginPage />
  );
};
