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

const Title = styled.h1<HeadingProps>`
  ${space}
  ${color}
  ${typography}
  display:flex;
  align-items: center;
  justify-content: center;
  font-family: SangBleu OG Serif Light Regular;
`;

const LangButton = styled.button``;

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
        height: "100vh",
      }}
    >
      <Title p={7} color="athensGray" fontSize={5}>
        OXYMORE
      </Title>
      <LangButton onClick={onLangClick("en")}>EN</LangButton>
      <LangButton onClick={onLangClick("es")}>ES</LangButton>
    </div>
  );
};

export default Home;
