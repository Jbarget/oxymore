import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import {
  color,
  layout,
  space,
  typography,
  position,
  grid,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  PositionProps,
  GridProps,
} from "styled-system";

const overlayStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
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

const Logo = styled.p<PositionProps & LayoutProps & TypographyProps>`
${position}
${layout}
${typography}
`;

const MenuButton = styled.button<
  LayoutProps & TypographyProps & SpaceProps & GridProps & PositionProps
>`
  display: grid;
  border: none;
  background: transparent;
  ${layout}
  ${typography}
  ${space}
  ${grid}
  ${position}
`;

const Grid = styled.div<GridProps>`
  display: grid;
  ${grid};
`;

const MenuContainer = styled.div<SpaceProps>`
  ${space};
`;

const Menu = styled.ul<GridProps & TypographyProps>`
  ${grid};
  ${typography};
`;

const MenuLink = styled(NavLink)<ColorProps & SpaceProps & TypographyProps>`
  ${color};
  ${space};
  ${typography};
  }
`;

const MenuText = styled.li`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.01);
    transform-origin: left;
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
          fontSize={[3, 4, 5, 6, null, 7, null, 8]}
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
        fontSize={[1, 2, 3, 4]}
        py={3}
        px={[1, 2]}
        gridColumn={4}
      >
        MENU
      </MenuButton>
      <Overlay isOpen={isOpen}>
        <Logo fontSize={3} position="absolute" left={30} top={30}>
          OXYMORE
        </Logo>
        <NavLink to="/projects">
          <MenuButton
            onClick={() => setIsOpen(false)}
            style={{ outline: "none" }}
            fontSize={3}
            position="absolute"
            right={30}
            top={30}
          >
            BACK
          </MenuButton>
        </NavLink>
        <Grid
          gridColumnGap={5}
          gridRowGap={4}
          gridTemplateColumns={[
            "20px 1fr 20px",
            "10px 1fr 10px",
            "10px 1fr 10px",
            "1fr 10px 10px",
          ]}
        >
          <Menu
            onClick={() => setIsOpen(!isOpen)}
            textAlign={["center", null, null, "start"]}
            gridColumn={["2/3", null, null, "1/2"]}
          >
            {Links.map(Link)}
          </Menu>
        </Grid>
      </Overlay>
    </Fragment>
  );
};

export default NavMenu;
