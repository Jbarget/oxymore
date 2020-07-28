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
  overflow: hidden;
  ${space};
  ${flexbox}
  ${grid};
`;

const Container = styled.div<
  LayoutProps & FlexboxProps & GridProps & SpaceProps
>`
  display: grid;
  ${layout};
  ${flexbox};
  ${grid};
  ${space};
`;

const PageLink = styled(NavLink)<
  LayoutProps & FlexboxProps & GridProps & SpaceProps
>`
  display: grid;
  ${layout};
  ${flexbox};
  ${grid};
  ${space};
`;

const Img = styled.img<LayoutProps & FlexboxProps>`
  ${layout};
  ${flexbox};
`;

const Home = () => {
  return (
    <Main gridTemplateRows="repeat(3, 1fr)" gridTemplateColumns="25% 50% 25%">
      <Container
        gridRow={1}
        gridColumn={1}
        p={6}
        gridTemplateRows="max-content"
      >
        <PageLink to="/">
          <Img src={oxymore}></Img>
        </PageLink>
      </Container>
      <Container
        gridRow={1}
        gridColumn={3}
        gridTemplateRows="max-content"
        gridTemplateColumns="max-content"
        justifyContent="flex-end"
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
        p={6}
      >
        <Img src={number} alignSelf="center" width="40%"></Img>
        <BuyButton />
      </Container>
      <Container gridRow={3} gridColumn={3} alignSelf="end" p={6}>
        <PageLink to="/manifesto">
          <Img src={manifesto}></Img>
        </PageLink>
      </Container>
    </Main>
  );
};

export default Home;
