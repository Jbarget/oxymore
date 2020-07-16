import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";

import {
  space,
  SpaceProps,
  TypographyProps,
  typography,
  layout,
  LayoutProps,
  position,
  PositionProps,
  color,
  ColorProps,
  border,
  BorderProps,
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

type MenuProps = SpaceProps &
  TypographyProps &
  PositionProps &
  LayoutProps &
  ColorProps &
  BorderProps;

const MenuButton = styled.button<MenuProps>`
  ${position}
  ${layout}
  ${border}
  ${color}
`;

const MenuItem = styled.li<MenuProps>`
  ${space}
  ${typography}
  ${layout}
  ${color}
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
        position="absolute"
        right={30}
        top={30}
        width={50}
        border="none"
        bg="transparent"
        style={{ outline: "none" }}
        color="athensGray"
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
