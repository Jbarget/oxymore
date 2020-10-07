import React, { Suspense } from "react";
import GlobalStyle from "./GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import theme from "./components/theme";
import "./css/reset.css";
import Manifesto from "./components/Manifesto";
import Header from "./components/Header";
import ConsciousShopping from "./components/project-pages/ConsciousShopping";
import MarcMedina from "./components/project-pages/MarcMedina";
import Belledejour from "./components/project-pages/Belledejour";
import Eye from "./components/project-pages/Eye";
import LeoAdef from "./components/project-pages/LeoAdef";
import EroticStories from "./components/project-pages/EroticStories";
import Map from "./components/project-pages/Map";
import KaiLandre from "./components/project-pages/KaiLandre";
import Advertising from "./components/Advertising";

const AppContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppContent>
          <Suspense fallback={<div>Loading</div>}>
            <Header />
            <Switch>
              <Route path="/" exact component={Loading} />
              <Route path="/oxymore" exact component={Home} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/contact-us" exact component={Contact} />
              <Route path="/manifesto" exact component={Manifesto} />
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/advertising" exact component={Advertising} />
              <Route path="/marc-medina" exact component={MarcMedina} />
              <Route path="/erotic-stories" exact component={EroticStories} />
              <Route path="/eyes" exact component={Eye} />
              <Route path="/belledejour" exact component={Belledejour} />
              <Route path="/leo-adef" exact component={LeoAdef} />
              <Route path="/the-map" exact component={Map} />
              <Route path="/kai-landre" exact component={KaiLandre} />
              <Route
                path="/conscious-shopping"
                exact
                component={ConsciousShopping}
              />
            </Switch>
          </Suspense>
        </AppContent>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

export default App;
