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

import { zIndexes } from "./theme";
import { allowedCountries } from "../lib/constants";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const Button = styled.button<
  SpaceProps & TypographyProps & BorderProps & BackgroundProps & LayoutProps
>`
  width: auto;
  white-space: nowrap;
  z-index: ${zIndexes.inFront};
  ${space};
  ${typography};
  ${border};
  ${background};
  ${layout};
`;

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);

interface BuyButtonProps {
  successUrl: string;
  cancelUrl: string;
}
const BuyButton: React.FC<BuyButtonProps> = props => {
  const { successUrl, cancelUrl } = props;
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

  return (
    <Fragment>
      {error && <p>{error}</p>}
      <Button
        role="link"
        onClick={handleClick}
        fontSize={[0, 1, 3]}
        background="transparent"
        border={1}
        borderStyle="solid"
        height="fit-content"
        width="fit-content"
        py={[1, 1, 2, 3]}
        px={[1, 1, 2, 3]}
      >
        BUY THE MAG
      </Button>
    </Fragment>
  );
};
export default BuyButton;
