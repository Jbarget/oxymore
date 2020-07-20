import React, { Fragment, useCallback } from "react";
import styled from "styled-components";
import {
  space,
  typography,
  layout,
  flexbox,
  grid,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
} from "styled-system";
import NavMenu from "./NavMenu";
import i18next from "i18next";

const Container = styled.div<
  LayoutProps & FlexboxProps & SpaceProps & TypographyProps & GridProps
>`
  background-color: black;
  width: 100%;
  ${layout};
  ${flexbox};
  ${space};
  ${typography};
  ${grid};
`;

const H1 = styled.h1<SpaceProps & TypographyProps & GridProps>`
  ${space};
  ${typography};
  ${grid};
`;

const LangButton = styled.button<SpaceProps & TypographyProps & GridProps>`
  background: transparent;
  border: none;
  ${typography};
  ${space};
  ${grid};
  transition: transform 0.2s;
  transform-origin: left;
  transform-origin: right;
  &:hover {
    transform: scale(1.05);
`;

const MenuButton = styled.button<SpaceProps & TypographyProps & GridProps>`
  textdecoration: none;
  background: transparent;
  border: none;
  ${typography};
  ${space};
  ${grid};
`;

const Header = () => {
  const onLangClick = useCallback(
    (countryId: string) => () => i18next.changeLanguage(countryId),
    []
  );

  return (
    <Fragment>
      <Container
        p={6}
        gridTemplateColumns={["repeat(4, 1fr)", "repeat(3, 1fr)"]}
        display="grid"
      >
        <H1
          fontSize={[1, 2, 3, 4]}
          py={3}
          px={3}
          gridColumn={1}
          textAlign="start"
        >
          OXYMORE
        </H1>
        <Container gridColumn={3} display="flex" justifyContent="center">
          <LangButton
            onClick={onLangClick("en")}
            fontSize={[1, 2, 3, 4]}
            py={3}
            px={[1, 2]}
            style={{ transformOrigin: "right" }}
          >
            EN
          </LangButton>
          <LangButton
            onClick={onLangClick("es")}
            fontSize={[1, 2, 3, 4]}
            py={3}
            px={[1, 2]}
            style={{ transformOrigin: "left" }}
          >
            ES
          </LangButton>
        </Container>
        <NavMenu />
      </Container>
    </Fragment>
  );
};

export default Header;
