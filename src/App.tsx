import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {" "}
          // load only one route at a time
          <Route path="/" exact component={Home} /> //renders only if it matches
          the full path
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
