import React, { useCallback, Fragment } from "react";
import styled from "styled-components";
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
import Background from "./assets/fondo-web.jpg";

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
`;

const LangButton = styled.p<HeadingProps>`
  ${typography}
  ${color}
  ${space}
  font-family: SangBleu OG Serif Light Regular;
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
        height: "100vh",
      }}
    >
      {" "}
      <Header>
        <Title p={7} color="athensGray" fontSize={5}>
          OXYMORE
        </Title>
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
    </div>
  );
};

export default Home;
