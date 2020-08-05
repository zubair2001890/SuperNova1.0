import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    marginTop: 160,
    width: "50%",
    height: "100%",
    margin: "auto",
  },
  title: {
      paddingBottom: theme.spacing(10),
  },
  subtitle: {
      letterSpacing: 1,
      fontSize: 20,
      paddingBottom: theme.spacing(2),
  }
}));

const stripePromise = loadStripe(
  "pk_test_51H7Hs0CJhabJ2fSRM7gMfnsInB3asKP17ENirlGHpbKGjHJnQR5ftp8B6AG4t0Z2KOHL8P2N4rvG0xgubuTVq0RS00nVHz409Y"
);
// const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY)

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h1" className={classes.title}>Payment</Typography>
      <Typography variant="h6" className={classes.subtitle}>Pledge</Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
