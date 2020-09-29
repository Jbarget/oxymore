import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import {
  space,
  typography,
  layout,
  flexbox,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";
import i18next from "i18next";

const Container = styled.div<FlexboxProps & LayoutProps & SpaceProps>`
  ${flexbox};
  ${layout};
  ${space};
`;

const LangButton = styled.button<
  SpaceProps & TypographyProps & { isActive: boolean }
>`
  background: transparent;
  border: none;
  ${typography};
  ${space};
  transition: transform 0.2s;
  ${(props) => props.isActive && ActiveLang}
  &:hover {
    transform: scale(1.05);
  
`;

const ActiveLang = css`
  text-decoration-line: underline;
`;

const LanguageButtons = () => {
  const fontSizes = [1, 2, 3, 4];

  const [activeLang, setActiveLang] = useState();

  const onLangClick = useCallback(
    (countryId: string) => () => {
      i18next.changeLanguage(countryId);
      setActiveLang(activeLang);
    },
    []
  );

  return (
    <Container display="flex" flexDirection="row" mr={8}>
      <LangButton
        onClick={onLangClick("en")}
        fontSize={fontSizes}
        mr={1}
        isActive={activeLang === "en"}
      >
        EN
      </LangButton>
      <LangButton
        onClick={onLangClick("es")}
        fontSize={fontSizes}
        ml={1}
        isActive={activeLang === "es"}
      >
        ES
      </LangButton>
    </Container>
  );
};

export default LanguageButtons;
