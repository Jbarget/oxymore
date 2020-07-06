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
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
} from "styled-system";

type LanguageButtonProps = SpaceProps &
  ColorProps &
  TypographyProps &
  PositionProps &
  LayoutProps;

const Container = styled.div<LanguageButtonProps>`
  ${position}
  ${layout}
  cursor: pointer;
`;

const LangButton = styled.p<LanguageButtonProps>`
  ${typography}
  ${color}
  ${space}
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
            <Container
              position="absolute"
              right={[75, 75, 75, 100, 100]}
              top={28}
              display="flex"
            >
              <LangButton
                onClick={onLangClick("en")}
                color="athensGray"
                fontSize={[2, 2, 2, 3, 4]}
                p={1}
              >
                EN
              </LangButton>
              <LangButton
                onClick={onLangClick("es")}
                color="athensGray"
                fontSize={[2, 2, 2, 3, 4]}
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
