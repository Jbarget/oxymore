import React, { useState, Fragment } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  ColorProps,
  TypographyProps,
  BorderProps,
  space,
  layout,
  color,
  typography,
  flexbox,
  border,
  position,
} from "styled-system";
import styled from "styled-components";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

type LogoProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  ColorProps &
  SpaceProps &
  TypographyProps &
  BorderProps;

const Button = styled.button<LogoProps>`
  ${space};
  ${layout};
  ${color};
  ${typography};
  ${flexbox};
  ${border}
  ${position};
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
        position="absolute"
        display="flex"
        justifyContent="center"
        fontSize={[1, 1, 1, 3, 3]}
        font-family="SangBleu OG Serif Light Regular"
        color="athensGray"
        py={1}
        bg="transparent"
        left={30}
        bottom={30}
        border={1}
        borderColor="athensGray"
        borderStyle="solid"
      >
        BUY THE MAG
      </Button>
    </Fragment>
  );
};
export default BuyButton;
