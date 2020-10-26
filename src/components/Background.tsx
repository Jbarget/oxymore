import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import marbleBackground from "./assets/backgrounds/background.png"

type Background = "black" | typeof marbleBackground;

const Div = styled.div<{ background: Background }>`
  ${props => props.background === "black"
    ? "background-color: black;"
    : `background: url(${props.background});`
  }
  background-repeat: repeat-y;
  background-size: cover;
  height: 100%;
`

const getBackground = (pathname: string): Background => {
  const pagesWithMarbleBG = [ "/", "/projects", "/advertising", "/about", "/contact", "/buy", "/oxymore" ];
  const pagesWithBlackBG = ["/projects/consciousshopping", "/projects/fashioneditorial", "/projects/kailandre", "/projects/eroticstories", "/projects/eyes", "/projects/themap", "/projects/belledejour", "/projects/leoadef"];

  if (pagesWithBlackBG.includes(pathname)) {
    return "black";
  }
  if (pagesWithMarbleBG.includes(pathname)) {
    return marbleBackground;
  }

  return "black";
}

const Background: React.FC = ({ children }) => {
  const location = useLocation();
  const background = getBackground(location.pathname)

  return (
    <Div background={background}>
      {children}
    </Div>
  )
}

export default Background;