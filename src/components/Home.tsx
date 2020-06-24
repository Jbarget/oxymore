import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  color,
  space,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";
import i18next from "i18next";
import Background from "./assets/fondo-web.jpg";
import stairs from "./assets/escalera.png";
import shell from "./assets/concha.png";
import eye from "./assets/eye.png";
import statue from "./assets/androginus.png";
import dragon from "./assets/dragon.png";
import knife from "./assets/cuchillo.png";
import mask from "./assets/mascara.png";
import spider from "./assets/hormiga.png";
import magnify from "./assets/lupa.png";

type HeadingProps = SpaceProps & ColorProps & TypographyProps;

const Header = styled.div<HeadingProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1<HeadingProps>`
  ${space}
  ${color}
  ${typography}
  font-family: SangBleu OG Serif Light Regular;
`;

const Container = styled.div`
  font-family: SangBleu OG Serif Light Regular;
  height: auto;
  position: absolute;
  float: right;
  right: 100px;
  display: flex;
  cursor: pointer;
  p:hover,
  p:active {
    color: black;
  }
`;

const LangButton = styled.p<HeadingProps>`
  ${typography}
  ${color}
  ${space}
  font-family: SangBleu OG Serif Light Regular;
`;

const IconContainer = styled.div`
  width: 200px;
  height: 120px;
`;

const Icon = styled.a`
  a:hover {
    position: relative;
    width: 500px;
    height: auto;
  }
`;

const Home = () => {
  const onLangClick = useCallback(
    (countryId: string) => () => i18next.changeLanguage(countryId),
    []
  );
  return (
    <div
      className="bg_image"
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundSize: "cover",
        height: "140vh",
      }}
    >
      {" "}
      <Header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title p={7} color="athensGray" fontSize={5}>
            OXYMORE
          </Title>
        </Link>
        <Container>
          <LangButton
            onClick={onLangClick("en")}
            color="athensGray"
            fontSize={3}
            p={1}
          >
            EN
          </LangButton>
          <LangButton
            onClick={onLangClick("es")}
            color="athensGray"
            fontSize={3}
            p={1}
          >
            ES
          </LangButton>
        </Container>
      </Header>
      <IconContainer>
        <Icon>
          <img
            src={stairs}
            style={{
              position: "relative",
              top: 100,
              left: 100,
            }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={shell}
            style={{ position: "relative", top: 240, left: 100 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={eye}
            style={{ position: "relative", bottom: 240, left: 420 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={statue}
            style={{ position: "relative", top: 54, left: 420 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={dragon}
            style={{ position: "relative", bottom: 260, left: 720 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={knife}
            style={{ position: "relative", bottom: 40, left: 680 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={mask}
            style={{ position: "relative", bottom: 720, left: 1020 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={spider}
            style={{ position: "relative", bottom: 320, left: 1020 }}
          ></img>
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <img
            src={magnify}
            style={{ position: "relative", bottom: 660, left: 1210 }}
          ></img>
        </Icon>
      </IconContainer>
    </div>
  );
};

export default Home;
