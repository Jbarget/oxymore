import React, { useCallback } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

type HeadingProps = SpaceProps;

const Title = styled.h1<HeadingProps>`
  ${space}
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
    <div>
      <Title p={3}>OXYMORE</Title>
      <LangButton onClick={onLangClick("en")}>EN</LangButton>
      <LangButton onClick={onLangClick("es")}>ES</LangButton>
    </div>
  );
};

export default Home;
