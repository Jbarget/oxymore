import "./css/reset.css";

import {
  ABOUT_URL,
  ADVERTISING_URL,
  BELLE_DE_JOUR_URL,
  CONSCIOUS_SHOPPING_URL,
  CONTACT_URL,
  EROTIC_STORIES_URL,
  EYES_URL,
  FASHION_EDITORIAL_URL,
  KAI_LANDRE_URL,
  LEO_ADEF_URL,
  MANIFESTO_URL,
  MAP_URL,
  MARC_MEDINA_URL,
  OXYMORE_URL,
  PROJECTS_URL,
} from "./constants/router-urls";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./components/About";
import Advertising from "./components/Advertising";
import Background from "./components/Background";
import Belledejour from "./components/projects/Belledejour";
import ConsciousShopping from "./components/projects/ConsciousShopping";
import Contact from "./components/Contact";
import EroticStories from "./components/projects/EroticStories";
import Error404 from "./components/Error404";
import Eye from "./components/projects/Eye";
import FashionEditorial from "./components/projects/FashionEditorial";
import Flex from "./components/Flex";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import KaiLandre from "./components/projects/KaiLandre";
import LeoAdef from "./components/projects/LeoAdef";
import Loading from "./components/Loading";
import Manifesto from "./components/Manifesto";
import Map from "./components/projects/Map";
import MarcMedina from "./components/projects/MarcMedina";
import Projects from "./components/Projects";
import { ThemeProvider } from "styled-components";
import theme from "./components/theme";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Background>
          <Flex flexDirection="column" flex="auto" p={6}>
            <Suspense fallback={<div>Loading</div>}>
              <Header />
              <Switch>
                <Route path="/" exact component={Loading} />
                <Route path={OXYMORE_URL} exact component={Home} />
                <Route path={CONTACT_URL} exact component={Contact} />
                <Route path={MANIFESTO_URL} exact component={Manifesto} />
                <Route path={ABOUT_URL} exact component={About} />
                <Route path={ADVERTISING_URL} exact component={Advertising} />
                <Route path={PROJECTS_URL} exact component={Projects} />
                <Route path={MARC_MEDINA_URL} exact component={MarcMedina} />
                <Route
                  path={EROTIC_STORIES_URL}
                  exact
                  component={EroticStories}
                />
                <Route path={EYES_URL} exact component={Eye} />
                <Route path={BELLE_DE_JOUR_URL} exact component={Belledejour} />
                <Route path={LEO_ADEF_URL} exact component={LeoAdef} />
                <Route path={MAP_URL} exact component={Map} />
                <Route path={KAI_LANDRE_URL} exact component={KaiLandre} />
                <Route
                  path={FASHION_EDITORIAL_URL}
                  exact
                  component={FashionEditorial}
                />
                <Route
                  path={CONSCIOUS_SHOPPING_URL}
                  exact
                  component={ConsciousShopping}
                />
                <Route component={Error404} />
              </Switch>
            </Suspense>
          </Flex>
        </Background>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

export default App;
