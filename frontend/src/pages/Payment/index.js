import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe("pk_test_51H7Hs0CJhabJ2fSRM7gMfnsInB3asKP17ENirlGHpbKGjHJnQR5ftp8B6AG4t0Z2KOHL8P2N4rvG0xgubuTVq0RS00nVHz409Y")

export default function index() {
  return (
      <div>
          <Elements stripe={stripePromise}>
              <CheckoutForm />
          </Elements>
      </div>
  );
}
