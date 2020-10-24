import React from "react";
import clsx from "clsx";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { makeStyles } from "@material-ui/core";
import paymentIcons from "../assets/payment-icons.png";

const useStyles = makeStyles((theme) => ({
  inputBlock: {
    paddingTop: theme.spacing(4),
  },
  regularInput: {
    fontSize: 16,
    padding: "12px 0px 12px 12px",
    border: "1px solid",
    borderColor: "rgb(200, 200, 200)",
    width: "calc(100% - 12px)",
    "&:focus": {
      outline: "none",
    },
  },
  inputField: {
    border: "1px solid",
    borderColor: "rgb(200, 200, 200)",
    padding: theme.spacing(1.5),
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  cardNumberRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  paymentIconsImage: {
    height: 20,
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
  },
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
  return (
    <>
      <div className={classes.inputBlock}>
        <label>
          <div className={clsx(classes.label, classes.cardNumberRow)}>
            <div>Card number</div>
            <img
              src={paymentIcons}
              alt=""
              className={classes.paymentIconsImage}
            />
          </div>
        </label>
        <div className={classes.inputField}>
          <CardNumberElement options={cardElementOptions} />
        </div>
      </div>
      <div className={classes.inputBlock}>
        <label htmlFor="name">
          <div className={classes.label}>Cardholder name</div>
        </label>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Cardholder name"
            className={classes.regularInput}
            required
          />
        </div>
      </div>
      <div className={classes.expirationAndSecurity}>
        <div className={clsx(classes.inputBlock, classes.expiration)}>
          <label>
            <div className={classes.label}>Expiration</div>
          </label>
          <div className={classes.inputField}>
            <CardExpiryElement options={cardElementOptions} />
          </div>
        </div>
        <div className={clsx(classes.inputBlock, classes.security)}>
          <label>
            <div className={classes.label}>Security code</div>
          </label>
          <div className={classes.inputField}>
            <CardCvcElement options={cardElementOptions} />
          </div>
        </div>
      </div>
      <div className={classes.inputBlock}>
        <label htmlFor="zip">
          <div className={classes.label}>Zip/Postal Code</div>
        </label>
        <div>
          <input
            name="zip"
            type="text"
            placeholder="Zip/Postal Code"
            className={classes.regularInput}
            required
          />
        </div>
      </div>
    </>
  );
}
