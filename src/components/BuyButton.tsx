import React, { useState, Fragment } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  SpaceProps,
  TypographyProps,
  BorderProps,
  BackgroundProps,
  space,
  typography,
  border,
  background,
  LayoutProps,
  layout,
} from "styled-system";
import styled from "styled-components";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const Button = styled.button<
  SpaceProps & TypographyProps & BorderProps & BackgroundProps & LayoutProps
>`
  width: auto;
  white-space: nowrap;
  ${space};
  ${typography};
  ${border};
  ${background};
  ${layout};
`;

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);

const BuyButton = () => {
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
        successUrl: `${process.env.REACT_APP_BASE_URL}/projects`,
        cancelUrl: `${process.env.REACT_APP_BASE_URL}/projects`,
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
      <Button
        role="link"
        onClick={handleClick}
        fontSize={[1, 2, 3, 4]}
        py={[1, null, null, null, null, null, null, null, null, 2]}
        px={[2, null, 3, 4, null, 4, null, null, null, 5]}
        mt={[2, null, null, null, 3, null, null, null, null, 4]}
        background="transparent"
        border={1}
        borderStyle="solid"
        height="fit-content"
      >
        BUY THE MAG
      </Button>
    </Fragment>
  );
};
export default BuyButton;
