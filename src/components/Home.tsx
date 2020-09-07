import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  layout,
  space,
  flexbox,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  TypographyProps,
  typography,
} from "styled-system";
import BuyButton from "./BuyButton";
import NavMenu from "./NavMenu";
import oxymore from "./assets/home-page/oxymore-720.png";
import manifesto from "./assets/home-page/manifesto-720.png";
import number from "./assets/home-page/number-one-720.png";
import alpha from "./assets/home-page/360_alpha-720.png";

import LanguageButtons from "./LanguageButtons";

const Main = styled.main<SpaceProps & FlexboxProps>`
  display: flex;
  height: 100vh;
  ${space};
  ${flexbox};
`;

const Flex = styled.div<FlexboxProps>`
  display: flex;
  ${flexbox};
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
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Img src={oxymore}></Img>
        <Flex justifyContent="space-between">
          <LanguageButtons />
          <NavMenu />
        </Flex>
      </Flex>

      <PageLink to="/projects" textAlign="center">
        <Img src={alpha} width={500}></Img>
      </PageLink>

      <Flex justifyContent="space-between" alignItems="flex-end">
        <Flex flexDirection="column">
          <Img src={number} mb={3}></Img>
          <BuyButton />
        </Flex>
        <PageLink to="/manifesto" textAlign="end">
          <Img src={manifesto} minWidth="50%"></Img>
        </PageLink>
      </Flex>
    </Main>
  );
};

export default Home;
