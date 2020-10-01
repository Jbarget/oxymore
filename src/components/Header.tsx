import React from "react";
import styled from "styled-components";
import {
  space,
  typography,
  layout,
  flexbox,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
} from "styled-system";
import NavMenu from "./NavMenu";
import LanguageButtons from "./LanguageButtons";
import { NavLink, useLocation } from "react-router-dom";

const HeaderContainer = styled.header<SpaceProps & FlexboxProps>`
  display: flex;
  width: 100%;
  ${space};
  ${flexbox};
`;

const H1 = styled.h1<SpaceProps & TypographyProps & GridProps>`
  ${typography};
`;

const Container = styled.div<LayoutProps>`
  ${layout};
`;

const HeaderLogo = () => {
  const fontSizes = [1, 2, 3, 4];

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
    <HeaderContainer alignItems="center" justifyContent="space-between" pb={6}>
      <HeaderLogo />
      <Container display="flex">
        <LanguageButtons />
        <NavMenu />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
