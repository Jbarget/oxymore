import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "./assets/home-page/background.jpg";
import {
  color,
  space,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

type HeadingProps = ColorProps & SpaceProps & TypographyProps;

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

const LangButton = styled.button<HeadingProps>`
  ${color}
  ${space}
  ${typography}
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

const Home = () => {
  const { t } = useTranslation();
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
      </Header>
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
    </div>
  );
};

export default Home;
