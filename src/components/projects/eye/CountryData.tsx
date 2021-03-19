import "react-mobile-style-picker/dist/index.css";

import { TypographyProps, typography } from "styled-system";
import styled, { keyframes } from "styled-components";

import { EyeData } from "../../../fixtures/eye-data";
import Flex from "../../styles/Flex";
import LazyLoad from "react-lazyload";
import React from "react";
import i18n from "../../../i18n";
import theme from "../../theme";
import { useTranslation } from "react-i18next";

const bounce = keyframes`
  0%, 100% {
    -webkit-transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(+5px);
  }
`;

const Container = styled(Flex)`
  animation: ${bounce} 2s linear infinite;
  z-index: ${theme.zIndexes.behind};
`;

const P = styled.p<TypographyProps>`
  font-family: ${theme.fonts.secondary};
  text-transform: uppercase;
  ${typography};
`;

interface LocaleProps {
  es: string;
  gb: string;
}

const CountryData = ({ countryData }: { countryData: EyeData | null }) => {
  const { t } = useTranslation();

  const locales: LocaleProps = {
    es: "es-ES",
    gb: "gb-GB",
  };

  if (!countryData) return null;
  return (
    <LazyLoad once>
      <Container
        position="fixed"
        flexDirection="column"
        width="auto"
        maxWidth={[300, 300, 320, 400, 400]}
        p={2}
        top={100}
        left={["40%", "40%", "45%", "60%", "70%"]}
        lineHeight="25px"
      >
        <Flex
          borderBottom="offWhiteThin"
          width="fit-content"
          maxWidth={[150, 150, 250, 250, 250]}
          mb={1}
        >
          <P fontSize={4}>{countryData.name}</P>
        </Flex>
        <P fontSize={[1, 1, 1, 2]}>
          {t("eye.population")}:{" "}
          {i18n.language === "en"
            ? countryData.data.population.toLocaleString([locales.gb])
            : countryData.data.population.toLocaleString([locales.es])}
        </P>
        <P fontSize={[1, 1, 1, 2]}>
          {t("eye.populationAffected")}:{" "}
          {i18n.language === "en"
            ? countryData.data.populationAffected.toLocaleString([locales.gb])
            : countryData.data.populationAffected.toLocaleString([locales.es])}
        </P>
        <P fontSize={[1, 1, 1, 2]}>
          {t("eye.percentage")}:{" "}
          {i18n.language === "en"
            ? countryData.data.percentageAffected.toLocaleString([locales.gb])
            : countryData.data.percentageAffected.toLocaleString([locales.es])}
          %
        </P>
        {countryData.data.casesTreated ? (
          <P fontSize={[1, 1, 1, 2]}>
            {t("eye.recovered")}:{" "}
            {i18n.language === "en"
              ? countryData.data.casesTreated.toLocaleString([locales.gb])
              : countryData.data.casesTreated.toLocaleString([locales.es])}
          </P>
        ) : null}
      </Container>
    </LazyLoad>
  );
};

export default CountryData;
