import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  background,
  BackgroundProps,
  FlexboxProps,
  flexbox,
  PositionProps,
  position,
  ColorProps,
  color,
  TypographyProps,
  typography,
  border,
  BorderProps,
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

type BgProps = BackgroundProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  SpaceProps;

const Background = styled.div<BgProps>`
  ${color};
  ${layout};
  ${flexbox};
  ${background};
  ${space};
`;

type HomeLinkProps = SpaceProps;

const HomeLink = styled.a<HomeLinkProps>`
  ${space};
`;

type HomeLogoProps = LayoutProps & TypographyProps & ColorProps;

const HomeLogo = styled.p<HomeLogoProps>`
  ${layout};
  ${typography};
  ${color};
`;

type BuyButtonProps = LayoutProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  PositionProps &
  SpaceProps &
  FlexboxProps;

const BuyButton = styled.button<BuyButtonProps>`
  ${color};
  ${typography};
  ${border}
  ${position};
  ${space};
  ${flexbox};
`;

type ProjectIconContainerProps = LayoutProps & PositionProps & FlexboxProps;

const ProjectIconContainer = styled.div<ProjectIconContainerProps>`
  ${layout};
  ${position};
  ${flexbox};
`;

type ProjectIconProps = LayoutProps & PositionProps & FlexboxProps & SpaceProps;

const ProjectIconLink = styled(Link)<ProjectIconProps>`
  ${layout};
  ${position};
  ${flexbox};
  ${space};
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.1);
  }
`;

const Projects = () => {
  const projectIconWidths = [60, 70, 70, 80, 80, 100, 120, 180, 120];
  return (
    <Background
      backgroundSize="cover"
      backgroundImage="url('./assets/home-page/background.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bg="black"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx="auto"
    >
      <HomeLink p={30}>
        <Link to="/">
          <HomeLogo
            fontFamily="SangBleu OG Serif Light Regular"
            color="athensGray"
            fontSize={[3, 4, 4, 4, 5, 5, 5, 6, 6]}
            display="flex"
          >
            OXYMORE
          </HomeLogo>
        </Link>
      </HomeLink>
      <ProjectIconContainer
        width={[300, 300, 300, 400, 400, 600, 700, 1000, 1400]}
        height={[500, 600, 600, 800, 700, 500, 1000, 1300, 900]}
        display="flex"
        position="relative"
        alignItems="center"
      >
        <ProjectIconLink
          to=""
          width={projectIconWidths}
          position="absolute"
          top={[0, 0, 0, 0, 0, 0, 120, 120, 40]}
          left={[120, 120, 120, 160, 160, 20, 40, 140, 280]}
        >
          <img src={stairs} alt="stairs"></img>
        </ProjectIconLink>

        <ProjectIconLink
          to=""
          width={projectIconWidths}
          position="absolute"
          top={[60, 80, 80, 80, 80, 240, 340, 340, 280]}
          left={[40, 20, 20, 60, 60, 20, 40, 100, 280]}
        >
          <img src={shell} alt="shell"></img>
        </ProjectIconLink>

        <ProjectIconLink
          to=""
          width={projectIconWidths}
          position="absolute"
          top={[60, 80, 80, 100, 100, 40, 60, 60, 0]}
          left={[200, 220, 220, 260, 260, 240, 280, 400, 580]}
        >
          <img src={eye} alt="eye"></img>
        </ProjectIconLink>

        <ProjectIconLink
          to=""
          width={projectIconWidths}
          position="absolute"
          top={[160, 200, 220, 220, 220, 240, 440, 600, 260]}
          left={[40, 20, 20, 60, 60, 200, 200, 200, 500]}
        >
          <img src={statue} alt="statue"></img>
        </ProjectIconLink>

        <ProjectIconLink
          to=""
          width={projectIconWidths}
          position="absolute"
          top={[100, 140, 140, 160, 160, 140, 240, 340, 220]}
          left={[120, 120, 120, 160, 160, 400, 300, 400, 680]}
        >
          <img src={dragon} alt="dragon"></img>
        </ProjectIconLink>

        <ProjectIconLink
          to=""
          width={projectIconWidths}
          position="absolute"
          top={[260, 320, 360, 380, 380, 380, 640, 740, 480]}
          left={[60, 40, 40, 60, 60, 360, 360, 380, 620]}
        >
          <img src={knife} alt="knife"></img>
        </ProjectIconLink>

        <ProjectIconLink
          to=""
          width={projectIconWidths}
          position="absolute"
          top={[160, 220, 220, 240, 240, 40, 120, 160, 60]}
          left={[200, 220, 220, 280, 280, 400, 500, 660, 880]}
        >
          <img src={mask} alt="mask"></img>
        </ProjectIconLink>

        <ProjectIconLink
          to=""
          width={projectIconWidths}
          position="absolute"
          top={[200, 260, 260, 300, 300, 320, 440, 540, 360]}
          left={[120, 120, 120, 160, 160, 400, 380, 560, 840]}
        >
          <img src={spider} alt="spider"></img>
        </ProjectIconLink>

        <ProjectIconLink
          to=""
          width={projectIconWidths}
          position="absolute"
          top={[300, 360, 380, 420, 420, 200, 380, 460, 220]}
          left={[140, 140, 140, 160, 180, 780, 560, 760, 1040]}
        >
          <img src={magnify} alt="magnifying glass"></img>
        </ProjectIconLink>
      </ProjectIconContainer>

      <BuyButton
        position="absolute"
        color="athensGray"
        p={8}
        py={1}
        bg="transparent"
        border={1}
        borderColor="athensGray"
        borderStyle="solid"
        fontSize={[1, 2, 2, 3, 3, 3, 4, 5, 4]}
        display="flex"
        justifyContent="center"
        right={[null, null, null, null, null, null, 40, 60, 60]}
        bottom={[50, 50, 30, 60, 60, 60, 60, 60, 60]}
      >
        BUY
      </BuyButton>
    </Background>
  );
};

export default Projects;
