import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import {
  color,
  space,
  typography,
  position,
  grid,
  flexbox,
  ColorProps,
  SpaceProps,
  TypographyProps,
  PositionProps,
  GridProps,
  FlexboxProps,
} from "styled-system";

const overlayStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  border: none;
  background-image: url("/assets/nav-menu/background-inverted.png");
  background-size: cover;
  opacity: 1;
`;

const Overlay = styled.dialog<{ isOpen: boolean }>`
  display: none;
  ${(props) => props.isOpen && overlayStyles}
`;

const Logo = styled.p<PositionProps & TypographyProps>`
  ${position}
  ${typography}
`;

const MenuButton = styled.button<
  TypographyProps & PositionProps & FlexboxProps & SpaceProps
>`
  display: grid;
  border: none;
  background: transparent;
  ${typography}
  ${position}
  ${flexbox}
  ${space}
`;

const MenuContainer = styled.div<SpaceProps>`
  ${space};
`;

const Menu = styled.ul<GridProps & TypographyProps>`
  ${grid};
  ${typography};
`;

const MenuLink = styled(NavLink)<ColorProps & TypographyProps>`
  ${color};
  ${typography};
  }
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
    <MenuContainer key={page} p={1}>
      <MenuText>
        <MenuLink
          to={url}
          color="black"
          fontSize={[3, 4, 5, 6, null, 7, 9, 10]}
        >
          {page}
        </MenuLink>
      </MenuText>
    </MenuContainer>
  );
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const fontSizes = [0, null, null, null, null, 1, 4, null, null, 5];
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
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        fontSize={fontSizes}
        justifySelf="end"
        p={6}
      >
        MENU
      </MenuButton>
      <Overlay isOpen={isOpen}>
        <Logo fontSize={fontSizes} position="absolute" left={30} top={24}>
          OXYMORE
        </Logo>

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
        >
          {Links.map(Link)}
        </Menu>
      </Overlay>
    </Fragment>
  );
};

export default NavMenu;
