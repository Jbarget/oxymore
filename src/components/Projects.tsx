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
import stairs from "./assets/project-page/stairs-720.png";
import shell from "./assets/project-page/shell-720.png";
import eye from "./assets/project-page/eye-720.png";
import statue from "./assets/project-page/statue-720.png";
import dragon from "./assets/project-page/dragon-720.png";
import knife from "./assets/project-page/knife-720.png";
import mask from "./assets/project-page/mask-720.png";
import spider from "./assets/project-page/spider-720.png";
import magnify from "./assets/project-page/magnify-720.png";
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

const BuyButtonContainer = styled.div<PositionProps & SpaceProps>`
  ${position};
  ${space};
`;
const Img = styled.img<LayoutProps & GridProps & FlexboxProps>`
  ${layout};
  ${grid};
  ${flexbox};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
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
        gridTemplateRows="repeat(4, 1fr)"
        display="grid"
        justifyItems="center"
        alignItems="center"
      >
        <Img
          src={stairs}
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[1, 1, 1, 1, "1/3"]}
          maxWidth={["100%", "100%", "100%", "100%", "30%"]}
        />
        <Img
          src={shell}
          gridColumn={[2, 2, 2, 2, "2/4"]}
          gridRow={[2, 2, 2, 2, 1]}
          maxWidth={["100%", "100%", "100%", "100%", "15%"]}
        />
        <Img
          src={eye}
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[3, 3, 3, 3, 1]}
          maxWidth={["100%", "100%", "100%", "100%", "30%"]}
        />
        <Img
          src={statue}
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[4, 4, 4, 4, "2/4"]}
          maxWidth={["100%", "100%", "100%", "100%", "30%"]}
        />
        <Img
          src={dragon}
          gridColumn={[2, 2, 2, 2]}
          gridRow={[5, 5, 5, 5, 2]}
          maxWidth={["100%", "100%", "100%", "100%", "30%"]}
        />
        <Img
          src={knife}
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[6, 6, 6, 6, 3]}
          maxWidth={["100%", "100%", "100%", "100%", "30%"]}
        />
        <Img
          src={mask}
          gridColumn={[2, 2, 2, 2, "1/3"]}
          gridRow={[7, 7, 7, 7, "1/3"]}
          maxWidth={["100%", "100%", "100%", "100%", "15%"]}
        />
        <Img
          src={spider}
          gridColumn={[2, 2, 2, 2, "1/3"]}
          gridRow={[8, 8, 8, 8, 3]}
          maxWidth={["100%", "100%", "100%", "100%", "15%"]}
        />
        <Img
          src={magnify}
          gridColumn={[2, 2, 2, 2, "2/4"]}
          gridRow={[9, 9, 9, 9, 3]}
          maxWidth={["100%", "100%", "100%", "100%", "15%"]}
        />
      </Container>
      <BuyButtonContainer
        position="fixed"
        bottom={["40%", "40%", "40%", "40%", "5%"]}
        p={6}
        zIndex={zIndexes.inFront}
      >
        <BuyButton
          successUrl={`${process.env.REACT_APP_BASE_URL}/projects`}
          cancelUrl={`${process.env.REACT_APP_BASE_URL}/projects`}
        />
      </BuyButtonContainer>

      <Scrollback
        display={["block", "block", "block", "block", "none"]}
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
