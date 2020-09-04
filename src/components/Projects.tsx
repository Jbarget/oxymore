import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  layout,
  space,
  flexbox,
  grid,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  GridProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
  BackgroundProps,
  background,
} from "styled-system";
import stairs from "./assets/project-page/stairs.png";
import shell from "./assets/project-page/shell.png";
import eye from "./assets/project-page/eye.png";
import statue from "./assets/project-page/statue.png";
import dragon from "./assets/project-page/dragon.png";
import knife from "./assets/project-page/knife.png";
import mask from "./assets/project-page/mask.png";
import spider from "./assets/project-page/spider.png";
import magnify from "./assets/project-page/magnify.png";
import Header from "./Header";
import BuyButton from "./BuyButton";

const Main = styled.main<PositionProps & FlexboxProps>`
  display: flex;
  height: 100vh;
  ${position};
  ${flexbox};
`;

const Container = styled.div<
  LayoutProps & FlexboxProps & GridProps & SpaceProps & PositionProps
>`
  ${layout}
  ${flexbox};
  ${grid};
  ${space};
  ${position};
  overflow: hidden;
`;

const Img = styled.img<GridProps>`
  ${grid};
`;

const Scrollback = styled.button<
  PositionProps & TypographyProps & BackgroundProps
>`
  ${position};
  ${typography};
  ${background};
  border: none;
  z-index: 1;
`;

const Projects = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main justifyContent="center" alignItems="center" position="relative">
      <Header />
      <Container
        gridTemplateColumns="repeat(3, 1fr)"
        position="absolute"
        top="10%"
        style={{ zIndex: 1 }}
        display="grid"
      >
        <Img src={stairs} gridColumn={2}></Img>
        <Img src={shell} gridColumn={2}></Img>
        <Img src={eye} gridColumn={2}></Img>
        <Img src={statue} gridColumn={2}></Img>
        <Img src={dragon} gridColumn={2}></Img>
        <Img src={knife} gridColumn={2}></Img>
        <Img src={mask} gridColumn={2}></Img>
        <Img src={spider} gridColumn={2}></Img>
        <Img src={magnify} gridColumn={2}></Img>
      </Container>
      <Container style={{ zIndex: 2 }} position="fixed">
        <BuyButton />
      </Container>

      <Scrollback
        position="fixed"
        bottom={6}
        left={6}
        fontSize={[3, 4]}
        background="transparent"
        onClick={scrollToTop}
      >
        UP
      </Scrollback>
    </Main>
  );
};

export default Projects;
