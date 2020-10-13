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

  const iconSizes = ["100%", "100%", "100%", "100%", "30%"];

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
          justifySelf="start"
          maxWidth={iconSizes}
        >
          <Img src={stairs} />
        </ProjectLink>
        <ProjectLink
          to="/conscious-shopping"
          gridColumn={[2, 2, 2, 2, 2]}
          gridRow={[2, 2, 2, 2, "1/3"]}
          justifySelf="start"
          maxWidth={iconSizes}
        >
          <Img src={shell} />
        </ProjectLink>
        <ProjectLink
          to="/eyes"
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[3, 3, 3, 3, 1]}
          justifySelf="center"
          maxWidth={iconSizes}
        >
          <Img src={eye} />
        </ProjectLink>
        <ProjectLink
          to="/erotic-stories"
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[4, 4, 4, 4, 3]}
          justifySelf="center"
          maxWidth={iconSizes}
        >
          <Img src={statue} />
        </ProjectLink>
        <ProjectLink
          to="kai-landre"
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[5, 5, 5, 5, "2/4"]}
          justifySelf="end"
          maxWidth={iconSizes}
        >
          <Img src={dragon} />
        </ProjectLink>
        <ProjectLink
          to="/belledejour"
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[6, 6, 6, 6, 3]}
          maxWidth={iconSizes}
          justifySelf="start"
        >
          <Img src={knife} />
        </ProjectLink>
        <ProjectLink
          to="marc-medina"
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[7, 7, 7, 7, 2]}
          justifySelf="center"
          maxWidth={iconSizes}
        >
          <Img src={mask} />
        </ProjectLink>
        <ProjectLink
          to="leo-adef"
          gridColumn={[2, 2, 2, 2, 2]}
          gridRow={[8, 8, 8, 8, "2/4"]}
          maxWidth={iconSizes}
          justifySelf="center"
        >
          <Img src={spider} />
        </ProjectLink>
        <ProjectLink
          to="/the-map"
          gridColumn={[2, 2, 2, 2, 2]}
          gridRow={[9, 9, 9, 9, 2]}
          justifySelf="end"
          maxWidth={iconSizes}
        >
          <Img src={magnify} />
        </ProjectLink>
      </Container>
      <BuyButtonContainer
        position="fixed"
        bottom={["40%", "40%", "40%", "40%", "15%"]}
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
