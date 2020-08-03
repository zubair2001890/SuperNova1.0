import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#000",
      "::placeholder": {
        color: `#87bbfd`,
      },
    },
    invalid: {
      color: `#FFC7EE`,
      iconColor: `#FFC7EE`,
    },
    complete: {},
  },
  hidePostalCode: true,
};

export default function CardSection() {
    return <CardElement options={cardElementOptions} />;
}