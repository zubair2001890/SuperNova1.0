import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineDot from "@material-ui/lab/TimelineDot";

const useStyles = makeStyles((theme) => ({
  timelineRoot: {
    width: 0,
    padding: 0,
    marginTop: 27, // half height of ListItem
    marginRight: theme.spacing(4),
  },
  timelineItemRoot: {
    minHeight: 54, // same height as ListItem, must style with minHeight (check styles from MUI)
  },
  timelineItemMissingOppositeContent: {
    "&:before": {
      padding: 0,
    },
  },
  timelineConnector: {
    width: 1,
    backgroundColor: theme.palette.common.white,
  },
  timelineDot: {
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: theme.palette.common.white,
  },
}));

export default ({ className }) => {
  const classes = useStyles();

  return (
    <Timeline
      align="left"
      classes={{ root: clsx(classes.timelineRoot, className) }}
    >
      <TimelineItem
        classes={{
          root: classes.timelineItemRoot,
          missingOppositeContent: classes.timelineItemMissingOppositeContent,
        }}
      >
        <TimelineSeparator classes={classes.timelineSeparator}>
          <TimelineDot className={classes.timelineDot} />
          <TimelineConnector className={classes.timelineConnector} />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem
        classes={{
          root: classes.timelineItemRoot,
          missingOppositeContent: classes.timelineItemMissingOppositeContent,
        }}
      >
        <TimelineSeparator classes={{ root: classes.timelineSeparator }}>
          <TimelineDot classes={{ root: classes.timelineDot }} />
          <TimelineConnector className={classes.timelineConnector} />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem
        classes={{
          root: classes.timelineItemRoot,
          missingOppositeContent: classes.timelineItemMissingOppositeContent,
        }}
      >
        <TimelineSeparator classes={{ root: classes.timelineSeparator }}>
          <TimelineDot classes={{ root: classes.timelineDot }} />
          <TimelineConnector className={classes.timelineConnector} />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem
        classes={{
          root: classes.timelineItemRoot,
          missingOppositeContent: classes.timelineItemMissingOppositeContent,
        }}
      >
        <TimelineSeparator classes={{ root: classes.timelineSeparator }}>
          <TimelineDot classes={{ root: classes.timelineDot }} />
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  );
}
