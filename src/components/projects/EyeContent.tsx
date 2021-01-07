import "react-mobile-style-picker/dist/index.css";

import {
  BorderProps,
  GridProps,
  LayoutProps,
  TypographyProps,
  border,
  grid,
  layout,
  typography,
} from "styled-system";
import { DataSet, DataValues, EyeData } from "../../fixtures/eye-data";
import React, { useCallback, useState } from "react";
import styled, { keyframes } from "styled-components";

import Flex from "../Flex";
import Grid from "../Grid";
import { Picker } from "react-mobile-style-picker";
import data from "../../fixtures/eye-data";
import eyeBlue from "./../../assets/project-page/eye/eye_blue.png";
import eyeBrown from "./../../assets/project-page/eye/eye_brown.png";

const P = styled.p<BorderProps & TypographyProps>`
  text-transform: uppercase;
  font-family: SangBleu;
  line-height: 28px;
  ${border};
  ${typography};
`;

const itemStyles: React.CSSProperties = {
  color: "white",
  fontFamily: "SangBleu",
  textTransform: "uppercase",
};

const style: React.CSSProperties = {
  height: "200px",
};

const defaultMaximumValues = {
  population: 0,
  populationAffected: 0,
  percentageAffected: 0,
  casesTreated: 0,
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
    casesTreated: eyeData.data.casesTreated
      ? accum.casesTreated > eyeData.data.casesTreated
        ? accum.casesTreated
        : eyeData.data.casesTreated
      : defaultMaximumValues.casesTreated,
  };
}, defaultMaximumValues);

const getRelativeValues = ({
  population,
  populationAffected,
  percentageAffected,
  casesTreated,
}: DataValues): DataValues => {
  const values = {
    population: population / maximumValues.population,
    populationAffected: populationAffected / maximumValues.populationAffected,
    percentageAffected: percentageAffected / maximumValues.percentageAffected,
    casesTreated:
      casesTreated && maximumValues.casesTreated
        ? casesTreated / maximumValues.casesTreated
        : defaultMaximumValues.casesTreated,
  };
  return values;
};

const CountryData = ({ countryData }: { countryData: EyeData | null }) => {
  if (!countryData) return null;
  return (
    <Flex
      position="fixed"
      flexDirection="column"
      width="20%"
      top={100}
      right="5%"
    >
      <P borderBottom="whiteThin" fontSize={3}>
        {countryData.name}
      </P>
      <P fontSize={[1, 1, 2]}>Population: {countryData.data.population}</P>
      <P fontSize={[1, 1, 2]}>
        Population affected: {countryData.data.populationAffected}
      </P>
      <P fontSize={[1, 1, 2]}>
        Percentage: {countryData.data.percentageAffected}
      </P>
      {countryData.data.casesTreated ? (
        <P fontSize={[1, 1, 2]}>
          Fundación Elena Barraquer: {countryData.data.casesTreated}
        </P>
      ) : null}
    </Flex>
  );
};

const bounce = keyframes`
  0%, 100% {
    -webkit-transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-5px);
  }
`;

const GridImg = styled.img<GridProps & LayoutProps>`
  max-width: 100%;
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
      <GridImg src={eyeImage} alt={name} />
    </GridItem>
  );
};
const EyeContent = () => {
  const [
    selectedCountryData,
    setSelectedCountryData,
  ] = useState<EyeData | null>(null);
  const [selectedDataSet, setSelectedDataSet] = useState<DataSet>(
    "percentageAffected"
  );

  const setCountryDetails = useCallback(
    countryData => () => setSelectedCountryData(countryData),
    []
  );
  return (
    <Flex alignItems="center" flexDirection="column" position="relative">
      <Grid
        height="100%"
        width={["85%", "85%", "85%", "50%"]}
        gridTemplateRows="repeat(180, minmax(0, auto))"
        gridTemplateColumns="repeat(120, minmax(0, auto))"
      >
        {data.map(datum => (
          <DataPoint
            {...datum}
            selectedDataSet={selectedDataSet}
            onClick={setCountryDetails(datum)}
          />
        ))}
      </Grid>
      <CountryData countryData={selectedCountryData} />
      <Flex position="fixed" bottom={0} left={100}>
        <Picker
          onChange={setSelectedDataSet}
          itemStyle={itemStyles}
          style={style}
          mask={false}
          value={selectedDataSet}
        >
          <Picker.Item value="population">Population</Picker.Item>
          <Picker.Item value="populationAffected">
            Population Affected
          </Picker.Item>
          <Picker.Item value="percentageAffected">Percentage</Picker.Item>
        </Picker>
      </Flex>
    </Flex>
  );
};

export default EyeContent;
