import {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system";

import BuyButton from "./BuyButton";
import Flex from "./Flex";
import LanguageButtons from "./LanguageButtons";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import { PROJECTS_URL } from "../constants/router-urls";
import PreviewOrProjectPage from "./projects/PreviewOrProjectPage";
import React from "react";
import alpha from "../assets/home-page/360-alpha.gif";
import manifesto from "../assets/home-page/manifesto.png";
import number from "../assets/home-page/number-one.png";
import oxymore from "../assets/home-page/oxymore.png";
import styled from "styled-components";

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

const ProjectPageLink = styled(NavLink)<TypographyProps & FlexboxProps>`
  ${typography};
  display: flex;
  align-self: center;
  align-items: flex-start;
  justify-content: flex-start;
  ${flexbox}
`;

const AlphaLogo = styled.img<LayoutProps & SpaceProps>`
  ${layout};
  ${space};
  max-width: 40vw;
  max-height: 60vh;
  transition: 1.5s;
`;

const HomeContent = () => {
  return (
    <Flex flex="auto" flexDirection="column" justifyContent="space-between">
      <Flex justifyContent="space-between" alignItems="flex-start">
        <DoubleLineTextImage src={oxymore} alt="oxymore image" />
        <Flex justifyContent="space-between">
          <LanguageButtons />
          <NavMenu />
        </Flex>
      </Flex>
      <ProjectPageLink to={PROJECTS_URL}>
        <AlphaLogo src={alpha} alt="alpha logo" />
      </ProjectPageLink>
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Flex flexDirection="column" alignItems="flex-start">
          <SingleLineTextImage src={number} mb={3} />
          <BuyButton />
        </Flex>
        <ManifestoLink to="/manifesto">
          <DoubleLineTextImage src={manifesto} alt="manifesto image" />
        </ManifestoLink>
      </Flex>
    </Flex>
  );
};

const Home = () => {
  const launchDate = "2021-01-15";
  return (
    <PreviewOrProjectPage
      launchDate={launchDate}
      PreviewPage={Loading}
      ProjectPage={HomeContent}
    />
  );
};

export default Home;
