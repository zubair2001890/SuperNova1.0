import React from "react";
import {
  makeStyles,
  withStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

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
    height: 180,
    border: "2px solid red",
    borderRadius: 10,
    padding: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1.8,
  },
  description: {
    letterSpacing: 1.5,
    fontSize: 14,
  },
  enterAmountText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  fundingAmountInput: {
    height: 40,
    display: "flex",
    justifyContent: "space-between",
  },
  submitButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
    fontFamily: "avertaDemo",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
    width: 120,
    height: 40,
    border: "1px solid black",
    borderRadius: 4,
    "&:hover": {
      color: theme.palette.common.black,
      backgroundColor: "#ddd",
      fontSize: 16,
      fontWeight: "bold",
      border: "1px solid black",
    },
  }
}));

export default function FundingEnterAmount(props) {
  const classes = useStyles();

  return (
    <div className={classes.fundingOptionContainer}>
      <Typography variant="h4" className={classes.option}>
        Option {props.optionNumber}:
      </Typography>
      <div className={classes.fundingBox}>
        <Typography className={classes.amount} variant="h4">
          £{props.min} or more
        </Typography>
        <Typography className={classes.title} variant="body1">
          {props.title}
        </Typography>
        <Typography className={classes.description}>
          {props.description}
        </Typography>
        <Typography className={classes.enterAmountText}>
          Enter Donation Amount:
        </Typography>
        <form className={classes.fundingAmountInput}>
          {/* <TextField
            variant="outlined"
            placeholder="£..."
            style={{ height: 40 }}
            type="number"
          /> */}
          <input type="number" min={props.min} max={props.max} step={1} required="true" />
          <button type="submit" className={classes.submitButton}>Let's Go!</button>
        </form>
      </div>
    </div>
  );
}
