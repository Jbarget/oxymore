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
import ConsciousShoppingLoading from "./components/project-pages/loading/ConsciousShopping";
import MarcMedinaLoading from "./components/project-pages/loading/MarcMedina";
import BelledejourLoading from "./components/project-pages/loading/Belledejour";
import EyeLoading from "./components/project-pages/loading/Eye";
import LeoAdefLoading from "./components/project-pages/loading/LeoAdef";
import EroticStoriesLoading from "./components/project-pages/loading/EroticStories";
import MapLoading from "./components/project-pages/loading/Map";
import KaiLandreLoading from "./components/project-pages/loading/KaiLandre";
import FashionEditorialLoading from "./components/project-pages/loading/FashionEditorial";
import ConsciousShopping from "./components/project-pages/live/ConsciousShopping";
import MarcMedina from "./components/project-pages/live/MarcMedina";
import Belledejour from "./components/project-pages/live/Belledejour";
import Eye from "./components/project-pages/live/Eye";
import LeoAdef from "./components/project-pages/live/LeoAdef";
import EroticStories from "./components/project-pages/live/EroticStories";
import Map from "./components/project-pages/live/Map";
import KaiLandre from "./components/project-pages/live/KaiLandre";
import FashionEditorial from "./components/project-pages/live/FashionEditorial";

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
              <Route
                path="/loading/marc-medina"
                exact
                component={MarcMedinaLoading}
              />
              <Route
                path="/loading/erotic-stories"
                exact
                component={EroticStoriesLoading}
              />
              <Route path="/loading/eyes" exact component={EyeLoading} />
              <Route
                path="/loading/belledejour"
                exact
                component={BelledejourLoading}
              />
              <Route
                path="/loading/leo-adef"
                exact
                component={LeoAdefLoading}
              />
              <Route path="/loading/the-map" exact component={MapLoading} />
              <Route
                path="/loading/kai-landre"
                exact
                component={KaiLandreLoading}
              />
              <Route
                path="/loading/editorial"
                exact
                component={FashionEditorialLoading}
              />
              <Route
                path="/loading/conscious-shopping"
                exact
                component={ConsciousShoppingLoading}
              />
              <Route
                path="/conscious-shopping"
                exact
                component={ConsciousShopping}
              />
              <Route path="/marc-medina" exact component={MarcMedina} />
              <Route path="/erotic-stories" exact component={EroticStories} />
              <Route path="/eyes" exact component={Eye} />
              <Route path="/belledejour" exact component={Belledejour} />
              <Route path="/leo-adef" exact component={LeoAdef} />
              <Route path="/the-map" exact component={Map} />
              <Route path="/kai-landre" exact component={KaiLandre} />
              <Route path="/editorial" exact component={FashionEditorial} />
            </Switch>
          </Suspense>
        </AppContent>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

export default App;
