import React, { useState, Fragment } from "react";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_API_KEY as string
);

const BuyButton = () => {
  const [error, setError] = useState<string>();

  const handleClick = async () => {
    try {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      if (!stripe) {
        return null;
      }
      const transaction = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: process.env.REACT_APP_STRIPE_PRICE_ID as string,
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: `${process.env.REACT_APP_BASE_URL as string}/projects`,
        cancelUrl: `${process.env.REACT_APP_BASE_URL as string}/projects`,
        shippingAddressCollection: {
          allowedCountries: ["ES", "FR", "GB"],
        },
      });
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Fragment>
      {error && <p>{error}</p>}
      <button role="link" onClick={handleClick}>
        BUY
      </button>
    </Fragment>
  );
};
export default BuyButton;
