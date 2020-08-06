import React, { Suspense } from "react";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import theme from "./components/theme";
import "./css/reset.css";
import Manifesto from "./components/Manifesto";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <Route path="/" exact component={Loading} />
              <Route path="/oxymore" exact component={Home} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/contact-us" exact component={Contact} />
              <Route path="/manifesto" exact component={Manifesto} />
            </Switch>
          </Suspense>
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

export default App;
