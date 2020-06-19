import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";

const visibleStyles = css`
  display: flex;
  flex-direction: column;
  font-size: 36px;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  font-family: SangBleu OG Serif;
  background-color: rgba(255, 255, 255, 0.5);
`;

const NavMenuOverlay = styled.dialog<{ isOpen: boolean }>`
  display: none;
  ${(props) => props.isOpen && visibleStyles}
`;

const MenuButton = styled.button`
  position: absolute;
  right: 1em;
  top: 1em;
  height: 50px;
  width: 50px;
  background-color: #555;
  cursor: pointer;
`;

const MenuItem = styled.h1`
  color: #000000;
  padding: 0.5em;
  &:focus,
  &:hover {
    font-size: 40px;
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
      <MenuButton onClick={() => setIsOpen(!isOpen)}>click me</MenuButton>
      <NavMenuOverlay isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <NavLink to="/manifesto" style={{ textDecoration: "none" }}>
          <MenuItem>{t("nav.manifesto")} </MenuItem>
        </NavLink>
        <NavLink to="/advertising" style={{ textDecoration: "none" }}>
          <MenuItem>{t("nav.advertising")}</MenuItem>
        </NavLink>
        <NavLink to="/about-us" style={{ textDecoration: "none" }}>
          <MenuItem>{t("nav.aboutUs")}</MenuItem>
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: "none" }}>
          <MenuItem>{t("nav.contact")}</MenuItem>
        </NavLink>
        <NavLink to="/buy" style={{ textDecoration: "none" }}>
          <MenuItem>{t("nav.buy")}</MenuItem>
        </NavLink>
      </NavMenuOverlay>
    </Fragment>
  );
};

export default NavMenu;
