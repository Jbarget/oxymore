import { SpaceProps, TypographyProps, space, typography } from "styled-system";

import Flex from "./Flex";
import Grid from "./Grid";
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

type ManifestoProps = TypographyProps & SpaceProps;

const H1 = styled.h1<ManifestoProps>`
  text-transform: uppercase;
  ${typography};
  ${space};
`;

const Paragraph = styled.p<ManifestoProps>`
  ${typography};
  ${space};
  text-transform: uppercase;
  text-align: justify;
  line-height: 1.5;
`;

const Manifesto = () => {
  const { t } = useTranslation();

  return (
    <Flex flex="auto" flexDirection="column" justifyContent="center">
      <H1 fontSize={[4, 5, 5, 6]} my={4}>
        {t("manifesto.header")}
      </H1>
      <Grid
        gridColumnGap="4%"
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 48% [col-start])",
        ]}
      >
        <Paragraph mb={5} fontSize={[4, 4, 4, 5]}>
          {t("manifesto.left-column")}
        </Paragraph>
        <Paragraph mb={5} fontSize={[4, 4, 4, 5]}>
          {t("manifesto.right-column")}
        </Paragraph>
      </Grid>
    </Flex>
  );
};

export default Manifesto;
