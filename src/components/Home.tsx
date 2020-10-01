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

const DoubleLineTextImage = styled.img`
  height: 10vw;
  max-height: 88px;
`;
const SingleLineTextImage = styled.img<SpaceProps>`
  height: 5vw;
  max-height: 44px;

  ${space};
`;

const ProjectsLink = styled(NavLink)<TypographyProps & FlexboxProps>`
  ${typography};

  display: flex;
  align-self: center;
  align-items: flex-start;
  justify-content: flex-start;
  ${flexbox}
`;
const ProjectsImg = styled.img<LayoutProps & SpaceProps>`
  ${layout};
  ${space};

  max-width: 40vw;
  max-height: 60vh;
`;

const Home = () => {
  return (
    <Main flexDirection="column" justifyContent="space-between">
      <Flex justifyContent="space-between" alignItems="flex-start">
        <DoubleLineTextImage src={oxymore} />
        <Flex justifyContent="space-between">
          <LanguageButtons />
          <NavMenu />
        </Flex>
      </Flex>
      <ProjectsLink to="/projects">
        <ProjectsImg src={alpha} />
      </ProjectsLink>
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Flex flexDirection="column" alignItems="flex-start">
          <SingleLineTextImage src={number} mb={3} />
          <BuyButton
            successUrl={`${process.env.REACT_APP_BASE_URL}/oxymore`}
            cancelUrl={`${process.env.REACT_APP_BASE_URL}/oxymore`}
          />
        </Flex>
        <ManifestoLink to="/manifesto" alignItems="flex-end">
          <DoubleLineTextImage src={manifesto} />
        </ManifestoLink>
      </Flex>
    </Main>
  );
};

export default Home;
