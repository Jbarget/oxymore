import React, { useCallback, useState } from "react";
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

type HeadingProps = ColorProps & SpaceProps & TypographyProps;

const Title = styled.h1<HeadingProps>`
  ${color}
  ${space}
  ${typography}
`;

const LangButton = styled.button``;

const Home = () => {
  const { t } = useTranslation();
  const onLangClick = useCallback(
    (countryId: string) => () => i18next.changeLanguage(countryId),
    []
  );
  const [expanded, setExpanded] = useState(false);
  return (
    <main>
      <Title color="primary" bg="error" p={3} fontSize={3}>
        {t("home.header")}
      </Title>
      <LangButton onClick={onLangClick("en")}>EN</LangButton>
      <LangButton onClick={onLangClick("es")}>ES</LangButton>
    </main>
  );
};

export default Home;
