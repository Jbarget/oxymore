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
import { Link } from "react-router-dom";

const Main = styled.main<FlexboxProps & LayoutProps>`
  display: flex;
  height: 100%;
  ${flexbox};
  ${layout}
`;

const Container = styled.div<LayoutProps & FlexboxProps & GridProps>`
  ${layout}
  ${flexbox};
  ${grid};
`;

const BuyButtonContainer = styled.div<PositionProps & SpaceProps>`
  ${position};
  ${space};
`;

const ProjectLink = styled(Link)<LayoutProps & GridProps & FlexboxProps>`
  ${layout};
  ${grid};
  ${flexbox};
  display: flex;
`;

const Img = styled.img<LayoutProps>`
  ${layout};
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
`;

const Projects = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main justifyContent="center" alignItems="center">
      <Container
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(4, 1fr)"
        display="grid"
        justifyItems="center"
        alignItems="center"
        height={["90%", "100%"]}
      >
        <ProjectLink
          to="/editorial"
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[1, 1, 1, 1, 1]}
        >
          <Img
            src={stairs}
            maxWidth={["100%", "100%", "100%", "100%", "30%"]}
          />
        </ProjectLink>
        <ProjectLink
          to="/conscious-shopping"
          gridColumn={[2, 2, 2, 2, 2]}
          gridRow={[2, 2, 2, 2, "1/3"]}
          justifyContent="center"
        >
          <Img src={shell} maxWidth={["100%", "100%", "100%", "100%", "30%"]} />
        </ProjectLink>
        <ProjectLink
          to="/eyes"
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[3, 3, 3, 3, 1]}
          justifyContent="center"
        >
          <Img src={eye} maxWidth={["100%", "100%", "100%", "100%", "30%"]} />
        </ProjectLink>
        <ProjectLink
          to="/erotic-stories"
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[4, 4, 4, 4, 3]}
          justifyContent="center"
        >
          <Img
            src={statue}
            maxWidth={["100%", "100%", "100%", "100%", "30%"]}
          />
        </ProjectLink>
        <ProjectLink
          to="kai-landre"
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[5, 5, 5, 5, "2/4"]}
          alignSelf="start"
          justifyContent="flex-end"
        >
          <Img
            src={dragon}
            maxWidth={["100%", "100%", "100%", "100%", "30%"]}
          />
        </ProjectLink>
        <ProjectLink
          to="/belledejour"
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[6, 6, 6, 6, 3]}
        >
          <Img src={knife} maxWidth={["100%", "100%", "100%", "100%", "30%"]} />
        </ProjectLink>
        <ProjectLink
          to="marc-medina"
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[7, 7, 7, 7, 2]}
          alignSelf="flex-end"
          justifyContent="center"
        >
          <Img src={mask} maxWidth={["100%", "100%", "100%", "100%", "30%"]} />
        </ProjectLink>
        <ProjectLink
          to="leo-adef"
          gridColumn={[2, 2, 2, 2, 2]}
          gridRow={[8, 8, 8, 8, 3]}
        >
          <Img
            src={spider}
            maxWidth={["100%", "100%", "100%", "100%", "30%"]}
          />
        </ProjectLink>
        <ProjectLink
          to="/the-map"
          gridColumn={[2, 2, 2, 2, 2]}
          gridRow={[9, 9, 9, 9, "2/4"]}
          justifyContent="flex-end"
        >
          <Img
            src={magnify}
            maxWidth={["100%", "100%", "100%", "100%", "30%"]}
          />
        </ProjectLink>
      </Container>
      <BuyButtonContainer
        position="fixed"
        bottom={["40%", "40%", "40%", "40%", "10%"]}
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
        zIndex={zIndexes.inFront}
      >
        UP
      </Scrollback>
    </Main>
  );
};

export default Projects;
