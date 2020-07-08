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
  TypographyProps &
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

type BuyButtonProps = SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  PositionProps &
  SpaceProps &
  FlexboxProps;

const BuyButton = styled.button<BuyButtonProps>`
  ${layout};
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

const ProjectIcon = styled.a<ProjectIconProps>`
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
  const projectIconWidths = [50, 60, 80, 100, 120, 140];
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
            fontSize={[3, 3, 4, 4, 5]}
            display="flex"
          >
            OXYMORE
          </HomeLogo>
        </Link>
      </HomeLink>
      <ProjectIconContainer
        width={[100, 200, 300, 600, 900, 1200]}
        height={[100, 500, 500, 500, 500, 600]}
        display="flex"
        position="relative"
        alignItems="center"
      >
        <Link to="">
          <ProjectIcon
            width={projectIconWidths}
            position="absolute"
            top={[0, 0, 0, 80, 80]}
            left={[60, 60, 120, 20, 20, 60]}
          >
            <img src={stairs} alt="stairs"></img>
          </ProjectIcon>
        </Link>
        <Link to="">
          <ProjectIcon
            width={projectIconWidths}
            position="absolute"
            top={[80, 80, 80, 240, 240, 300]}
            left={[20, 20, 20, 20, 20, 60]}
          >
            <img src={shell} alt="shell"></img>
          </ProjectIcon>
        </Link>
        <Link to="">
          <ProjectIcon
            width={projectIconWidths}
            position="absolute"
            top={[100, 100, 100, 40, 20]}
            left={[120, 120, 220, 180, 240, 320]}
          >
            <img src={eye} alt="eye"></img>
          </ProjectIcon>
        </Link>
        <Link to="">
          <ProjectIcon
            width={projectIconWidths}
            position="absolute"
            top={[200, 200, 200, 240, 240, 300]}
            left={[0, 0, 0, 160, 200, 320]}
          >
            <img src={statue} alt="statue"></img>
          </ProjectIcon>
        </Link>
        <Link to="">
          <ProjectIcon
            width={projectIconWidths}
            position="absolute"
            top={[180, 180, 160, 160, 140]}
            left={[80, 80, 120, 300, 400, 540]}
          >
            <img src={dragon} alt="dragon"></img>
          </ProjectIcon>
        </Link>
        <Link to="">
          <ProjectIcon
            width={projectIconWidths}
            position="absolute"
            top={[320, 320, 360, 340, 380]}
            left={[0, 0, 0, 260, 360, 480]}
          >
            <img src={knife} alt="knife"></img>
          </ProjectIcon>
        </Link>
        <Link to="">
          <ProjectIcon
            width={projectIconWidths}
            position="absolute"
            top={[360, 360, 300, 40, 40]}
            left={[120, 120, 220, 400, 600, 780]}
          >
            <img src={mask} alt="mask"></img>
          </ProjectIcon>
        </Link>
        <Link to="">
          <ProjectIcon
            width={projectIconWidths}
            position="absolute"
            top={[280, 280, 280, 320, 320]}
            left={[80, 80, 80, 400, 600, 780]}
          >
            <img src={spider} alt="spider"></img>
          </ProjectIcon>
        </Link>
        <Link to="">
          <ProjectIcon
            width={projectIconWidths}
            position="absolute"
            top={[420, 420, 400, 200, 200]}
            left={[40, 40, 120, 500, 780, 1020]}
          >
            <img src={magnify} alt="magnifying glass"></img>
          </ProjectIcon>
        </Link>
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
        fontSize={[1, 1, 2, 3, 3]}
        display="flex"
        justifyContent="center"
        right={[null, null, null, 30, 30]}
        bottom={30}
      >
        BUY
      </BuyButton>
    </Background>
  );
};

export default Projects;
