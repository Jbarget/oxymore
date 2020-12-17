import {
  LayoutProps,
  SpaceProps,
  TypographyProps,
  layout,
  space,
  typography,
} from "styled-system";

import Flex from "./Flex";
import React from "react";
import honestCouponsImg from "./assets/advertising-page/honest-coupons.jpeg";
import salazrakiImg from "./assets/advertising-page/salazraki.jpg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import voltrovaImg from "./assets/advertising-page/voltrova.jpg";

const columnWidths = ["100%", "100%", "100%", "44%", "44%"];

const Img = styled.img<LayoutProps & SpaceProps>`
  flex: auto;
  object-fit: cover;
  ${layout};
  ${space};
`;

const P = styled.p<TypographyProps & SpaceProps>`
  text-transform: uppercase;
  ${space};
  ${typography};
`;

const Advertising: React.FC = () => {
  const { t } = useTranslation();
  const fontSizes = [1, 2, 3, 3];

  return (
    <Flex
      flex="auto"
      flexDirection={["column", "column", "column", "row"]}
      justifyContent="center"
      mt={4}
    >
      <Flex
        flex="auto"
        flexDirection="column"
        minWidth={columnWidths}
        width={columnWidths}
        mr={[0, 0, 0, 8]}
      >
        <Img src={voltrovaImg} alt="Advertsing image"></Img>
        <P fontSize={fontSizes} textAlign="justify" mt={4} mb={6}>
          {t("advertising.salazraki")}
        </P>
      </Flex>
      <Flex
        flex="auto"
        flexDirection="column"
        p={0}
        minWidth={columnWidths}
        width={columnWidths}
        ml={[0, 0, 0, 2]}
      >
        <Img src={salazrakiImg} alt="Advertsing image"></Img>
        <P fontSize={fontSizes} textAlign="justify" mt={4} mb={6}>
          {t("advertising.voltrova")}
        </P>
        <Img src={honestCouponsImg} alt="Advertsing image"></Img>
        <P fontSize={fontSizes} textAlign="justify" mt={4} mb={6}>
          {t("advertising.honest-coupons")}
        </P>
      </Flex>
    </Flex>
  );
};

export default Advertising;
