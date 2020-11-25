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
import oxymore from "./assets/home-page/oxymore.png";
import manifesto from "./assets/home-page/manifesto.png";
import number from "./assets/home-page/number-one.png";
import alpha from "./assets/home-page/360-alpha.png";
import LanguageButtons from "./LanguageButtons";
import Flex from "./Flex";

const ManifestoLink = styled(NavLink)<TypographyProps>`
  ${typography};
  display: flex;
  alignitems: flex-end;
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
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.01);
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
    <Flex flex="auto" flexDirection="column" justifyContent="space-between">
      <Flex justifyContent="space-between" alignItems="flex-start">
        <DoubleLineTextImage src={oxymore} alt="oxymore image" />
        <Flex justifyContent="space-between">
          <LanguageButtons />
          <NavMenu />
        </Flex>
      </Flex>
      <ProjectsLink to="/projects">
        <ProjectsImg src={alpha} alt="alpha image" />
      </ProjectsLink>
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Flex flexDirection="column" alignItems="flex-start">
          <SingleLineTextImage src={number} mb={3} />
          <BuyButton
            successUrl={`${process.env.REACT_APP_BASE_URL}/oxymore`}
            cancelUrl={`${process.env.REACT_APP_BASE_URL}/oxymore`}
          />
        </Flex>
        <ManifestoLink to="/manifesto">
          <DoubleLineTextImage src={manifesto} alt="manifesto image" />
        </ManifestoLink>
      </Flex>
    </Flex>
  );
};

export default Home;
