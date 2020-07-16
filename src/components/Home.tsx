import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import alpha from "./assets/home-page/360_alpha.png";
import oxymore from "./assets/home-page/oxymore.png";
import number from "./assets/home-page/number-one.png";
import manifesto from "./assets/home-page/manifesto.png";
import {
  space,
  layout,
  background,
  flexbox,
  color,
  grid,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  FlexboxProps,
  ColorProps,
  GridProps,
} from "styled-system";
import BuyButton from "./BuyButton";
import NavMenu from "./NavMenu";
import backgroundImage from ".assets/home-page/background-inverted.png";

const Main = styled.main<GridProps & ColorProps & SpaceProps & BackgroundProps>`
  background-color: black;
  min-height: 100vh;
  display: grid;
  ${grid};
  ${color};
  ${space};
  ${background}
`;

const Logo = styled.img<LayoutProps & FlexboxProps & GridProps>`
  ${layout};
  ${flexbox};
  ${grid};
`;

const Home = () => {
  return (
    <Main
      p={5}
      backgroundImage="url('.assets/home-page/background-inverted.png)"
      gridTemplateColumns="repeat(4, 1fr)"
      gridTemplateRows="repeat(4, 1fr)"
    >
      <Logo src={oxymore} width="100%" gridColumn="1" gridRow="1"></Logo>
      <NavMenu />
      <Link to="/projects">
        <Logo src={alpha} width="100%" gridColumn="2/4" gridRow="2"></Logo>
      </Link>
      <Logo src={number} width="100%" gridColumn="1" gridRow="3"></Logo>
      <BuyButton />
      <Logo src={manifesto} width="100%" gridColumn="1" gridRow="3"></Logo>
    </Main>
  );
};

export default Home;
