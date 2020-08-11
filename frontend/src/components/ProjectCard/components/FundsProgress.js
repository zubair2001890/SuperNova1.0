import React from "react";
import { LinearProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  linearProgress: {
    backgroundColor: theme.palette.common.black,
    height: 7,
    borderRadius: 50,
  },
  footer: {
    fontSize: 15,
    letterSpacing: 0.9,
    fontWeight: 700,
    lineHeight: "29px",
    fontFamily: "'Montserrat', sans-serif",
  },
}));

const getProgressValue = ({ fundsRaised, fundsGoal }) => {
  if (typeof fundsRaised === "number" && typeof fundsGoal === "number") {
    return (fundsRaised / fundsGoal) * 100;
  }
  return 0;
};

const getFundsProgressCaption = ({ fundsRaised, fundsGoal }) => {
  if (typeof fundsRaised === "number" && typeof fundsGoal === "number") {
    return `${new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(fundsRaised)}
        raised of
        ${new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "GBP",
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
        }).format(fundsGoal)}
        goal`;
  }
  return "-";
};

const FundsProgress = ({ fundsRaised, fundsGoal }) => {
  const classes = useStyles();
  return (
    <>
      <LinearProgress
        variant="determinate"
        value={getProgressValue({
          fundsRaised,
          fundsGoal,
        })}
        color="secondary"
        className={classes.linearProgress}
      />
      <p className={classes.footer}>
        {getFundsProgressCaption({
          fundsRaised,
          fundsGoal,
        })}
      </p>
    </>
  );
};

export default FundsProgress;
