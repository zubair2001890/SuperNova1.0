import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#000",
      "::placeholder": {
        color: "rgb(150, 150, 150)",
      },
    },
    invalid: {
      color: `#e63939`,
      iconColor: `#e63939`,
    },
    complete: {},
  },
  hidePostalCode: false,
};

export default function CardSection() {
  // return <CardElement options={cardElementOptions} />;
  return (
    <>
      <CardNumberElement />
      <div>
          <label htmlFor="name">Cardholder name</label>
          <input name="name" type="text" placeholder="Cardholder name" required />
        </div>
      <CardExpiryElement />
      <CardCvcElement />
      <div>
          <label htmlFor="zip">Zip/Postal Code</label>
          <input name="zip" type="text" placeholder="Zip/Postal Code" required />
        </div>
    </>
  );
}
