import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import menuButton from "./assets/nav-menu/menu-button.png";
import {
  space,
  SpaceProps,
  TypographyProps,
  typography,
  layout,
  LayoutProps,
  border,
  BorderProps,
  background,
  BackgroundProps,
} from "styled-system";

const visibleStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 36px;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-family: SangBleu OG Serif Light Regular;
  border: none;
`;
const NavMenuOverlay = styled.dialog<{ isOpen: boolean }>`
  display: none;
  ${(props) => props.isOpen && visibleStyles}
`;

const MenuButton = styled.button<
  TypographyProps & LayoutProps & BorderProps & BackgroundProps
>`
${typography}
  ${layout}
  ${border}
${background}
  
`;

const MenuItem = styled.li<SpaceProps & TypographyProps & LayoutProps>`
  color: black;
  ${space}
  ${typography}
  ${layout}

  &:focus,
  &:hover {
    font-size: 32px;
  }
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Fragment>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        width={50}
        border="none"
        background="transparent"
        style={{ outline: "none" }}
        fontSize={[1, 2, 3]}
      >
        MENU
      </MenuButton>
      <NavMenuOverlay isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <ul>
          <MenuItem
            fontSize={[4, 4, 5, 5, 5]}
            p={[1, 2, 4, 4]}
            color="black"
            height={[44, 44, 66, 66, 66]}
          >
            {t("nav.manifesto")} <NavLink to="/manifesto"></NavLink>
          </MenuItem>

          <MenuItem
            fontSize={[4, 4, 5, 5, 5]}
            p={[1, 2, 4, 4]}
            color="black"
            height={[44, 44, 66, 66, 66]}
          >
            {t("nav.advertising")}
            <NavLink to="/advertising"></NavLink>
          </MenuItem>

          <MenuItem
            fontSize={[4, 4, 5, 5, 5]}
            p={[1, 2, 4, 4]}
            color="black"
            height={[44, 44, 66, 66, 66]}
          >
            {t("nav.about-us")}
            <NavLink to="/about-us"></NavLink>
          </MenuItem>

          <MenuItem
            fontSize={[4, 4, 5, 5, 5]}
            p={[1, 2, 4, 4]}
            color="black"
            height={[44, 44, 66, 66, 66]}
          >
            {t("nav.contact")} <NavLink to="/contact"></NavLink>
          </MenuItem>

          <MenuItem
            fontSize={[4, 4, 5, 5, 5]}
            p={[1, 2, 4, 4]}
            color="black"
            height={[44, 44, 66, 66, 66]}
          >
            {t("nav.buy")} <NavLink to="/buy"></NavLink>
          </MenuItem>
        </ul>
      </NavMenuOverlay>
    </Fragment>
  );
};

export default NavMenu;
