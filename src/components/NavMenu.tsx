import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import navButton from "./assets/nav-button/placeholder-nav.jpeg";
import { space, SpaceProps, TypographyProps, typography } from "styled-system";

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
`;

type MenuItemProps = SpaceProps & TypographyProps;

const MenuItem = styled.li<MenuItemProps>`
  ${space};
  ${typography};
  height: 66px;
  color: #000000;
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
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <img src={navButton} alt="menu button" />
      </MenuButton>
      <NavMenuOverlay isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <ul>
          <NavLink to="/manifesto" style={{ textDecoration: "none" }}>
            <MenuItem fontSize={[4, 4, 4, 5]} p={[1, 2, 4, 4]}>
              {t("nav.manifesto")}
            </MenuItem>
          </NavLink>
          <NavLink to="/advertising" style={{ textDecoration: "none" }}>
            <MenuItem fontSize={[4, 4, 4, 5]} p={[1, 2, 4, 4]}>
              {t("nav.advertising")}
            </MenuItem>
          </NavLink>
          <NavLink to="/about-us" style={{ textDecoration: "none" }}>
            <MenuItem fontSize={[4, 4, 4, 5]} p={[1, 2, 4, 4]}>
              {t("nav.about-us")}
            </MenuItem>
          </NavLink>
          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <MenuItem fontSize={[4, 4, 4, 5]} p={[1, 2, 4, 4]}>
              {t("nav.contact")}
            </MenuItem>
          </NavLink>
          <NavLink to="/buy" style={{ textDecoration: "none" }}>
            <MenuItem fontSize={[4, 4, 4, 5]} p={[1, 2, 4, 4]}>
              {t("nav.buy")}
            </MenuItem>
          </NavLink>
        </ul>
      </NavMenuOverlay>
    </Fragment>
  );
};

export default NavMenu;
