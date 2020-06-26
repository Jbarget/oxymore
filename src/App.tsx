import React, { Suspense, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import theme from "./components/theme";
import styled from "styled-components";
import i18next from "i18next";
import "./css/reset.css";
import {
  color,
  space,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";

type HeadingProps = SpaceProps & ColorProps & TypographyProps;

const Container = styled.div`
  font-family: SangBleu OG Serif Light Regular;
  position: absolute;
  float: right;
  right: 100px;
  top: 28px;
  display: flex;
  cursor: pointer;
`;

const LangButton = styled.p<HeadingProps>`
  ${typography}
  ${color}
  ${space}
  font-family: SangBleu OG Serif Light Regular;
  p:hover,
  p:active {
    color: black;
  }
`;

const App = () => {
  const onLangClick = useCallback(
    (countryId: string) => () => i18next.changeLanguage(countryId),
    []
  );
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Suspense fallback={<div>Loading</div>}>
            <Container>
              <LangButton
                onClick={onLangClick("en")}
                color="athensGray"
                fontSize={3}
                p={1}
              >
                EN
              </LangButton>
              <LangButton
                onClick={onLangClick("es")}
                color="athensGray"
                fontSize={3}
                p={1}
              >
                ES
              </LangButton>
            </Container>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" exact component={Projects} />
            </Switch>
          </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
