import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  layout,
  space,
  typography,
  background,
  flexbox,
  border,
  grid,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  BackgroundProps,
  FlexboxProps,
  BorderProps,
  GridProps,
} from "styled-system";

const Main = styled.main<
  SpaceProps & BackgroundProps & LayoutProps & FlexboxProps
>`
  min-height: 100vh;
  overflow: hidden;
  ${space};
  ${background};
  ${layout};
  ${flexbox}
`;

const H1 = styled.h1<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${typography};
  ${space};
`;

const Grid = styled.div<GridProps & FlexboxProps>`
  display: grid;
  ${grid};
  ${flexbox};
`;

const Container = styled.div<SpaceProps & LayoutProps>`
  ${space};
  ${layout};
`;

const Paragraph = styled.p<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${typography};
  ${space};
`;

const Manifesto = () => {
  const { t } = useTranslation();

  return (
    <Main
      background="black"
      px={[1, 4, 6]}
      pt={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container p={4} display="block">
        <H1 fontSize={[2, 4, 5]} pb={5}>
          {t("manifesto.header")}
        </H1>
        <Grid
          justifyContent="center"
          gridColumnGap={10}
          gridRowGap={1}
          gridTemplateColumns={[
            "repeat(1, 100% [col-start])",
            "repeat(1, 100% [col-start])",
            "repeat(1, 100% [col-start])",
            "repeat(1, 100% [col-start])",
            "repeat(2, 48% [col-start])",
            "repeat(2, 48% [col-start])",
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
