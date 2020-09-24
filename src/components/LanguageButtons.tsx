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
  &:hover {
    transform: scale(1.05);
    ${(props) => props.isActive && ActiveButton}
`;

const ActiveButton = css`
  text-decoration-line: underline;
`;

const LanguageButtons = () => {
  const fontSizes = [1, 2, 3, 4];
  const [isActive, setIsActive] = useState(false);
  const onLangClick = useCallback(
    (countryId: string) => () => i18next.changeLanguage(countryId),
    []
  ) && setIsActive(!isActive)};

  return (
    <Container display="flex" flexDirection="row" mr={8}>
      <LangButton onClick={onLangClick("en")} fontSize={fontSizes} mr={1}>
        EN
      </LangButton>
      <LangButton onClick={onLangClick("es")} fontSize={fontSizes} ml={1}>
        ES
      </LangButton>
    </Container>
  );
};

export default LanguageButtons;
