import {
  ABOUT_URL,
  ADVERTISING_URL,
  CONTACT_URL,
  MANIFESTO_URL,
  OXYMORE_URL,
} from "../constants/router-urls";
import {
  ColorProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  color,
  position,
  space,
  typography,
} from "styled-system";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";
import redirectToCheckout from "../helpers/redirectToCheckout";
import theme from "./theme";
import { useTranslation } from "react-i18next";

const overlayStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  border: none;
  opacity: 1;
  top: 0;
  right: 0;
  position: fixed;
  background-image: linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%);
  z-index: ${theme.zIndexes.overlay};
`;

const Overlay = styled.dialog<{ isOpen: boolean }>`
  display: none;
  ${props => props.isOpen && overlayStyles}
`;

const Menu = styled.ul<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const MenuButton = styled.button<TypographyProps & PositionProps & ColorProps>`
  border: none;
  background: transparent;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.01);
    color: ${theme.colors.athensGray};
  }
  ${typography};
  ${position};
  ${color};
`;

const MenuItem = styled.li`
  transition: transform 0.4s;
  transform-origin: left;
  &:hover {
    transform: scale(1.01);
  }
`;

const HomepageLink = styled(NavLink)<ColorProps>`
  ${color};
  &:hover {
    color: ${theme.colors.athensGray};
  }
`;

const MenuLink = styled(NavLink)<ColorProps & TypographyProps>`
  ${typography};
  ${color};
  &:hover {
    color: ${theme.colors.athensGray};
  }
`;

const BuyLink = styled.button<TypographyProps & ColorProps>`
  border: none;
  background: transparent;
  &:hover {
    color: ${theme.colors.athensGray};
  }
  ${typography};
  ${color};
`;

interface LinkProps {
  page: string;
  url: string;
}

const Link = ({ page, url, onClick }: LinkProps & { onClick: () => void }) => {
  return (
    <MenuItem onClick={onClick}>
      <MenuLink to={url} fontSize={[5, 6, 7, 8]} color="black">
        {page}
      </MenuLink>
    </MenuItem>
  );
};

const StripeMenuLink: React.FC = () => {
  const [error, setError] = useState<string>();
  const { t } = useTranslation();

  return (
    <Fragment>
      {error && <p>{error}</p>}
      <MenuItem>
        <BuyLink
          onClick={redirectToCheckout(setError)}
          fontSize={[5, 6, 7, 8]}
          color="black"
        >
          {t("nav.buy")}
        </BuyLink>
      </MenuItem>
    </Fragment>
  );
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fontSizes = [1, 2, 3, 4];
  const { t } = useTranslation();
  const toggleMenuIsOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const links: LinkProps[] = [
    {
      page: `${t("nav.about")}`,
      url: ABOUT_URL,
    },
    {
      page: `${t("nav.manifesto")}`,
      url: MANIFESTO_URL,
    },
    {
      page: `${t("nav.contact")}`,
      url: CONTACT_URL,
    },
    {
      page: `${t("nav.advertising")}`,
      url: ADVERTISING_URL,
    },
  ];

  return (
    <Fragment>
      <MenuButton onClick={() => setIsOpen(!isOpen)} fontSize={fontSizes}>
        MENU
      </MenuButton>
      <Overlay isOpen={isOpen}>
        <MenuButton
          fontSize={fontSizes}
          position="absolute"
          left={24}
          top={24}
          color="black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HomepageLink color="black" to={OXYMORE_URL}>
            OXYMORE
          </HomepageLink>
        </MenuButton>

        <MenuButton
          onClick={() => setIsOpen(false)}
          fontSize={fontSizes}
          position="absolute"
          right={30}
          top={24}
          color="black"
        >
          BACK
        </MenuButton>

        <Menu textAlign={["center", null, null, "start"]} p={4}>
          {links.map(props => (
            <Link key={props.page} onClick={toggleMenuIsOpen} {...props} />
          ))}
          <StripeMenuLink />
        </Menu>
      </Overlay>
    </Fragment>
  );
};

export default NavMenu;
