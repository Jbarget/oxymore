import React from "react";
import styled, { css } from "styled-components";
import Bg from "./assets/home-page/background.jpg";
import Alpha from "./assets/home-page/360_alpha.png";
import Oxymore from "./assets/home-page/oxymore.png";
import Number from "./assets/home-page/number-one.png";
import Manifesto from "./assets/home-page/manifesto.png";
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

// background
type BgProps = BackgroundProps & ColorProps & LayoutProps & FlexboxProps;

const Background = styled.div<BgProps>`
  ${background};
  ${color};
  ${layout};
  ${flexbox};
`;

// logos and button
type LogoProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  ColorProps &
  SpaceProps &
  TypographyProps &
  BorderProps;

const Logo = styled.a<LogoProps>`
  ${layout};
  ${position};
  ${flexbox};
  ${space};
  ${position};
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

const Home = () => {
  return (
    <Background
      backgroundSize="cover"
      backgroundImage="url('./assets/home-page/background.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bg="black"
      height="100vh"
      display="flex"
      justifyContent="center"
    >
      <Logo width="30%" position="absolute" left={30} top={30}>
        <img src={Oxymore} />
      </Logo>

      <Logo
        width={[100, 200, 300, 400]}
        position="absolute"
        top={[200, 180, 160, 120, 200]}
      >
        <img src={Alpha} />
      </Logo>

      <Logo
        width={[40, 60, 80, 100]}
        position="absolute"
        left={30}
        bottom={66}
        marginBottom={1}
      >
        <img src={Number} />
      </Logo>

      <BuyButton
        position="absolute"
        fontFamily="SangBleu OG Serif Light Regular"
        color="athensGray"
        p={8}
        py={1}
        bg="transparent"
        left={30}
        bottom={30}
        border={1}
        borderColor="athensGray"
        borderStyle="solid"
      >
        BUY
      </BuyButton>
      <Logo
        width={[100, 120, 200, 280]}
        position="absolute"
        right={30}
        bottom={28}
      >
        <img src={Manifesto} />
      </Logo>
    </Background>
  );
};

export default Home;
