import React, { Suspense } from "react";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Manifesto from "./components/Manifesto";
import Contact from "./components/Contact";
import theme from "./components/theme";
import NavMenu from "./components/NavMenu";
import "./css/reset.css";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/manifesto" exact component={Manifesto} />
              <Route path="/contact-us" exact component={Contact} />
            </Switch>
          </Suspense>
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

export default App;
