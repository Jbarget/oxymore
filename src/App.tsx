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

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Background>
          <Flex flexDirection="column" p={6} overflow="auto" height="100%">
            <Suspense fallback={<div>Loading</div>}>
              <Header />
              <Switch>
                <Route path="/" exact component={Loading} />
                <Route path="/oxymore" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/manifesto" exact component={Manifesto} />
                <Route path="/about" exact component={AboutUs} />
                <Route path="/advertising" exact component={Advertising} />
                <Route path="/projects" exact component={Projects} />
                <Route
                  path="/projects/marcmedina"
                  exact
                  component={MarcMedina}
                />
                <Route
                  path="/projects/eroticstories"
                  exact
                  component={EroticStories}
                />
                <Route path="/projects/eyes" exact component={Eye} />
                <Route
                  path="/projects/belledejour"
                  exact
                  component={Belledejour}
                />
                <Route path="/projects/leoadef" exact component={LeoAdef} />
                <Route path="/projects/themap" exact component={Map} />
                <Route path="/projects/kailandre" exact component={KaiLandre} />
                <Route
                  path="/projects/editorial"
                  exact
                  component={FashionEditorial}
                />
                <Route
                  path="/projects/consciousshopping"
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
