import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";

type HeadingProps = ColorProps & SpaceProps & TypographyProps;

const Title = styled.h1<HeadingProps>`
  ${color}
  ${space}
  ${typography}
`;

const Home = () => {
  return (
    <Title color="primary" bg="error" p={3} fontSize={3}>
      Oxymore
    </Title>
  );
};

export default Home;
