import React, { useCallback } from "react";
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
import BuyButton from "./BuyButton";
import { zIndexes } from "./theme";

const Main = styled.main<PositionProps & FlexboxProps & LayoutProps>`
  display: flex;
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

const BuyButtonContainer = styled.div<PositionProps>`
  ${position};
`;
const Img = styled.img<LayoutProps & GridProps & FlexboxProps>`
  ${layout};
  ${grid};
  ${flexbox};
`;
type ScrollbackProps = PositionProps &
  TypographyProps &
  BackgroundProps &
  LayoutProps;

const Scrollback = styled.button<ScrollbackProps>`
  ${position};
  ${typography};
  ${background};
  ${layout};
  border: none;
  z-index: 1;
`;

const Projects = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main
      justifyContent="center"
      alignItems="center"
      position="relative"
      flexGrow={1}
    >
      <Container
        gridTemplateColumns="repeat(3, 1fr)"
        display="grid"
        height="100%"
      >
        <Img
          src={stairs}
          gridColumn={[2, 2, 1]}
          maxWidth={["75%", "75%", "50%", "30%"]}
          justifySelf={["center", "center", "end"]}
        />
        <Img
          src={shell}
          gridColumn={2}
          maxWidth={["75%", "75%", "50%", "30%"]}
          justifySelf={["center", "center"]}
          alignSelf={["initial", "initial", "center"]}
        />
        <Img
          src={eye}
          gridColumn={[2, 2, 3]}
          maxWidth={["75%", "75%", "50%", "30%"]}
          justifySelf={["center", "center"]}
        />
        <Img
          src={statue}
          gridColumn={[2, 2, 1]}
          maxWidth={["75%", "75%", "50%", "30%"]}
          justifySelf={["center", "center"]}
        />
        <Img
          src={dragon}
          gridColumn={2}
          maxWidth={["75%", "75%", "50%", "30%"]}
          justifySelf={["center", "center", "start"]}
          alignSelf={["initial", "initial", "end"]}
        />
        <Img
          src={knife}
          gridColumn={[2, 2, 3]}
          maxWidth={["75%", "75%", "50%", "30%"]}
          justifySelf={["center", "center", "start"]}
        />
        <Img
          src={mask}
          gridColumn={[2, 2, 1]}
          maxWidth={["75%", "75%", "50%", "30%"]}
          justifySelf={["center", "center"]}
        />
        <Img
          src={spider}
          gridColumn={[2, 2, 2]}
          maxWidth={["75%", "75%", "50%", "30%"]}
          justifySelf={["center", "center"]}
          alignSelf={["initial", "initial", "center"]}
        />
        <Img
          src={magnify}
          gridColumn={[2, 2, 3]}
          maxWidth={["75%", "75%", "50%", "30%"]}
          justifySelf={["center", "center"]}
        />
      </Container>
      <BuyButtonContainer position="fixed" top="50%" zIndex={zIndexes.inFront}>
        <BuyButton />
      </BuyButtonContainer>

      <Scrollback
        display={["block", "block", "none"]}
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
