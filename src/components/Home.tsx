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
  TypographyProps,
  typography,
} from "styled-system";
import BuyButton from "./BuyButton";
import NavMenu from "./NavMenu";
import oxymore from "./assets/home-page/oxymore.png";
import manifesto from "./assets/home-page/manifesto.png";
import number from "./assets/home-page/number-one.png";
import alpha from "./assets/home-page/360_alpha.png";

import LanguageButtons from "./LanguageButtons";

const Main = styled.main<SpaceProps & FlexboxProps>`
  display: flex;
  height: 100vh;
  ${space};
  ${flexbox};
`;

const Row = styled.div<FlexboxProps & LayoutProps>`
  display: flex;
  ${flexbox};
  ${layout};
`;

const PageLink = styled(NavLink)<TypographyProps>`
  ${typography};
`;

const Img = styled.img<LayoutProps & SpaceProps>`
  max-width: 30%;
  ${layout};
  ${space};
`;

const Home = () => {
  return (
    <Main p={6} flexDirection="column" justifyContent="space-between">
      <Row
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Img src={oxymore}></Img>
        <Row flexDirection="row" justifyContent="space-between">
          <LanguageButtons />
          <NavMenu />
        </Row>
      </Row>
      <Row flexDirection="row">
        <PageLink to="/projects" textAlign="center">
          <Img src={alpha}></Img>
        </PageLink>
      </Row>
      <Row
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Row flexDirection="column">
          <Img src={number} mb={3}></Img>
          <BuyButton />
        </Row>
        <PageLink to="/manifesto" textAlign="end">
          <Img src={manifesto} minWidth="50%"></Img>
        </PageLink>
      </Row>
    </Main>
  );
};

export default Home;
