import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import theme from "./components/theme";
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
            </Switch>
          </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
