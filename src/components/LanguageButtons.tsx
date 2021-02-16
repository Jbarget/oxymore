import {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system";
import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

import i18next from "i18next";

const Container = styled.div<FlexboxProps & LayoutProps & SpaceProps>`
  ${flexbox};
  ${layout};
  ${space};
`;

const LangButton = styled.button<
  SpaceProps & TypographyProps & { isActive: boolean }
>`
  ${typography};
  ${space};
  ${props => props.isActive && ActiveLang}
  background: transparent;
  border: none;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.03);
    color: white;
  }
`;

const ActiveLang = css`
  color: white;
`;

const LanguageButtons = () => {
  const fontSizes = [1, 2, 3, 4];

  const [activeLang, setActiveLang] = useState<string>();

  const onLangClick = useCallback(
    (countryId: string) => () => {
      i18next.changeLanguage(countryId);
      setActiveLang(countryId);
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
