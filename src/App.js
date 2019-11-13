import React from "react";
import "./App.css";
import logo from "./logo.svg";
import AllTogetherExercise1 from "./components/AllTogetherExercise1/AllTogetherExercise1";
import AllTogetherExercise2 from "./components/AllTogetherExercise2/AllTogetherExercise2";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/lesson3/all-together-1">All Togetherer 1</Link>
        </li>
        <li>
          <Link to="/lesson3/all-together-2">All Togetherer 2</Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Switch>
          <Route path="/lesson3/all-together-1">
            <AllTogetherExercise1 />
          </Route>
          <Route path="/lesson3/all-together-2">
            <AllTogetherExercise2 />
          </Route>

          <Route path="/">
            <Nav />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
