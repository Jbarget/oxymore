import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  space,
  typography,
  flexbox,
  grid,
  SpaceProps,
  TypographyProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  layout,
} from "styled-system";

const Main = styled.main<FlexboxProps>`
  display: flex;
  height: 100%;
  ${flexbox};
`;

const Container = styled.div<LayoutProps>`
  ${layout};
`;

const H1 = styled.h1<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${typography};
  ${space};
`;

const Paragraph = styled.p<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${typography};
  ${space};
  text-align: justify;
  line-height: 1.5;
`;

const Manifesto = () => {
  const { t } = useTranslation();
  const fontSizes = [3, 4, 5, 5];

  return (
    <Main flexDirection="column" justifyContent="center">
      <Container minHeight="50%" maxHeight="80%">
        <H1 fontSize={[4, 5, 6, 6]} pb={5}>
          {t("manifesto.header")}
        </H1>

        <Paragraph pb={5} fontSize={fontSizes}>
          {t("manifesto.manifesto")}
        </Paragraph>
      </Container>
    </Main>
  );
};

export default Manifesto;
