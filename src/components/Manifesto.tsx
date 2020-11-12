import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  space,
  typography,
  flexbox,
  SpaceProps,
  TypographyProps,
  FlexboxProps,
  LayoutProps,
  layout,
} from "styled-system";
import Grid from "./Grid";
import Flex from "./Flex";

const Container = styled.div<LayoutProps>`
  ${layout};
`;

const H1 = styled.h1<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${typography};
  ${space};
`;

const Paragraph = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space};
  text-transform: uppercase;
  text-align: justify;
  line-height: 1.5;
`;

const Manifesto = () => {
  const { t } = useTranslation();
  const fontSizes = [3, 4, 5, 5];

  return (
    <Flex height="100%" flexDirection="column" justifyContent="center">
      <Container height="100%">
        <H1 fontSize={[2, 5]} pb={5}>
          {t("manifesto.header")}
        </H1>
        <Grid
          gridColumnGap="4%"
          gridTemplateColumns={[
            "repeat(1, 100% [col-start])",
            "repeat(1, 100% [col-start])",
            "repeat(1, 100% [col-start])",
            "repeat(2, 48% [col-start])",
          ]}
        >
          <Paragraph pb={5} fontSize={fontSizes}>
            {t("manifesto.manifesto")}
          </Paragraph>
          <Paragraph pb={5} fontSize={fontSizes}>
            {t("manifesto.manifesto")}
          </Paragraph>
        </Grid>
      </Container>
    </Flex>
  );
};

export default Manifesto;
