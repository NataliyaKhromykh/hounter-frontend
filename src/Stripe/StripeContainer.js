import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import './CheckoutForm.css';

const PUBLIC_KEY = "pk_test_51PxK9sP0wNJluAGysy1rVcff0Sj03rlnrszTTT8xV3KqbwJ4siFUuKJHTVtiqihzpfVG5mK23ImpsZqp13NBBdJS00FOVRYI7b";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
      
    </Elements>
  );
};

export default Stripe;