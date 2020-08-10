import React from "react";
import clsx from "clsx";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputField: {
    border: "1px solid",
    borderColor: "rgb(200, 200, 200)",
    padding: theme.spacing(1.5),
  },
  inputArea: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  expirationAndSecurity: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  expiration: {
    width: "49%",
  },
  security: {
    width: "49%",
<<<<<<< HEAD
  },
=======
  }
>>>>>>> e18215d9461e755913ad45c8e13bdd57d75c14ea
}));

const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#000",
      "::placeholder": {
        color: `rgb(150, 150, 150)`,
      },
    },
    invalid: {
      color: `#e63939`,
      iconColor: `#e63939`,
    },
    complete: {},
  },
  hidePostalCode: true,
};

export default function CardSection() {
  const classes = useStyles();
<<<<<<< HEAD
  return (
    <>
      <div className={classes.inputArea}>
        <label>
          <div className={classes.label}>Card number</div>
        </label>
=======
  // return <CardElement options={cardElementOptions} />;
  return (
    <>
      <div className={classes.inputArea}>
        <label><div className={classes.label}>Card number</div></label>
>>>>>>> e18215d9461e755913ad45c8e13bdd57d75c14ea
        <div className={classes.inputField}>
          <CardNumberElement options={cardElementOptions} />
        </div>
      </div>
      <div className={classes.inputArea}>
<<<<<<< HEAD
        <label htmlFor="name">
          <div className={classes.label}>Cardholder name</div>
        </label>
=======
        <label htmlFor="name"><div className={classes.label}>Cardholder name</div></label>
>>>>>>> e18215d9461e755913ad45c8e13bdd57d75c14ea
        <div className={classes.inputField}>
          <input
            name="name"
            type="text"
            placeholder="Cardholder name"
            style={{ border: "none", width: "calc(100% - 2px)", fontSize: 16 }}
            required
          />
        </div>
      </div>
      <div className={classes.expirationAndSecurity}>
        <div className={clsx(classes.inputArea, classes.expiration)}>
<<<<<<< HEAD
          <label>
            <div className={classes.label}>Expiration</div>
          </label>
=======
          <label><div className={classes.label}>Expiration</div></label>
>>>>>>> e18215d9461e755913ad45c8e13bdd57d75c14ea
          <div className={classes.inputField}>
            <CardExpiryElement options={cardElementOptions} />
          </div>
        </div>
        <div className={clsx(classes.inputArea, classes.security)}>
<<<<<<< HEAD
          <label>
            <div className={classes.label}>Security code</div>
          </label>
=======
          <label><div className={classes.label}>Security code</div></label>
>>>>>>> e18215d9461e755913ad45c8e13bdd57d75c14ea
          <div className={classes.inputField}>
            <CardCvcElement options={cardElementOptions} />
          </div>
        </div>
      </div>
      <div className={classes.inputArea}>
<<<<<<< HEAD
        <label htmlFor="zip">
          <div className={classes.label}>Zip/Postal Code</div>
        </label>
=======
        <label htmlFor="zip"><div className={classes.label}>Zip/Postal Code</div></label>
>>>>>>> e18215d9461e755913ad45c8e13bdd57d75c14ea
        <div className={classes.inputField}>
          <input
            name="zip"
            type="text"
            placeholder="Zip/Postal Code"
            style={{ border: "none", width: "calc(100% - 2px)", fontSize: 16 }}
            required
          />
        </div>
      </div>
    </>
  );
}
