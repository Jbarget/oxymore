import React, { useState, Fragment, useCallback } from "react";
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
import redirectToCheckout from "../helpers/redirectToCheckout";

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
  ${(props) => props.isOpen && overlayStyles}
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

const Link = ({ page, url, onClick }: LinkProps & { onClick: () => void }) => {
  return (
    <MenuText key={url} onClick={onClick}>
      <MenuLink to={url} fontSize={[5, 6, 7, 8]}>
        {page}
      </MenuLink>
    </MenuText>
  );
};
const BuyLink = styled.button<TypographyProps>`
  border: none;
  background: transparent;
  ${typography};
`;

const StripeMenuLink: React.FC = () => {
  const [error, setError] = useState<string>();
  const { t } = useTranslation();

  return (
    <Fragment>
      {error && <p>{error}</p>}
      <MenuText>
        <BuyLink onClick={redirectToCheckout(setError)} fontSize={[5, 6, 7, 8]}>
          {t("nav.buy")}
        </BuyLink>
      </MenuText>
    </Fragment>
  );
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fontSizes = [1, 2, 3, 4];
  const { t } = useTranslation();
  const toggleMenuIsOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const links: LinkProps[] = [
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

        <Menu textAlign={["center", null, null, "start"]} p={4}>
          {links.map((props) => (
            <Link onClick={toggleMenuIsOpen} {...props} />
          ))}
          <StripeMenuLink />
        </Menu>
      </Overlay>
    </Fragment>
  );
};

export default NavMenu;
