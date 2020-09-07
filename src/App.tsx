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
            </Switch>
          </Suspense>
        </AppContent>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

export default App;
