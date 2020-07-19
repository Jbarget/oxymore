import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import alpha from "./assets/home-page/360_alpha.png";
import oxymore from "./assets/home-page/oxymore.png";
import number from "./assets/home-page/number-one.png";
import manifesto from "./assets/home-page/manifesto.png";
import {
  space,
  layout,
  flexbox,
  grid,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
} from "styled-system";
import BuyButton from "./BuyButton";
import NavMenu from "./NavMenu";
import backgroundImage from ".assets/home-page/background-inverted.png";

const Main = styled.main<SpaceProps & GridProps>`
  background-color: black;
  display: grid;
  min-height: 100vh;
  ${space};
  ${grid};
`;

const Grid = styled.div<GridProps>`
  display: grid;
  ${grid};
`;

const PageLink = styled(NavLink)<LayoutProps & FlexboxProps & GridProps>`
  ${layout};
  ${flexbox};
  ${grid};
`;

const Container = styled.div<LayoutProps & FlexboxProps & GridProps>`
  display: grid;
  ${layout};
  ${flexbox};
  ${grid};
`;

const Img = styled.img<LayoutProps & GridProps & FlexboxProps & SpaceProps>`
  width: 100%;
  ${layout};
  ${grid};
  ${flexbox};
  ${space};
`;

const Home = () => {
  return (
    <Main p={6}>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
      >
        <Img src={oxymore} gridColumn={1}></Img>
        <Container gridColumn={3} justifySelf="end" alignSelf="flex-start">
          <NavMenu />
        </Container>
        <PageLink to="/projects" gridColumn={2} alignSelf="center">
          <Img src={alpha}></Img>
        </PageLink>
        <Container gridColumn={1} alignSelf="end" width="min-content">
          <Img src={number} alignSelf="center" mb={3}></Img>
          <BuyButton />
        </Container>
        <PageLink to="/manifesto" gridColumn={3} alignSelf="end">
          <Img src={manifesto}></Img>
        </PageLink>
      </Grid>
    </Main>
  );
};

export default Home;
