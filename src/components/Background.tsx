import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import marbleBackground from "./assets/backgrounds/background.png";
import Flex from "./Flex";
import { zIndexes } from "./theme";

type Background = "black" | typeof marbleBackground;

const BackgroundElement = styled.div<{ background: Background }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${(props) =>
    props.background === "black"
      ? "background-color: black;"
      : `background: url(${props.background});`}
  background-repeat: repeat-y;
  background-size: cover;
  z-index: ${zIndexes.behind};
`;

const getBackground = (pathname: string): Background => {
  const pagesWithMarbleBG = [
    "/",
    "/projects",
    "/manifesto",
    "/advertising",
    "/about",
    "/contact",
    "/buy",
    "/oxymore",
  ];
  const pagesWithBlackBG = [
    "/projects/consciousshopping",
    "/projects/fashioneditorial",
    "/projects/kailandre",
    "/projects/eroticstories",
    "/projects/eyes",
    "/projects/themap",
    "/projects/belledejour",
    "/projects/leoadef",
  ];

  if (pagesWithBlackBG.includes(pathname)) {
    return "black";
  }
  if (pagesWithMarbleBG.includes(pathname)) {
    return marbleBackground;
  }

  return "black";
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
