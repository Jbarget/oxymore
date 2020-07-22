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
  LayoutProps & SpaceProps & GridProps & PositionProps
>`
  width: 100%;
  ${layout};
  ${space};
  ${grid};
  ${position};
`;

const H1 = styled.h1<SpaceProps & TypographyProps & GridProps>`
  ${space};
  ${typography};
  ${grid};
`;

const LangButtonContainer = styled.div<FlexboxProps & GridProps & LayoutProps>`
  background-color: black;
  width: 100%;
  ${flexbox};
  ${grid};
  ${layout};
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
  const onLangClick = useCallback(
    (countryId: string) => () => i18next.changeLanguage(countryId),
    []
  );

  return (
    <HeaderContainer
      gridTemplateColumns={["repeat(4, 1fr)", "repeat(3, 1fr)"]}
      display="grid"
      position="absolute"
      top={4}
      px={7}
    >
      <NavLink to="/">
        <H1
          py={3}
          px={3}
          gridColumn={1}
          textAlign="start"
          fontSize={[1, 2, 3, 4]}
        >
          OXYMORE
        </H1>
      </NavLink>
      <LangButtonContainer
        gridColumn={3}
        display="flex"
        justifyContent="center"
      >
        <LangButton
          onClick={onLangClick("en")}
          py={3}
          px={[1, 2]}
          style={{ transformOrigin: "right" }}
          fontSize={[1, 2, 3, 4]}
        >
          EN
        </LangButton>
        <LangButton
          onClick={onLangClick("es")}
          py={3}
          px={[1, 2]}
          style={{ transformOrigin: "left" }}
          fontSize={[1, 2, 3, 4]}
        >
          ES
        </LangButton>
      </LangButtonContainer>
      <NavMenu />
    </HeaderContainer>
  );
};

export default Header;
