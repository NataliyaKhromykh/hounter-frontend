import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import './CheckoutForm.css';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!email) {
      setEmailError("Email is required");
      return;
    } else {
      setEmailError("");
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://hounter-backend-1.onrender.com/stripe/charge",
          {
            amount: 300,
            id: id,
            email: email,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccess(true);
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="test">
      {!messageSuccess ? (
        <form onSubmit={handleSubmit}>
          <input
            className="inputEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          <CardElement />

          <button type="submit">Subscribe Now</button>
        </form>
      ) : (
        <div>
          <h2>Your payment was successful!</h2>
        </div>
      )}
    </div>
  );
};
