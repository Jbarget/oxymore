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

const Main = styled.main`
  height: 100%;
  object-fit: contain;
`;

const Grid = styled.div<GridProps & FlexboxProps & SpaceProps>`
  display: grid;
  ${grid};
  ${flexbox};
  ${space};
`;

const AdvertContainer = styled.div<LayoutProps & SpaceProps>`
  display: flex;
  height: 100%;
  object-fit: contain;
  ${layout};
  ${space};
`;

const ImgContainer = styled.div<LayoutProps & SpaceProps & FlexboxProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  object-fit: contain;
  ${layout};
  ${space};
  ${flexbox};
`;

const Img = styled.img<LayoutProps & SpaceProps>`
  height: 100%;
  ${layout};
  ${space};
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
    <Main>
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
        <AdvertContainer p={4}>
          <ImgContainer
            mb={4}
            justifyContent={["left", "left", "left", "center"]}
          >
            <Img src={salazraki} alt="salazraki advert" mb={4}></Img>
            <P fontSize={fontSizes} textAlign="justify">
              {t("advertising.salazraki")}
            </P>
          </ImgContainer>
        </AdvertContainer>
        <AdvertContainer p={4}>
          <ImgContainer
            mb={4}
            justifyContent={["left", "left", "left", "center"]}
          >
            <Img src={voltrova} alt="voltrova advert" mb={4}></Img>
            <P fontSize={fontSizes} textAlign="justify">
              {t("advertising.voltrova")}
            </P>
          </ImgContainer>
        </AdvertContainer>
      </Grid>
    </Main>
  );
};

export default Advertising;