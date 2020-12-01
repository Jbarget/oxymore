import React, { Suspense } from "react";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./components/theme";
import "./css/reset.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Manifesto from "./components/Manifesto";
import Advertising from "./components/Advertising";
import ConsciousShopping from "./components/project-pages/ConsciousShopping";
import MarcMedina from "./components/project-pages/MarcMedina";
import Belledejour from "./components/project-pages/Belledejour";
import Eye from "./components/project-pages/Eye";
import LeoAdef from "./components/project-pages/LeoAdef";
import EroticStories from "./components/project-pages/EroticStories";
import Map from "./components/project-pages/Map";
import KaiLandre from "./components/project-pages/KaiLandre";
import FashionEditorial from "./components/project-pages/FashionEditorial";
import Background from "./components/Background";
import Error404 from "./components/Error404";
import Flex from "./components/Flex";
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
                <Route path={ABOUT_URL} exact component={AboutUs} />
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
