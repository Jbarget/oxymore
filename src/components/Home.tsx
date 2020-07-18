import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import alpha from "./assets/home-page/360_alpha.png";
import oxymore from "./assets/home-page/oxymore.png";
import number from "./assets/home-page/number-one.png";
import manifesto from "./assets/home-page/manifesto.png";
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
} from "styled-system";
import BuyButton from "./BuyButton";
import NavMenu from "./NavMenu";

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
  SpaceProps;

const Logo = styled.a<LogoProps>`
  ${layout};
  ${position};
  ${flexbox};
  ${space};
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
      alignItems="center"
    >
      <Logo
        display="flex"
        width={[100, 120, 200, 280]}
        position="absolute"
        left={30}
        top={30}
      >
        <img src={oxymore} />
      </Logo>
      <NavMenu />
      <Logo width={[100, 200, 300, 400, 500]}>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <img src={alpha} />
        </Link>
      </Logo>
      <Logo
        width={[40, 40, 60, 70, 80]}
        position="absolute"
        left={30}
        bottom={60}
        mb={[0, 0, 1, 2, 3]}
      >
        <img src={number} />
      </Logo>
      <BuyButton />
      <Logo
        display="flex"
        width={[100, 120, 200, 280]}
        position="absolute"
        right={30}
        bottom={30}
      >
        <img src={manifesto} />
      </Logo>
    </Background>
  );
};

export default Home;
