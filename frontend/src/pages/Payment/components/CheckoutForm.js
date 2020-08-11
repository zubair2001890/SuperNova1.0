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
