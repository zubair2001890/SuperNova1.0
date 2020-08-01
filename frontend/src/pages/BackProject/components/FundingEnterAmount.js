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
    height: 247,
    border: "2px solid red",
    borderRadius: 10,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    letterSpacing: 1.8,
  },
  description: {
    letterSpacing: 1.8,
    fontSize: 14,
  },
  enterAmountText: {
    fontWeight: "bold",
  },
  fundingAmountInput: {
    height: 40,
    display: "flex",
    justifyContent: "space-between",
  },
}));

const CustomButton = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
    fontSize: 16,
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.common.black,
      backgroundColor: "#ddd",
      fontSize: 16,
      fontWeight: "bold",
      border: "1px solid black",
    },
  },
}))(Button);

export default function FundingEnterAmount(props) {
  const classes = useStyles();

  return (
    <div className={classes.fundingOptionContainer}>
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
        <Typography className={classes.enterAmountText}>
          Enter Donation Amount:
        </Typography>
        <div className={classes.fundingAmountInput}>
          <TextField
            variant="outlined"
            placeholder="£..."
            style={{ height: 40 }}
          />
          <CustomButton variant="contained">Let's Go!</CustomButton>
        </div>
      </div>
    </div>
  );
}
