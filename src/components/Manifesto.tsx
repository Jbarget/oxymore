import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  layout,
  space,
  typography,
  flexbox,
  grid,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  FlexboxProps,
  GridProps,
} from "styled-system";
import Header from "./Header";

const Main = styled.main<SpaceProps & FlexboxProps>`
  min-height: 100vh;
  display: flex;
  ${space};
  ${flexbox}
`;

const Container = styled.div<SpaceProps & LayoutProps>`
  ${space};
  ${layout};
`;

const Grid = styled.div<GridProps & FlexboxProps>`
  display: grid;
  ${grid};
  ${flexbox};
`;

const H1 = styled.h1<TypographyProps & SpaceProps & GridProps>`
  text-transform: uppercase;
  ${typography};
  ${space};
  ${grid};
`;

const Paragraph = styled.p<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${typography};
  ${space};
  text-align: justify;
`;

const Manifesto = () => {
  const { t } = useTranslation();
  const fontSizes = [1, 2, null, null, 2, 3, 4];

  return (
    <Main p={6} alignItems="center" justifyContent="center">
      <Header />
      <Container
        display="block"
        mt={["20%", null, null, "15%", null, null, null, "10%", "0"]}
        px={2}
      >
        <H1 fontSize={[2, null, null, null, 3, 4, 5]} pb={5}>
          {t("manifesto.header")}
        </H1>
        <Grid
          justifyContent="center"
          gridColumnGap={10}
          gridTemplateColumns={[
            "repeat(1, 100% [col-start])",
            null,
            null,
            null,
            null,
            null,
            null,
            "repeat(2, 47.5% [col-start])",
            "repeat(2, 48.5% [col-start])",
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
      </Container>
    </Main>
  );
};

export default Manifesto;
