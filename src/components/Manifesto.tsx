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
} from "styled-system";

const Main = styled.main<SpaceProps & FlexboxProps>`
  display: flex;
  height: 80vh;
  ${space};
  ${flexbox};
`;

const Grid = styled.div<GridProps & FlexboxProps>`
  display: grid;
  ${grid};
  ${flexbox};
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
`;

const Manifesto = () => {
  const { t } = useTranslation();
  const fontSizes = [1, 2, 3, 4];

  return (
    <Main p={8} flexDirection="column" justifyContent="center">
      <H1 fontSize={[2, 3, 4, 5]} pb={5}>
        {t("manifesto.header")}
      </H1>
      <Grid
        justifyContent="center"
        gridColumnGap="2%"
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          null,
          null,
          "repeat(2, 49% [col-start])",
        ]}
      >
        <Paragraph pb={5} fontSize={fontSizes}>
          {t("manifesto.manifesto")}
        </Paragraph>
        <Paragraph pb={5} fontSize={fontSizes}>
          {t("manifesto.manifesto")}
        </Paragraph>
      </Grid>
    </Main>
  );
};

export default Manifesto;
