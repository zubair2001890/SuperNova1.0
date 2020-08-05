import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
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
        <button className={classes.pledgeButton}>Pledge</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
