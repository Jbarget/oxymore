import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import {
  color,
  typography,
  position,
  grid,
  space,
  ColorProps,
  TypographyProps,
  PositionProps,
  GridProps,
  SpaceProps,
} from "styled-system";
import { zIndexes } from "./theme";

const overlayStyles = css`
  display: -webkit-flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  border: none;
  background-image: url("/assets/nav-menu/background-inverted-720.png");
  background-size: cover;
  opacity: 1;
  top: 0;
  position: fixed;
  background-color: white;
  z-index: ${zIndexes.overlay};
`;

const Overlay = styled.dialog<{ isOpen: boolean }>`
  display: none;
  ${(props) => props.isOpen && overlayStyles}
`;

const MenuButton = styled.button<TypographyProps & PositionProps>`
  border: none;
  background: transparent;
  ${typography};
  ${position};
`;

const MenuContainer = styled.div<GridProps>`
  ${grid};
`;

const Menu = styled.ul<GridProps & TypographyProps & SpaceProps>`
  ${grid};
  ${typography};
  ${space};
`;

const MenuLink = styled(NavLink)<ColorProps & TypographyProps & PositionProps>`
  ${color};
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

interface LinkProps {
  page: string;
  url: string;
}

const Link = ({ page, url }: LinkProps) => {
  return (
    <MenuContainer
      key={page}
      gridTemplateRows="max-content"
      gridTemplateColumns="max-content"
    >
      <MenuText>
        <MenuLink to={url} color="black" fontSize={[5, 6, 7, 8]}>
          {page}
        </MenuLink>
      </MenuText>
    </MenuContainer>
  );
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fontSizes = [1, 2, 3, 4];
  const { t } = useTranslation();
  const Links: LinkProps[] = [
    {
      page: `${t("nav.about-us")}`,
      url: "/about-us",
    },
    {
      page: `${t("nav.manifesto")}`,
      url: "/manifesto",
    },
    {
      page: `${t("nav.contact")}`,
      url: "/contact-us",
    },
    {
      page: `${t("nav.advertising")}`,
      url: "/advertising",
    },
    {
      page: `${t("nav.buy")}`,
      url: "/buy",
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
          left={30}
          top={24}
          color="black"
          onClick={() => setIsOpen(!isOpen)}
        >
          OXYMORE
        </MenuLink>

        <MenuButton
          onClick={() => setIsOpen(false)}
          style={{ outline: "none", color: "black" }}
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
          gridColumn={["2/3", null, null, "1/2"]}
          p={4}
        >
          {Links.map(Link)}
        </Menu>
      </Overlay>
    </Fragment>
  );
};

export default NavMenu;
