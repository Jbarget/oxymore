import {
  ABOUT_URL,
  ADVERTISING_URL,
  BELLE_DE_JOUR_URL,
  CONSCIOUS_SHOPPING_URL,
  CONTACT_URL,
  EROTIC_STORIES_URL,
  EYES_URL,
  FASHION_EDITORIAL_URL,
  KAI_LANDRE_URL,
  LEO_ADEF_URL,
  MANIFESTO_URL,
  MAP_URL,
  OXYMORE_URL,
  PROJECTS_URL,
} from "../constants/router-urls";
import styled, { css } from "styled-components";

import Flex from "./Flex";
import React from "react";
import eyeProjectBackground from "../assets/backgrounds/eye-bg.png";
import marbleBackground from "../assets/backgrounds/background.png";
import theme from "./theme";
import { useLocation } from "react-router-dom";

const black = `${theme.colors.black}`;

type Background = typeof black | typeof marbleBackground;

const BackgroundElement = styled.div<{ background: Background }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-repeat: repeat-y;
  background-size: cover;
  height: 100%;
  z-index: ${theme.zIndexes.behind};
  ${props =>
    props.background === `${black}`
      ? `background-color: ${black}`
      : `background: url(${props.background});`}
  ${props =>
    props.background === eyeProjectBackground && eyeInteractionBackgroundStyles}
`;

const eyeInteractionBackgroundStyles = css`
  background-position: bottom;
`;

const getBackground = (pathname: string): Background => {
  const pagesWithMarbleBG = ["/", PROJECTS_URL, OXYMORE_URL];
  const pagesWithBlackBG = [
    MANIFESTO_URL,
    ADVERTISING_URL,
    ABOUT_URL,
    CONTACT_URL,
    CONSCIOUS_SHOPPING_URL,
    FASHION_EDITORIAL_URL,
    KAI_LANDRE_URL,
    EROTIC_STORIES_URL,
    MAP_URL,
    BELLE_DE_JOUR_URL,
    LEO_ADEF_URL,
  ];

  if (pathname === EYES_URL) {
    return eyeProjectBackground;
  }
  if (pagesWithBlackBG.includes(pathname)) {
    return black;
  }
  if (pagesWithMarbleBG.includes(pathname)) {
    return marbleBackground;
  }
  return black;
};

const Background: React.FC = ({ children }) => {
  const location = useLocation();
  const background = getBackground(location.pathname);

  return (
    <Flex flex="auto" flexDirection="column">
      <BackgroundElement background={background} />
      {children}
    </Flex>
  );
};

export default Background;
