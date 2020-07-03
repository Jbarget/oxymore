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
  LayoutProps &
  SpaceProps;

const Background = styled.div<BgProps>`
  ${background};
  ${color};
  ${layout};
  ${flexbox};
  ${space};
`;

type LogoProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  ColorProps &
  SpaceProps &
  TypographyProps &
  BorderProps &
  ColorProps;

const HomeLink = styled.a<LogoProps>`
  ${space};
`;

const HomeLogo = styled.p<LogoProps>`
  ${flexbox};
  ${typography}
  ${color}
`;

const BuyButton = styled.button<LogoProps>`
  ${space};
  ${layout};
  ${color};
  ${typography};
  ${flexbox};
  ${border}
  ${position};
`;

const IconsContainer = styled.div<LogoProps>`
  // ${flexbox};
  // ${position};
  // ${space};
`;

const Icon = styled.a<LogoProps>`
  ${layout};
  ${position};
  ${flexbox};
  ${space};
  ${position};
  a:hover {
    width: 2em;
  }
`;

const Projects = () => {
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
        <Link to="/" style={{ textDecoration: "none" }}>
          <HomeLogo
            fontFamily="SangBleu OG Serif Light Regular"
            color="athensGray"
            fontSize={[null, 16, 18, 28, 28]}
          >
            OXYMORE
          </HomeLogo>
        </Link>
      </HomeLink>
      <IconsContainer>
        <Icon
          width={[50, 60, 60, 100, 120]}
          position="absolute"
          top={[80, 80, 80, 180, 180]}
          left={[160, 160, 180, 120, 160]}
        >
          <img src={stairs}></img>
        </Icon>

        <Icon
          width={[50, 60, 60, 100, 120]}
          position="absolute"
          top={[140, 140, 140, 360, 360]}
          left={[100, 100, 120, 120, 160]}
        >
          <img src={shell}></img>
        </Icon>

        <Icon
          width={[50, 60, 60, 100, 120]}
          position="absolute"
          top={[160, 160, 160, 140, 140]}
          left={[200, 200, 240, 280, 340]}
        >
          <img src={eye}></img>
        </Icon>
        <Icon
          width={[50, 60, 60, 100, 120]}
          position="absolute"
          top={[260, 260, 260, 360, 400]}
          left={[200, 200, 240, 280, 340]}
        >
          <img src={statue}></img>
        </Icon>

        <Icon
          width={[50, 60, 60, 100, 120]}
          position="absolute"
          top={[240, 240, 240, 240, 280]}
          left={[120, 120, 160, 400, 500]}
        >
          <img src={dragon}></img>
        </Icon>

        <Icon
          width={[50, 60, 60, 100, 120]}
          position="absolute"
          top={[400, 400, 400, 440, 500, 500]}
          left={[100, 100, 120, 380, 500]}
        >
          <img src={knife}></img>
        </Icon>

        <Icon
          width={[50, 60, 60, 100, 120]}
          position="absolute"
          top={[380, 380, 380, 140, 140]}
          left={[180, 180, 220, 500, 640]}
        >
          <img src={mask}></img>
        </Icon>

        <Icon
          width={[50, 60, 60, 100, 120]}
          position="absolute"
          top={[320, 320, 320, 400, 440]}
          left={[100, 100, 120, 500, 680]}
        >
          <img src={spider}></img>
        </Icon>
        <Icon
          width={[50, 60, 60, 100, 120]}
          position="absolute"
          top={[480, 480, 480, 260, 300]}
          left={[160, 160, 180, 600, 800]}
        >
          <img src={magnify}></img>
        </Icon>
      </IconsContainer>

      <BuyButton
        position="absolute"
        fontFamily="SangBleu OG Serif Light Regular"
        color="athensGray"
        p={8}
        py={1}
        bg="transparent"
        bottom={70}
        border={1}
        borderColor="athensGray"
        borderStyle="solid"
        fontSize={[null, 12, 14, 16, 16]}
        display="flex"
        justifyContent="center"
        right={[null, null, null, 40, 40]}
      >
        BUY
      </BuyButton>
    </Background>
  );
};

export default Projects;
