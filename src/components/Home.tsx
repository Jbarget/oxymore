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
  height: 100%;
  ${space};
  ${flexbox};
`;

const Flex = styled.div<FlexboxProps>`
  display: flex;
  ${flexbox};
`;

const ManifestoLink = styled(NavLink)<TypographyProps & FlexboxProps>`
  ${typography};

  display: flex;
  ${flexbox}
`;

const Img = styled.img<LayoutProps & SpaceProps>`
  height: 8vw;
  align-self: flex-start;
  ${layout};
  ${space};
`;

const ProjectsLink = styled(NavLink)<TypographyProps & FlexboxProps>`
  ${typography};

  display: flex;
  align-self: center;
  ${flexbox}
`;
const ProjectsImg = styled.img<LayoutProps & SpaceProps>`
  ${layout};
  ${space};
`;

const Home = () => {
  return (
    <Main p={6} flexDirection="column" justifyContent="space-between">
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Img src={oxymore} />
        <Flex justifyContent="space-between">
          <LanguageButtons />
          <NavMenu />
        </Flex>
      </Flex>

      <ProjectsLink to="/projects" textAlign="center">
        <ProjectsImg src={alpha} width={500} />
      </ProjectsLink>

      <Flex justifyContent="space-between" alignItems="flex-end">
        <Flex flexDirection="column">
          <Img src={number} mb={3} height="4vw" />
          <BuyButton />
        </Flex>
        <ManifestoLink to="/manifesto" alignItems="flex-end">
          <Img src={manifesto} />
        </ManifestoLink>
      </Flex>
    </Main>
  );
};

export default Home;
