import {
  ABOUT_URL,
  ADVERTISING_URL,
  CONTACT_URL,
  HOME_URL,
  MANIFESTO_URL,
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
import { NavLink, useLocation } from "react-router-dom";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

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

const OpenNavMenuButton = styled.button<ColorProps & TypographyProps>`
  ${color};
  ${typography};
  border: none;
  background: transparent;
  transition: transform 1s;
  &:hover {
    transform: scale(1.01);
    color: white;
  }
`;

const BackButton = styled(OpenNavMenuButton)<
  ColorProps & PositionProps & TypographyProps
>`
  ${color};
  ${position};
  ${typography};
  &:hover {
    color: ${theme.colors.copyOne};
  }
`;

const ReturnToHomePage = styled(NavLink)<
  ColorProps & PositionProps & TypographyProps
>`
  ${color};
  ${position};
  ${typography};
  &:hover {
    color: ${theme.colors.copyOne};
  }
`;

const Menu = styled.ul<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
`;

const MenuItem = styled.li`
  transition: transform 0.4s;
  transform-origin: left;
  &:hover {
    transform: scale(1.01);
  }
`;

const MenuLink = styled(NavLink)<ColorProps & TypographyProps>`
  ${typography};
  ${color};
  &:hover {
    color: ${theme.colors.copyOne};
  }
`;

const GoToBuyPage = styled.button<TypographyProps & ColorProps>`
  ${typography};
  ${color};
  border: none;
  background: transparent;
  transition: transform 0.4s;
  transform-origin: left;
  &:hover {
    transform: scale(1.01);
    color: ${theme.colors.copyOne};
  }
`;

interface LinkProps {
  page: string;
  url: string;
}

const Link = ({ page, url, onClick }: LinkProps & { onClick: () => void }) => {
  return (
    <MenuItem>
      <MenuLink
        to={url}
        fontSize={[5, 6, 7, 8]}
        color={`${theme.colors.copyTwo}`}
        onClick={onClick}
      >
        {page}
      </MenuLink>
    </MenuItem>
  );
};

const StripeMenuLink: React.FC = () => {
  const [error, setError] = useState<string>();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Fragment>
      {error && <p>{error}</p>}
      <MenuItem>
        <GoToBuyPage
          onClick={redirectToCheckout(setError, pathname)}
          fontSize={[5, 6, 7, 8]}
          color={`${theme.colors.copyTwo}`}
        >
          {t("nav.buy")}
        </GoToBuyPage>
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
      <OpenNavMenuButton
        onClick={() => setIsOpen(!isOpen)}
        fontSize={fontSizes}
      >
        MENU
      </OpenNavMenuButton>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <ReturnToHomePage
          to={HOME_URL}
          onClick={() => setIsOpen(!isOpen)}
          position="absolute"
          left={24}
          top={24}
          color="copyTwo"
          fontSize={fontSizes}
        >
          OXYMORE
        </ReturnToHomePage>
        <BackButton
          onClick={() => setIsOpen(!isOpen)}
          position="absolute"
          right={24}
          top={24}
          color="copyTwo"
          fontSize={fontSizes}
        >
          BACK
        </BackButton>
        <Menu textAlign={["center", "center", "start"]} p={4}>
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
