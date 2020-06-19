import React, { Suspense, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Manifesto from "./components/Manifesto";
import Advertising from "./components/Advertising";
import About from "./components/About";
import Contact from "./components/Contact";
import Buy from "./components/Buy";
import Projects from "./components/Projects";
import theme from "./components/theme";
import NavMenu from "./components/NavMenu";
import styled from "styled-components";
import i18next from "i18next";
import "./css/reset.css";
import {
  color,
  typography,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";

type HeadingProps = ColorProps & SpaceProps & TypographyProps;

const Title = styled.h1<HeadingProps>`
  ${color}
  ${typography}
  font-family: SangBleu OG Serif;
  text-align: center;
`;

type ButtonProps = ColorProps & SpaceProps & TypographyProps;

const LangButton = styled.button<ButtonProps>`
  ${color}
  ${typography}
  font-family: SangBleu OG Serif;
  background-color: transparent;
  padding: 1em;
  &:hover {
    color: white;
    background-color: black;
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <Title color="black" fontSize={5}>
                OXYMORE
              </Title>
            </Link>
            <NavMenu />
            <LangButton onClick={onLangClick("en")} fontSize={3}>
              EN
            </LangButton>
            <LangButton onClick={onLangClick("es")} fontSize={3}>
              ES
            </LangButton>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/manifesto" exact component={Manifesto} />
              <Route path="/advertising" exact component={Advertising} />
              <Route path="/about-us" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/buy" exact component={Buy} />
              <Route path="/projects" exact component={Projects} />
            </Switch>
          </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
