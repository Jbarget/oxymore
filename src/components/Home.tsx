import React from "react";
import { NavLink } from "react-router-dom";
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
} from "styled-system";
import BuyButton from "./BuyButton";
import NavMenu from "./NavMenu";
import oxymore from "./assets/home-page/oxymore.png";
import manifesto from "./assets/home-page/manifesto.png";
import number from "./assets/home-page/number-one.png";
import alpha from "./assets/home-page/360_alpha.png";

const Main = styled.main<SpaceProps & FlexboxProps & GridProps>`
  background: black;
  display: grid;
  height: 100vh;
  ${space};
  ${flexbox}
  ${grid};
`;

const Container = styled.div<LayoutProps & FlexboxProps & GridProps>`
  display: grid;
  ${layout};
  ${flexbox};
  ${grid};
`;

const PageLink = styled(NavLink)<LayoutProps & FlexboxProps & GridProps>`
  ${layout};
  ${flexbox};
  ${grid};
`;

const Img = styled.img<LayoutProps & GridProps & FlexboxProps & SpaceProps>`
  ${layout};
  ${grid};
  ${flexbox};
  ${space};
`;

const Home = () => {
  return (
    <Main
      p={7}
      gridTemplateRows="repeat(3, 1fr)"
      gridTemplateColumns="25% 50% 25%"
    >
      <PageLink to="/" gridRow={1} gridColumn={1} alignSelf="start">
        <Img src={oxymore}></Img>
      </PageLink>
      <Container gridRow={1} gridColumn={3} alignSelf="start">
        <NavMenu />
      </Container>
      <PageLink
        to="/projects"
        gridRow={2}
        gridColumn={2}
        alignSelf="center"
        justifySelf="center"
        width={["fit-content", null, null, null, null, null, null, null, "60%"]}
      >
        <Img src={alpha}></Img>
      </PageLink>
      <Container gridRow={3} gridColumn={1} alignSelf="end" width="min-content">
        <Img src={number} alignSelf="center" width="40%"></Img>
        <BuyButton />
      </Container>
      <PageLink to="/manifesto" gridRow={3} gridColumn={3} alignSelf="end">
        <Img src={manifesto}></Img>
      </PageLink>
    </Main>
  );
};

export default Home;
