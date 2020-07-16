import React, { useState, Fragment } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  ColorProps,
  TypographyProps,
  BorderProps,
  GridProps,
  space,
  layout,
  color,
  typography,
  border,
  position,
  grid,
} from "styled-system";
import styled from "styled-components";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const Button = styled.button<
  SpaceProps &
    LayoutProps &
    ColorProps &
    TypographyProps &
    BorderProps &
    PositionProps &
    GridProps
>`
  ${space};
  ${layout};
  ${color};
  ${typography};
  ${border}
  ${position};
  ${grid};
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
        width={[40, 60, 80, 100, 100]}
        height="fit-content"
        display="grid"
        fontSize={[1, 1, 1, 3, 3]}
        color="athensGray"
        py={1}
        bg="transparent"
        border={1}
        borderColor="athensGray"
        borderStyle="solid"
        gridColumn="1"
        gridRow="5"
      >
        BUY
      </Button>
    </Fragment>
  );
};
export default BuyButton;
