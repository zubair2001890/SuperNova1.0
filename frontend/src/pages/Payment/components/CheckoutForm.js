<<<<<<< HEAD
import React, { Component } from "react";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core";
import { withAuth0 } from "@auth0/auth0-react";
import {
  Elements,
  ElementsConsumer,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CardSection from "./CardSection";
import { postSendPayment } from "../../../store/slices/middlewareAPI/fetchAPI";

const styles = (theme) => ({
  formContainer: {
    padding: theme.spacing(10),
=======
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CardSection from "./CardSection";
import {sendPayment} from "../../../store/slices/middlewareAPI/middlewareAPI"
import axios from "axios";
import {useDispatch} from "react-redux"
//import { useAuth0 } from "@auth0/auth0-react";
//const { loginWithRedirect, isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0();

const useStyles = makeStyles((theme) => ({
  formContainer: {
    paddingBottom: theme.spacing(10),
>>>>>>> e18215d9461e755913ad45c8e13bdd57d75c14ea
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
<<<<<<< HEAD
  },
});

class CheckoutForm extends Component {
  handleError = (error) => {
    console.error(error);
  };

  fetchIntent = async () => {
    const { auth0, match } = this.props;
    const { getAccessTokenSilently } = auth0;
    const { project, option } = match.params;
    const token = await getAccessTokenSilently();
    return postSendPayment({ projectID: project, optionKey: option }, token);
  };

  getCardElement = () => {
    const { elements } = this.props;
    return elements.getElement(CardNumberElement);
  };

  confirmPayment = async () => {
    const { stripe } = this.props;
    const { client_secret } = await this.fetchIntent();
    return stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: this.getCardElement(),
      },
    });
  };

  getPaymentMethod = async () => {
    const { stripe } = this.props;
    const cardNumberElement = this.getCardElement();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
    });
    if (error) {
      return this.handleError(error);
    }
    return paymentMethod;
  };

  pay = async () => {
    await this.getPaymentMethod();
    return this.confirmPayment();
  };

  verifyStripeExistsAndPay = () => {
    const { stripe, elements } = this.props;
    if (stripe && elements) {
      this.pay();
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.verifyStripeExistsAndPay();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <CardSection />
          <button className={classes.pledgeButton} type="submit">
            Pledge
          </button>
        </form>
      </div>
    );
  }
}

const FormWithRouter = withRouter(CheckoutForm);

const FormWithAuthentication = withAuth0(FormWithRouter);

const StyledForm = withStyles(styles, { withTheme: true })(
  FormWithAuthentication
);

const FormWithElementsProvider = (props) => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  return (
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <StyledForm elements={elements} stripe={stripe} {...props} />
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default FormWithElementsProvider;
=======
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
    /*const dispatch = useDispatch();
    if (isAuthenticated) {
      getAccessTokenSilently({
         audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
         scope: "read:current_user",
      })
      .then(authToken => dispatch(sendPayment({ data: { amount: price * 100 }, authToken: authToken })));
    }
    */
    //const { data: clientSecret } = await axios.post("/api/payment_intents", {
      //amount: price * 100, //Price is in the lowest denomination, the price is one of the input props for the CheckoutForm
    //});
    //console.log("clientSecret = "+ clientSecret);

    /*const cardElement = elements.getElement(CardElement);

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
    */
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
>>>>>>> e18215d9461e755913ad45c8e13bdd57d75c14ea
