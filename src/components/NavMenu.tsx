import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import {
  typography,
  position,
  grid,
  space,
  TypographyProps,
  PositionProps,
  SpaceProps,
  BackgroundProps,
} from "styled-system";
import { zIndexes } from "./theme";
import background from "./assets/backgrounds/background.png";
// import { loadStripe } from "@stripe/stripe-js";
// import { allowedCountries } from "../lib/constants";

type NavMenuProps = TypographyProps &
  SpaceProps &
  PositionProps &
  BackgroundProps;

const overlayStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  border: none;
  background-size: cover;
  opacity: 1;
  top: 0;
  right: 0;
  position: fixed;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: ${zIndexes.overlay};
`;

const Overlay = styled.dialog<{ isOpen: boolean }>`
  display: none;
  ${props => props.isOpen && overlayStyles}
`;

const Menu = styled.ul<NavMenuProps>`
  ${grid};
  ${typography};
  ${space};
`;

const MenuButton = styled.button<NavMenuProps>`
  border: none;
  background: transparent;
  ${typography};
  ${position};
`;

const MenuText = styled.li`
  transition: transform 0.4s;
  transform-origin: left;
  &:hover {
    transform: scale(1.01);
  }
`;

const MenuLink = styled(NavLink)<NavMenuProps>`
  ${typography};
  ${position};
`;

interface LinkProps {
  page: string;
  url: string;
}

const Link = ({ page, url }: LinkProps) => {
  return (
    <MenuText>
      <MenuLink to={url} fontSize={[5, 6, 7, 8]} key={page}>
        {page}
      </MenuLink>
    </MenuText>
  );
};

// const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);

// interface StripeLinkProps {
//   successUrl: string;
//   cancelUrl: string;
// }
// const StripeLink: React.FC<StripeLinkProps> = props => {
//   const { t } = useTranslation();
//   const { successUrl, cancelUrl } = props;
//   const [error, setError] = useState<string>();

//   const handleClick = async () => {
//     try {
//       // When the customer clicks on the button, redirect them to Checkout.
//       const stripe = await stripePromise;
//       if (!stripe) {
//         return null;
//       }

//       await stripe.redirectToCheckout({
//         lineItems: [
//           {
//             price: `${process.env.REACT_APP_STRIPE_PRICE_ID}`,
//             quantity: 1,
//           },
//         ],
//         mode: "payment",
//         successUrl,
//         cancelUrl,
//         shippingAddressCollection: {
//           allowedCountries: allowedCountries,
//         },
//       });
//       // If `redirectToCheckout` fails due to a browser or network
//       // error, display the localized error message to your customer
//       // using `error.message`.
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const BuyLink = styled.button<NavMenuProps>`
//     border: none;
//     background: transparent;
//   `;

//   return (
//     <Fragment>
//       {error && <p>{error}</p>}
//       <MenuText>
//         <BuyLink onClick={handleClick}>{`${t("nav.buy")}`}</BuyLink>
//       </MenuText>
//     </Fragment>
//   );
// };

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fontSizes = [1, 2, 3, 4];
  const { t } = useTranslation();
  const Links: LinkProps[] = [
    {
      page: `${t("nav.about-us")}`,
      url: "/about",
    },
    {
      page: `${t("nav.manifesto")}`,
      url: "/manifesto",
    },
    {
      page: `${t("nav.contact")}`,
      url: "/contact",
    },
    {
      page: `${t("nav.advertising")}`,
      url: "/advertising",
    },
  ];

  return (
    <Fragment>
      <MenuButton onClick={() => setIsOpen(!isOpen)} fontSize={fontSizes}>
        MENU
      </MenuButton>
      <Overlay isOpen={isOpen}>
        <MenuLink
          to="/oxymore"
          fontSize={fontSizes}
          position="absolute"
          left={24}
          top={24}
          onClick={() => setIsOpen(!isOpen)}
        >
          OXYMORE
        </MenuLink>

        <MenuButton
          onClick={() => setIsOpen(false)}
          fontSize={fontSizes}
          position="absolute"
          right={30}
          top={24}
        >
          BACK
        </MenuButton>

        <Menu
          onClick={() => setIsOpen(!isOpen)}
          textAlign={["center", null, null, "start"]}
          p={4}
        >
          {Links.map(Link)}
          {/* <StripeLink successUrl={successUrl} cancelUrl={cancelUrl} /> */}
        </Menu>
      </Overlay>
    </Fragment>
  );
};

export default NavMenu;
