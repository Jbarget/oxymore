import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  layout,
  space,
  typography,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import voltrova from "./assets/advertising-page/voltrova.jpg";
import salazraki from "./assets/advertising-page/salazraki.jpg";
import Flex from "./Flex";

const columnWidths = ["100%", "100%", "100%", "50%", "50%"];

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
  const fontSizes = [1, 2, 3, 4];
  return (
    <Flex
      flex="auto"
      flexDirection={["column", "column", "column", "row"]}
      justifyContent="center"
    >
      <Flex
        flex="auto"
        flexDirection="column"
        mb={4}
        minWidth={columnWidths}
        width={columnWidths}
        mr={[0, 0, 0, 2]}
      >
        <Img src={salazraki} alt="Salazraki image" mb={2}></Img>
        <P fontSize={fontSizes} textAlign="justify">
          {t("advertising.salazraki")}
        </P>
      </Flex>
      <Flex
        flex="auto"
        flexDirection="column"
        p={0}
        mb={4}
        minWidth={columnWidths}
        width={columnWidths}
        ml={[0, 0, 0, 2]}
      >
        <Img src={voltrova} alt="Voltrova image" mb={2}></Img>
        <P fontSize={fontSizes} textAlign="justify">
          {t("advertising.voltrova")}
        </P>
      </Flex>
    </Flex>
  );
};

export default Advertising;
