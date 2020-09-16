import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  layout,
  space,
  grid,
  typography,
  LayoutProps,
  SpaceProps,
  GridProps,
  TypographyProps,
  FlexboxProps,
  flexbox,
} from "styled-system";

import voltrova from "./assets/advertising-page/voltrova-720.jpg";
import salazraki from "./assets/advertising-page/salazraki-720.jpg";

const Main = styled.main<SpaceProps>`
  min-height: 100vh;
  ${space};
`;

const Grid = styled.div<GridProps & FlexboxProps & SpaceProps>`
  display: grid;
  ${grid};
  ${flexbox};
  ${space};
`;

const AdvertContainer = styled.div<LayoutProps & SpaceProps>`
  object-fit: contain;
  height: 100%;
  ${layout};
  ${space};
`;

const ImgContainer = styled.div<LayoutProps & SpaceProps>`
  object-fit: contain;
  height: 100%;
  ${layout};
  ${space};
`;

const Img = styled.img<LayoutProps>`
  ${layout};
  width: 100%;
  height: 100%;
`;

const P = styled.p<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${space};
  ${typography};
`;

const Advertising = () => {
  const { t } = useTranslation();
  const fontSizes = [1, 2, 3, 4];
  return (
    <Main p={8} pt={5}>
      <Grid
        gridRowGap={[1, 1, 1, 0]}
        justifyContent="center"
        gridTemplateColumns={[
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(1, 100% [col-start])",
          "repeat(2, 50% [col-start])",
          "repeat(2, 50% [col-start])",
        ]}
      >
        <AdvertContainer>
          <ImgContainer mb={6}>
            <Img src={salazraki} alt="voltrova advert"></Img>
          </ImgContainer>
          <P p={6} fontSize={fontSizes} textAlign="justify">
            {t("advertising.salazraki")}
          </P>
        </AdvertContainer>
        <AdvertContainer>
          <ImgContainer mb={6}>
            <Img src={voltrova} alt="voltrova advert"></Img>
          </ImgContainer>
          <P p={6} fontSize={fontSizes} textAlign="justify">
            {t("advertising.voltrova")}
          </P>
        </AdvertContainer>
      </Grid>
    </Main>
  );
};

export default Advertising;
