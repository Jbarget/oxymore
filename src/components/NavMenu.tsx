import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";

import {
  color,
  space,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
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
`;
const NavMenuOverlay = styled.dialog<{ isOpen: boolean }>`
  display: none;
  ${(props) => props.isOpen && visibleStyles}
`;

const MenuButton = styled.button`
  position: absolute;
  right: 1em;
  top: 1em;
`;

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <Fragment>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>click me</MenuButton>
      <NavMenuOverlay isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <NavLink to="/manifesto">{t("nav.navLink1")} </NavLink>
        <NavLink to="/advertising">{t("nav.navLink2")}</NavLink>
        <NavLink to="/about-us">{t("nav.navLink3")}</NavLink>
        <NavLink to="/contact">{t("nav.navLink4")}</NavLink>
        <NavLink to="/buy">{t("nav.navLink5")}</NavLink>
      </NavMenuOverlay>
    </Fragment>
  );
};

export default NavMenu;
