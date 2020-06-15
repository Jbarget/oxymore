import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  color,
  space,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";
import theme from "./components/theme";

import "./css/reset.css";

type HeadingProps = ColorProps & SpaceProps & TypographyProps;

const Title = styled.h1<HeadingProps>`
  ${color}
  ${space}
  ${typography}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Title color="primary" bg="error" p={3} fontSize={3}>
          Oxymore
        </Title>
      </header>
    </ThemeProvider>
  );
}

export default App;
