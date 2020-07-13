import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  color,
  layout,
  space,
  typography,
  background,
  flexbox,
  border,
  grid,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  BackgroundProps,
  FlexboxProps,
  BorderProps,
  GridProps,
} from "styled-system";

const Main = styled.main<
  ColorProps & SpaceProps & BackgroundProps & LayoutProps & FlexboxProps
>`
  min-height: 100vh;
  overflow: hidden;
  ${color};
  ${space};
  ${background};
  ${layout};
  ${flexbox}
`;

const H1 = styled.h1<ColorProps & TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${color};
  ${typography};
  ${space};
`;

const Grid = styled.div<GridProps & FlexboxProps>`
  display: grid;
  ${grid};
  ${flexbox};
`;

const Container = styled.div<
  ColorProps & SpaceProps & BorderProps & LayoutProps
>`
  ${color};
  ${space};
  ${border}
  ${layout};
`;

const Paragraph = styled.p<ColorProps & TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${color};
  ${typography};
  ${space};
`;

const Manifesto = () => {
  const { t } = useTranslation();

  return (
    <Main
      bg="black"
      px={[1, 4, 6]}
      pt={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container p={4} m={5}>
        <H1 color="athensGray" fontSize={[2, 4, 5]} p={4}>
          {t("manifesto.header")}
        </H1>
        <Grid
          justifyContent="center"
          gridColumnGap={5}
          gridRowGap={1}
          gridTemplateColumns={[
            "repeat(1, 100% [col-start])",
            "repeat(1, 100% [col-start])",
            "repeat(1, 100% [col-start])",
            "repeat(2, 50% [col-start])",
            "repeat(2, 50% [col-start])",
          ]}
        >
          <Paragraph
            color="athensGray"
            fontSize={[1, 3, 4]}
            p={3}
            textAlign="justify"
            m={5}
          >
            {t("manifesto.manifesto")}{" "}
          </Paragraph>
          <Paragraph
            color="athensGray"
            fontSize={[1, 3, 4]}
            p={4}
            textAlign="justify"
            m={5}
          >
            {t("manifesto.manifesto")}{" "}
          </Paragraph>
        </Grid>
      </Container>
    </Main>
  );
};

export default Manifesto;
