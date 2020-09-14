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
import salazraki from "./assets/advertising-page/salazraki-720.jpg";
import voltrova from "./assets/advertising-page/voltrova-720.jpg";

const Main = styled.main<SpaceProps & FlexboxProps>`
  display: flex;
  min-height: 100vh;
  ${space};
  ${flexbox};
`;

const Grid = styled.div<GridProps & FlexboxProps & SpaceProps>`
  display: grid;
  height: 90%;
  ${grid};
  ${flexbox};
  ${space};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div<SpaceProps>`
  ${space};
`;

const Paragraph = styled.p<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${typography};
  ${space};
  text-align: justify;
  line-height: 1.5;
`;

const Advertising = () => {
  const { t } = useTranslation();
  const fontSizes = [1, 2, 3, 4];

  return (
    <Main p={8} flexDirection="column">
      <Grid
        justifyContent="center"
        p={6}
        gridColumnGap="4%"
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 50% [col-start])",
        ]}
      >
        <Container>
          <ImgContainer mb={3}>
            <img src={salazraki} alt="salazraki" />
          </ImgContainer>
          <Paragraph pb={5} fontSize={fontSizes}>
            {t("advertising.salazraki")}
          </Paragraph>
        </Container>
        <Container>
          <ImgContainer mb={3}>
            <img src={voltrova} alt="voltrova" />
          </ImgContainer>
          <Paragraph pb={5} fontSize={fontSizes}>
            {t("advertising.voltrova")}
          </Paragraph>
        </Container>
      </Grid>
    </Main>
  );
};

export default Advertising;
