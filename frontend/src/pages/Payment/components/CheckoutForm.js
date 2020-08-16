import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import {
  withStyles,
  Typography,
  Divider,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { withAuth0 } from "@auth0/auth0-react";
import {
  Elements,
  ElementsConsumer,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CardSection from "./CardSection";
import { postSendPayment } from "../../../store/slices/middlewareAPI/fetchAPI";

import paths from "../../../constants/paths";

const styles = (theme) => ({
  pageContainer: {
    marginTop: 160,
    width: "50%",
    minWidth: 500,
    height: "100%",
    margin: "auto",
    paddingBottom: theme.spacing(10),
  },
  title: {
    paddingBottom: theme.spacing(10),
  },
  subtitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  pledge: {
    letterSpacing: 1,
    fontSize: 20,
    paddingBottom: theme.spacing(2),
  },
  edit: {
    fontSize: 16,
    color: theme.palette.common.black,
  },
  pledgeDetails: {
    height: 120,
    backgroundColor: "#eeeeee",
    border: "1px solid #bbbbbb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  pledgeDetailsTopRow: {
    display: "flex",
  },
  reward: {
    width: "25%",
    paddingLeft: 17,
  },
  rewardDescription: {
    width: "50%",
  },
  amountPledged: {
    width: "25%",
    textAlign: "right",
    paddingRight: 17,
  },
  pledgeDetailsBottomRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 17px 0px 17px",
  },
  totalAmountLabel: {
    fontFamily: "avertaDemo",
    fontSize: 14,
    fontWeight: "bold",
  },
  totalAmount: {
    color: "rgb(36, 143, 109)",
  },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  rememberCardCheckbox: {
    color: theme.palette.common.black,
    padding: theme.spacing(2, 1, 0, 0),
    margin: theme.spacing(1, 0, 1, 0),
  },
  rememberCardText: {
    fontSize: 15,
  },
  pledgeButton: {
    backgroundColor: "rgb(0, 158, 116)",
    border: "none",
    color: "white",
    fontSize: 16,
    height: 50,
  },
  disclaimer: {
    paddingTop: theme.spacing(2),
    color: "#888888",
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
      <div className={classes.pageContainer}>
        <Typography variant="h1" className={classes.title}>
          Payment
        </Typography>
        <div className={classes.subtitle}>
          <Typography variant="h6" className={classes.pledge}>
            Pledge
          </Typography>
          <RouterLink to={paths.payment} className={classes.edit}>
            <Typography variant="h6" className={classes.edit}>
              Edit
            </Typography>
          </RouterLink>
        </div>
        <div className={classes.pledgeDetails}>
          <div className={classes.pledgeDetailsTopRow}>
            <div className={classes.reward}>
              <Typography variant="body2">Reward</Typography>
            </div>
            <div className={classes.rewardDescription}>
              <Typography variant="body2">Virtual thank you</Typography>
            </div>
            <div className={classes.amountPledged}>
              <Typography variant="body2">£10.00</Typography>
            </div>
          </div>
          <Divider variant="middle" />
          <div className={classes.pledgeDetailsBottomRow}>
            <div className={classes.totalAmountLabel}>Total amount</div>
            <div className={classes.totalAmount}>
              <Typography variant="body2">£10.00</Typography>
            </div>
          </div>
        </div>
        <form className={classes.form} onSubmit={this.handleSubmit}>
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
          <button className={classes.pledgeButton} type="submit">
            Pledge
          </button>
        </form>
        <Typography variant="body2" className={classes.disclaimer}>
          Your payment information is processed through Stripe. To complete
          transactions, we store the card type, last four digits, expiration
          date and name on the card. By pledging you agree to Kickstarter's
          Terms of Use, Privacy Policy and Cookie Policy. Our policies explain
          how we will use and store your data and how you can control that use.
          You can edit your settings here.
        </Typography>
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
