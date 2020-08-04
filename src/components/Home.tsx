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
  position,
  PositionProps,
} from "styled-system";
import BuyButton from "./BuyButton";
import NavMenu from "./NavMenu";
import oxymore from "./assets/home-page/oxymore.png";
import manifesto from "./assets/home-page/manifesto.png";
import number from "./assets/home-page/number-one.png";
import alpha from "./assets/home-page/360_alpha.png";
import Header from "./Header";

const Main = styled.main<SpaceProps & FlexboxProps & GridProps>`
  background: black;
  display: grid;
  height: 100vh;
  overflow: hidden;
  ${space};
  ${flexbox}
  ${grid};
`;

const Container = styled.div<
  LayoutProps & FlexboxProps & GridProps & SpaceProps & PositionProps
>`
  display: grid;
  ${layout};
  ${flexbox};
  ${grid};
  ${space};
  ${position}
`;

const PageLink = styled(NavLink)`
  display: grid;
`;

const Img = styled.img<LayoutProps & FlexboxProps & PositionProps>`
  ${layout};
  ${flexbox};
  ${position}
`;

const Home = () => {
  return (
    <Main gridTemplateRows="repeat(3, 1fr)" gridTemplateColumns="25% 50% 25%">
      <Container gridRow={1} gridColumn={1} gridTemplateRows="max-content">
        <PageLink to="/">
          <Img src={oxymore} position="relative" top={6} left={6}></Img>
        </PageLink>
      </Container>
      <Container
        gridRow={1}
        gridColumn={3}
        gridTemplateRows="max-content"
        gridTemplateColumns="max-content"
        justifyContent="flex-end"
        pr={6}
      >
        <NavMenu />
      </Container>
      <Container
        gridRow={2}
        gridColumn={2}
        alignSelf="center"
        justifySelf="center"
        width={["fit-content", null, null, null, null, null, null, null, "60%"]}
      >
        <PageLink to="/projects">
          <Img src={alpha}></Img>
        </PageLink>
      </Container>
      <Container
        gridRow={3}
        gridColumn={1}
        alignSelf="end"
        width="min-content"
        position="relative"
        bottom={6}
        left={6}
      >
        <Img src={number} alignSelf="center" width="40%"></Img>
        <BuyButton />
      </Container>
      <Container gridRow={3} gridColumn={3} alignSelf="end">
        <PageLink to="/manifesto">
          <Img src={manifesto} position="relative" bottom={6} right={6}></Img>
        </PageLink>
      </Container>
    </Main>
  );
};

export default Home;
