import React from "react";
import styled from "styled-components";
import {
  space,
  typography,
  layout,
  flexbox,
  grid,
  position,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  PositionProps,
} from "styled-system";
import NavMenu from "./NavMenu";
import LanguageButtons from "./LanguageButtons";
import { NavLink, useLocation } from "react-router-dom";

const HeaderContainer = styled.header<
  LayoutProps & SpaceProps & GridProps & PositionProps & FlexboxProps
>`
  display: flex;
  width: 100%;
  ${layout};
  ${space};
  ${grid};
  ${position};
  ${flexbox};
`;

const H1 = styled.h1<SpaceProps & TypographyProps & GridProps>`
  ${typography};
`;

const Container = styled.div<
  FlexboxProps & GridProps & LayoutProps & SpaceProps & TypographyProps
>`
  ${flexbox};
  ${grid};
  ${layout};
`;

const HeaderLogo = () => {
  const fontSizes = [0, null, null, null, null, 1, 4, null, null, 5];

  return (
    <NavLink to="/oxymore">
      <H1 fontSize={fontSizes}>OXYMORE</H1>
    </NavLink>
  );
};

const Header = () => {
  const location = useLocation();
  const hideHeaderViews = ["/", "/oxymore"];

  if (hideHeaderViews.includes(location.pathname)) {
    return null;
  }

  return (
    <HeaderContainer
      alignItems="center"
      justifyContent="space-between"
      py={6}
      px={8}
    >
      <HeaderLogo />
      <Container display="flex">
        <LanguageButtons />
        <NavMenu />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
