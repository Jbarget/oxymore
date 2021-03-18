import "react-mobile-style-picker/dist/index.css";

import { DataSet, DataValues, EyeData } from "../../../fixtures/eye-data";
import {
  GridProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  grid,
  layout,
  position,
  typography,
} from "styled-system";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import AudioPlayer from "./AudioPlayer";
import CountryData from "./CountryData";
import EyePreview from "./EyePreview";
import Flex from "../../styles/Flex";
import Grid from "../../styles/Grid";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { PROJECTS_URL } from "../../../constants/router-urls";
import { Picker } from "react-mobile-style-picker";
import PreviewOrProjectPage from "../PreviewOrProjectPage";
import data from "../../../fixtures/eye-data";
import eye from "../../../assets/project-page/project-icons/eye.png";
import eyeBlue from "../../../assets/project-page/eye/eye_blue.png";
import eyeBrown from "../../../assets/project-page/eye/eye_brown.png";
import theme from "../../theme";
import { useTranslation } from "react-i18next";

const defaultMaximumValues = {
  population: 0,
  populationAffected: 0,
  percentageAffected: 0,
};

const maximumValues: DataValues = data.reduce((accum, eyeData) => {
  return {
    population:
      accum.population > eyeData.data.population
        ? accum.population
        : eyeData.data.population,
    populationAffected:
      accum.populationAffected > eyeData.data.populationAffected
        ? accum.populationAffected
        : eyeData.data.populationAffected,
    percentageAffected:
      accum.percentageAffected > eyeData.data.percentageAffected
        ? accum.percentageAffected
        : eyeData.data.percentageAffected,
  };
}, defaultMaximumValues);

const getRelativeValues = ({
  population,
  populationAffected,
  percentageAffected,
}: DataValues): DataValues => {
  const values = {
    population: population / maximumValues.population,
    populationAffected: populationAffected / maximumValues.populationAffected,
    percentageAffected: percentageAffected / maximumValues.percentageAffected,
  };
  return values;
};

const ReturnToProjectsPage = styled(Link)<LayoutProps & PositionProps>`
  ${layout};
  ${position};
  z-index: ${theme.zIndexes.inFront};
  transition: all 1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const bounce = keyframes`
  0%, 100% {
    -webkit-transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-5px);
  }
`;

const GridImg = styled.img<GridProps & LayoutProps>`
  min-width: 100%;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
  ${layout};
  ${grid};
`;

const GridItem = styled.div<GridProps & LayoutProps>`
  min-width: 0;
  min-height: 0;
  animation: ${bounce} 2s linear infinite;
  cursor: pointer;
  ${grid};
  ${layout};
`;

const P = styled.p<TypographyProps>`
  font-family: ${theme.fonts.secondary};
  ${typography};
`;

const itemStyles: React.CSSProperties = {
  color: `${theme.colors.copyOne}`,
  fontFamily: `${theme.fonts.secondary}`,
  textTransform: "uppercase",
  zIndex: 1,
};

const style: React.CSSProperties = {
  height: 200,
};

const calculateSpanValue = ({
  relativeValues,
  selectedDataSet,
}: {
  relativeValues: DataValues;
  selectedDataSet: DataSet;
}) => {
  const MINIMUM_SPAN_VALUE = 8;
  const value = Math.ceil(relativeValues[selectedDataSet] * 20);

  return value < MINIMUM_SPAN_VALUE ? MINIMUM_SPAN_VALUE : value;
};

interface DataPointProps extends EyeData {
  selectedDataSet: DataSet;
  onClick: () => void;
}

const DataPoint: React.FC<DataPointProps> = ({
  name,
  coords,
  data,
  selectedDataSet,
  onClick,
}) => {
  const relativeValues = getRelativeValues(data);
  const spanValue = calculateSpanValue({ relativeValues, selectedDataSet });
  const eyeImage = data.casesTreated ? eyeBlue : eyeBrown;

  return (
    <GridItem
      key={name}
      gridRow={`${coords[0]} / span ${spanValue}`}
      gridColumn={`${coords[1]} / span ${spanValue}`}
      onClick={onClick}
    >
      <LazyLoad once>
        <GridImg src={eyeImage} alt={name} />
      </LazyLoad>
    </GridItem>
  );
};

const EyeContent = () => {
  const [
    selectedCountryData,
    setSelectedCountryData,
  ] = useState<EyeData | null>(null);
  const [selectedDataSet, setSelectedDataSet] = useState<DataSet>(
    "populationAffected"
  );
  const setCountryDetails = useCallback(
    countryData => () => setSelectedCountryData(countryData),
    []
  );
  const { t } = useTranslation();

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCountryData(null);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const hideCountryData = () => {
    setSelectedCountryData(null);
  };

  return (
    <Fragment>
      <ReturnToProjectsPage
        to={PROJECTS_URL}
        width={80}
        position="fixed"
        left={40}
        top={80}
      >
        <img src={eye} alt="eye icon" />
      </ReturnToProjectsPage>
      <Flex
        alignItems="center"
        flexDirection="column"
        position="relative"
        justifyContent="center"
        width="100%"
        onMouseDown={hideCountryData}
      >
        <LazyLoad once>
          <Grid
            width={[320, 320, 400, 540]}
            gridTemplateRows="repeat(180, minmax(0, auto))"
            gridTemplateColumns="repeat(120, minmax(0, auto))"
          >
            {data.map(datum => (
              <DataPoint
                key={datum.name}
                {...datum}
                selectedDataSet={selectedDataSet}
                onClick={setCountryDetails(datum)}
                z-index={theme.zIndexes.secondInFront}
              />
            ))}
          </Grid>
        </LazyLoad>
        <Flex>
          <CountryData countryData={selectedCountryData} />
        </Flex>
        <Flex
          position="fixed"
          bottom={40}
          right={100}
          display={["none", "none", "none", "block"]}
          px={2}
        >
          <P
            dangerouslySetInnerHTML={{ __html: t("eye.intro") }}
            fontSize={[0, 1]}
          ></P>
        </Flex>
        <Flex
          display={["none", "none", "none", "none", "block"]}
          position="fixed"
          bottom={40}
          left={400}
          width={320}
          px={2}
        >
          <P
            dangerouslySetInnerHTML={{ __html: t("eye.footnote") }}
            fontSize={[0, 1]}
            textAlign="justify"
          ></P>
        </Flex>
        <Flex position="fixed" bottom={40} right={80} px={2}>
          <AudioPlayer />
        </Flex>
      </Flex>
      <Flex position="fixed" bottom={0} left={40}>
        <Picker
          onChange={setSelectedDataSet}
          onScrollChange={hideCountryData}
          itemStyle={itemStyles}
          value={selectedDataSet}
          style={style}
          mask={false}
        >
          <Picker.Item value="population">{t("eye.population")}</Picker.Item>
          <Picker.Item value="populationAffected">
            {t("eye.populationAffected")}
          </Picker.Item>
          <Picker.Item value="percentageAffected">
            {t("eye.percentage")}
          </Picker.Item>
        </Picker>
      </Flex>
    </Fragment>
  );
};

const launchDate = "2021-02-12";
const Eye = () => {
  return (
    <Flex flex="auto">
      <PreviewOrProjectPage
        launchDate={launchDate}
        PreviewPage={EyePreview}
        ProjectPage={EyeContent}
      />
    </Flex>
  );
};

export default Eye;
