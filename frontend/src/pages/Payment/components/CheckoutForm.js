import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CardSection from "./CardSection";
import {sendPayment} from "../../../store/slices/middlewareAPI/middlewareAPI"
import axios from "axios";
import {useDispatch} from "react-redux"

const { loginWithRedirect, isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0();

const useStyles = makeStyles(() => ({
  formContainer: {
    marginTop: 160,
    width: "50%",
    height: 150,
    margin: "auto",
  },
  form: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
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
    const dispatch = useDispatch();
    const response = dispatch()
    if (isAuthenticated) {
      getAccessTokenSilently({
         audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
         scope: "read:current_user",
      })
      .then(authToken => dispatch(sendPayment({ data: { amount: price * 100 }, authToken: authToken })));
    }
    //const { data: clientSecret } = await axios.post("/api/payment_intents", {
      //amount: price * 100, //Price is in the lowest denomination, the price is one of the input props for the CheckoutForm
    //});
    //console.log("clientSecret = "+ clientSecret);

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
        <button style={{ width: 50 }}>Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
