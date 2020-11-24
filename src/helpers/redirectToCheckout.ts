import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { allowedCountries } from "../lib/constants";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);

interface BuyButtonProps {
  successUrl: string;
  cancelUrl: string;
}
const redirectToCheckout = ({ successUrl, cancelUrl }: BuyButtonProps) => {
  const [error, setError] = useState<string>();

  const handleClick = async () => {
    try {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      if (!stripe) {
        return null;
      }

      await stripe.redirectToCheckout({
        lineItems: [
          {
            price: `${process.env.REACT_APP_STRIPE_PRICE_ID}`,
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl,
        cancelUrl,
        shippingAddressCollection: {
          allowedCountries: allowedCountries,
        },
      });
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
    } catch (error) {
      setError(error.message);
    }
  };

  return { error };
};
export default redirectToCheckout;
