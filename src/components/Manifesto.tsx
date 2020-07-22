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

const Main = styled.main<SpaceProps & LayoutProps & FlexboxProps>`
  min-height: 100vh;
  background: black;
  display: flex;
  ${space};
  ${layout};
  ${flexbox}
`;

const Container = styled.div<
  SpaceProps & LayoutProps & GridProps & FlexboxProps
>`
  ${space};
  ${layout};
  ${grid};
  ${flexbox};
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

const Paragraph = styled.p<
  TypographyProps & SpaceProps & FlexboxProps & GridProps
>`
  text-transform: uppercase;
  ${typography};
  ${space};
  ${flexbox};
  ${grid};
`;

const Manifesto = () => {
  const { t } = useTranslation();

  return (
    <Main p={7} alignItems="center" justifyContent="center">
      <Header />
      <Container
        display="block"
        px={4}
        mt={["20%", null, null, null, null, null, "0%"]}
      >
        <H1 fontSize={[2, 4, 5]} pb={5}>
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
            "repeat(2, 47% [col-start])",
            "repeat(2, 47.5% [col-start])",
            "repeat(2, 48.5% [col-start])",
            "repeat(2, 49% [col-start])",
          ]}
        >
          <Paragraph fontSize={[1, 3, 4]} textAlign="justify" pb={5}>
            {t("manifesto.manifesto")}
          </Paragraph>
          <Paragraph fontSize={[1, 3, 4]} textAlign="justify" pb={5}>
            {t("manifesto.manifesto")}
          </Paragraph>
        </Grid>
      </Container>
    </Main>
  );
};

export default Manifesto;
