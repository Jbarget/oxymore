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
import i18next from "i18next";
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
  ${space};
  ${typography};
  ${grid};
`;

const Container = styled.div<
  FlexboxProps & GridProps & LayoutProps & SpaceProps & TypographyProps
>`
  background-color: black;
  width: 100%;
  ${flexbox};
  ${grid};
  ${layout};
  ${space};
  ${typography};
`;

const LangButton = styled.button<SpaceProps & TypographyProps>`
  background: transparent;
  border: none;
  ${typography};
  ${space};
  transition: transform 0.2s;
  transform-origin: left;
  transform-origin: right;
  &:hover {
    transform: scale(1.05);
`;

const Header = () => {
  const fontSizes = [0, null, null, null, null, 1, 4, null, null, 5];
  const onLangClick = useCallback(
    (countryId: string) => () => i18next.changeLanguage(countryId),
    []
  );

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
          <H1 fontSize={fontSizes} style={{ zIndex: 2 }}>
            OXYMORE
          </H1>
        </Container>
      </NavLink>
      <Container display="flex" gridColumn={3}>
        <Container display="flex" flexDirection="row" justifyContent="flex-end">
          <LangButton
            onClick={onLangClick("en")}
            style={{ transformOrigin: "right" }}
            fontSize={fontSizes}
            px={2}
          >
            EN
          </LangButton>
          <LangButton
            onClick={onLangClick("es")}
            style={{ transformOrigin: "left" }}
            fontSize={fontSizes}
            px={2}
          >
            ES
          </LangButton>
        </Container>
        <Container display="flex" justifyContent="flex-end">
          <NavMenu />
        </Container>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
