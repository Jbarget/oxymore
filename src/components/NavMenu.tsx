import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import menuButton from "./assets/nav-menu/menu-button.png";
import {
  color,
  layout,
  space,
  typography,
  position,
  border,
  background,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  PositionProps,
  BorderProps,
  BackgroundProps,
} from "styled-system";

const { t } = useTranslation();
const Links: LinkProps[] = [
  {
    page: `${t("nav.about-us")}`,
    url: "/",
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
    url: "/advertsing",
  },
  {
    page: `${t("nav.buy")}`,
    url: "/buy",
  },
];

const overlayStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  border: none;
  background-image: url("/assets/nav-menu/background-inverted.png");
  background-size: cover;
  background-color: pink;
  opacity: 1;
`;

const Overlay = styled.dialog<{ isOpen: boolean }>`
  display: none;
  ${(props) => props.isOpen && overlayStyles}
`;

const MenuButton = styled.button<
  PositionProps & LayoutProps & BorderProps & BackgroundProps
>`
${position}
${layout}
${border}
${background}
`;

const LinkContainer = styled.div<LayoutProps & SpaceProps>`
  ${layout};
  ${space};
`;

const Page = styled.li<ColorProps & SpaceProps & TypographyProps>`
  ${color};
  ${space};
  ${typography};
  text-transform: uppercase;
`;

const PageLink = styled(NavLink)<ColorProps & SpaceProps>`
  ${color};
  ${space};
`;

interface LinkProps {
  page: string;
  url: string;
}

const Link = ({ page, url }: LinkProps) => {
  return (
    <LinkContainer key={page}>
      <Page color="athensGray" fontSize={[4, 5, 6]}>
        {page}
      </Page>
      <PageLink to={url}></PageLink>
    </LinkContainer>
  );
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        position="absolute"
        right={30}
        top={30}
        width={50}
        border="none"
        background="transparent"
        style={{ outline: "none" }}
      >
        <img src={menuButton} />
      </MenuButton>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <ul>{Links.map(Link)}</ul>
      </Overlay>
    </Fragment>
  );
};

export default NavMenu;
