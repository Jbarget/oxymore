import React from "react";
import styled from "styled-components";
import { grid, GridProps, layout, LayoutProps } from "styled-system";
import { DataValues, EyeData } from "../../fixtures/eye-data";
import eyeBlue from "../assets/eye/eye_blue.png";
import eyeGray from "../assets/eye/eye_gray.png";
import Grid from "../Grid";

import data from "../../fixtures/eye-data";

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

const GridImg = styled.img<GridProps & LayoutProps>`
  max-width: 100%;
  ${layout};
  ${grid};
`;

const GridItem = styled.div<GridProps & LayoutProps>`
  ${grid};
  ${layout};
`;

const DataPoint: React.FC<EyeData> = ({ name, coords, data }) => {
  const relativeValues = getRelativeValues(data);
  console.log(relativeValues.population);

  return (
    <GridItem
      key={name}
      gridRow={coords[0]}
      gridColumn={coords[1]}
      width="20px"
    >
      <GridImg src={eyeBlue} alt={name} />
    </GridItem>
  );
};
const EyeContent = () => {
  return (
    <Grid
      height="100%"
      width="60%"
      gridTemplateRows="repeat(180, minmax(0, auto))"
      gridTemplateColumns="repeat(120, minmax(0, auto))"
    >
      {data.map(DataPoint)}
    </Grid>
  );
};

export default EyeContent;
