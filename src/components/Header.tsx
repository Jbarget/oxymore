import React, { useCallback } from "react";
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
import LanguageButton from "./LanguageButton";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.div<
  LayoutProps & SpaceProps & GridProps & PositionProps & FlexboxProps
>`
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

const Header = () => {
  const fontSizes = [0, null, null, null, null, 1, 4, null, null, 5];

  return (
    <HeaderContainer
      gridTemplateColumns={["repeat(3, 1fr)"]}
      display="grid"
      position="absolute"
      top={6}
      alignItems="center"
      px={8}
    >
      <NavLink to="/">
        <Container gridColumn={1}>
          <H1 fontSize={fontSizes}>OXYMORE</H1>
        </Container>
      </NavLink>
      <Container display="flex" gridColumn={3} justifyContent="space-between">
        <LanguageButton />
        <NavMenu />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
