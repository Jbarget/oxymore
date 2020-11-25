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
import { Link } from "react-router-dom";
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
import Flex from "./Flex";

type ProjectPageProps = LayoutProps & FlexboxProps & GridProps;

const Container = styled.div<ProjectPageProps>`
  ${layout};
  ${flexbox};
  ${grid};
`;

const ProjectLinkWrapper = styled.div<ProjectPageProps>`
  ${layout};
  ${grid};
  ${flexbox};
  display: flex;
  align-items: center;
`;

const BuyButtonContainer = styled.div<PositionProps & SpaceProps>`
  ${position};
  ${space};
`;

const Img = styled.img<LayoutProps>`
  ${layout};
  transition: transform 0.5s;
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
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const iconSizes = ["100%", "100%", "100%", "100%", "30%"];

  return (
    <Flex flex="auto" justifyContent="center" alignItems="center">
      <Container
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(4, 1fr)"
        display="grid"
        justifyItems="center"
        alignItems="center"
      >
        <ProjectLinkWrapper
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[1, 1, 1, 1, 1]}
          justifySelf="start"
          maxWidth={iconSizes}
        >
          <Link to="/projects/editorial">
            <Img src={stairs} alt="stairs icon" />
          </Link>
        </ProjectLinkWrapper>
        <ProjectLinkWrapper
          gridColumn={[2, 2, 2, 2, 2]}
          gridRow={[2, 2, 2, 2, "1/3"]}
          justifySelf="start"
          maxWidth={iconSizes}
        >
          <Link to="/projects/consciousshopping">
            <Img src={shell} alt="shell icon" />
          </Link>
        </ProjectLinkWrapper>
        <ProjectLinkWrapper
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[3, 3, 3, 3, "1/3"]}
          justifySelf="center"
          maxWidth={iconSizes}
        >
          <Link to="/projects/eyes">
            <Img src={eye} alt="eye icon" />
          </Link>
        </ProjectLinkWrapper>
        <ProjectLinkWrapper
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[4, 4, 4, 4, 3]}
          justifySelf="center"
          maxWidth={iconSizes}
        >
          <Link to="/projects/eroticstories">
            <Img src={statue} alt="statue icon" />
          </Link>
        </ProjectLinkWrapper>
        <ProjectLinkWrapper
          gridColumn={[2, 2, 2, 2, 1]}
          gridRow={[5, 5, 5, 5, "2/4"]}
          justifySelf="end"
          maxWidth={iconSizes}
        >
          <Link to="/projects/kailandre">
            <Img src={dragon} alt="dragon icon" />
          </Link>
        </ProjectLinkWrapper>
        <ProjectLinkWrapper
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[6, 6, 6, 6, 3]}
          maxWidth={iconSizes}
          justifySelf="start"
        >
          <Link to="/projects/belledejour">
            <Img src={knife} alt="knife icon" />
          </Link>
        </ProjectLinkWrapper>
        <ProjectLinkWrapper
          gridColumn={[2, 2, 2, 2, 3]}
          gridRow={[7, 7, 7, 7, 2]}
          justifySelf="center"
          maxWidth={iconSizes}
        >
          <Link to="/projects/marcmedina">
            <Img src={mask} alt="mask icon" />
          </Link>
        </ProjectLinkWrapper>
        <ProjectLinkWrapper
          gridColumn={[2, 2, 2, 2, 2]}
          gridRow={[8, 8, 8, 8, "2/4"]}
          maxWidth={iconSizes}
          justifySelf="center"
        >
          <Link to="/projects/leoadef">
            <Img src={spider} alt="spider icon" />
          </Link>
        </ProjectLinkWrapper>
        <ProjectLinkWrapper
          gridColumn={[2, 2, 2, 2, 2]}
          gridRow={[9, 9, 9, 9, 2]}
          justifySelf="end"
          maxWidth={iconSizes}
        >
          <Link to="/projects/themap">
            <Img src={magnify} alt="magnify icon" />
          </Link>
        </ProjectLinkWrapper>
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
    </Flex>
  );
};

export default Projects;
