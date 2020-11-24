import React from "react";
import styled from "styled-components";
import { grid, GridProps, layout, LayoutProps } from "styled-system";
import { EyeData } from "../../fixtures/eye-data";
import eye from "../assets/project-page/eye.png";
import Flex from "../Flex";
import Grid from "../Grid";

import data from "../../fixtures/eye-data";

const Img = styled.img<LayoutProps>`
  ${layout};
`;

const GridItem = styled.div<GridProps>`
  ${grid};
`;

const DataPoint: React.FC<EyeData> = ({ name, coords, data }) => {
  return (
    <GridItem
      key={name}
      gridArea={`${coords[0]} / ${coords[1]} / span 100 / span 100`}
    >
      <Img src={eye} alt="eye icon" maxWidth={data.population} />
    </GridItem>
  );
};
const EyeContent = () => {
  return (
    <Flex
      height="100%"
      width="100%"
      overflow="hidden"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        height="100%"
        width="50%"
        gridTemplateRows="repeat(220, 1fr)"
        gridTemplateColumns="repeat(180, 1fr)"
      >
        {data.map(DataPoint)}
      </Grid>
    </Flex>
  );
};

export default EyeContent;
