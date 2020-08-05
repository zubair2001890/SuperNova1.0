import React, { useState } from "react";
import {
  makeStyles,
  Checkbox,
  Typography,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CardSection from "./CardSection";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    paddingBottom: theme.spacing(10),
  },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  pledgeButton: {
    backgroundColor: "rgb(0, 158, 116)",
    border: "none",
    color: "white",
    fontSize: 16,
    height: 50,
    marginTop: theme.spacing(4),
  },
  rememberCardCheckbox: {
    color: theme.palette.common.black,
    padding: theme.spacing(2, 1, 0, 0),
    margin: theme.spacing(1, 0, 1, 0),
  },
  rememberCardText: {
    fontSize: 15,
  },
  disclaimer: {
    paddingTop: theme.spacing(2),
    color: "#888888"
  }
}));

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const classes = useStyles();
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    const billingDetails = {
      //   name: ev.target.name.value,
      //   email: ev.target.email.value,
      //   address: {
      //     city: ev.target.city.value,
      //     line1: ev.target.address.value,
      //     state: ev.target.state.value,
      //     postal_code: ev.target.zip.value,
      //   },
      name: "John Doe",
      email: "example@domain.com",
      address: {
        city: "City",
        line1: "Address",
        state: "State",
        postal_code: "ZIP",
      },
    };

    setProcessingTo(true); // So set processing to true when the transaction is happening.

    const { data: clientSecret } = await axios.post("/api/payment_intents", {
      amount: price * 100, //Price is in the lowest denomination, the price is one of the input props for the CheckoutForm
    });
    console.log("clientSecret = " + clientSecret);

    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billingDetails,
    });

    console.log(paymentMethodReq);
    const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });

    onSuccessfulCheckout();
    console.log(confirmCardPayment); // This object should have a field status, with a value of "succeeded".
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleFormSubmit} className={classes.form}>
        <CardSection />
        <FormControl
          fullWidth
          className={classes.rememberCardCheckbox}
          required={true}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="rememberCard"
                style={{
                  color: "#bbbbbb",
                }}
              />
            }
            label={
              <Typography className={classes.rememberCardText}>
                Remember this card for future pledges
              </Typography>
            }
          />
        </FormControl>
        <button className={classes.pledgeButton}>Pledge</button>
      </form>
      <Typography variant="body2" className={classes.disclaimer}>
        Your payment information is processed through Stripe. To complete
        transactions, we store the card type, last four digits, expiration date
        and name on the card. By pledging you agree to Kickstarter's Terms of
        Use, Privacy Policy and Cookie Policy. Our policies explain how we will
        use and store your data and how you can control that use. You can edit
        your settings here.
      </Typography>
    </div>
  );
};

export default CheckoutForm;
