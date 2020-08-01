import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fundingOptionContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: "100%",
  },
  option: {
    marginBottom: theme.spacing(4),
  },
  fundingBox: {
    width: 896,
    height: 247,
    border: "2px solid gray",
    borderRadius: 10,
    padding: 30,
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
  amount: {
    fontSize: 30,
  },
  title: {
    paddingTop: 40,
    fontWeight: "bold",
    fontSize: 25,
    letterSpacing: 1.8,
  },
  description: {
    paddingTop: 40,
    fontSize: 25,
    letterSpacing: 1.8,
  },
}));

function boxClicked() {
  console.log("Box clicked");
};

export default function FundingOption(props) {
  const classes = useStyles();

  return (
    <div className={classes.fundingOptionContainer} onClick={boxClicked}>
      <Typography variant="h3" className={classes.option}>
        Option {props.optionNumber}:
      </Typography>
      <div className={classes.fundingBox}>
        <Typography className={classes.amount} variant="h4">
          £{props.amount} or more
        </Typography>
        <Typography className={classes.title} variant="body1">
          {props.title}
        </Typography>
        <Typography className={classes.description}>
          {props.description}
        </Typography>
      </div>
    </div>
  );
}