import React from "react";
import styled, { css } from "styled-components";
import Bg from "./assets/home-page/background.jpg";
import Alpha from "./assets/home-page/360_alpha.png";
import Oxymore from "./assets/home-page/oxymore.png";
import Number from "./assets/home-page/number-one.png";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  background,
  BackgroundProps,
  typography,
  TypographyProps,
  FlexboxProps,
  flexbox,
  PositionProps,
  position,
  ColorProps,
  color,
} from "styled-system";

type LogoProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  ColorProps &
  TypographyProps;

const Background = styled.div<BackgroundProps>`
  ${background};
`;

const AlphaContainer = styled.div<LogoProps>`
  ${layout};
  ${position};
  ${flexbox};
`;

const BuyContainer = styled.div<LogoProps>`
  ${layout};
  ${position};
  ${flexbox};
`;

const OxymoreContainer = styled.div<LogoProps>`
  ${space};
  ${layout};
  ${position};
`;

const visibleStyles = css`
  font-family: SangBleu OG Serif Light Regular;
  outline-color: #f4f4f6;
  outline-style: solid;
  outline-width: thin;
  text-align: center;
`;

const BuyButton = styled.div<LogoProps>`
  ${space};
  ${layout};
  ${color};
  ${visibleStyles};
`;

const Home = () => {
  return (
    <div
      className="bg_image"
      style={{
        backgroundImage: "url(" + Bg + ")",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OxymoreContainer position="absolute" top={2} left={2} width="20%" p={5}>
        {" "}
        <img src={Oxymore} />
      </OxymoreContainer>
      <AlphaContainer width="25%">
        <img src={Alpha} />
      </AlphaContainer>
      <BuyContainer position="absolute" left={100} bottom={100} size="5%" p={5}>
        {" "}
        <img src={Number} />
        <BuyButton width={1} p={1} color="athensGray" mt={4} py={1}>
          BUY
        </BuyButton>
      </BuyContainer>
    </div>
  );
};

export default Home;
