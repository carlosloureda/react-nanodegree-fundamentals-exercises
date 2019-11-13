import React from "react";
import "./App.css";

import PassinData1Problem from "./components/PassingData1/PassinData1Problem";
import PassinData1Solution from "./components/PassingData1/PassinData1Solution";

import PassinData2Problem from "./components/PassingData2/PassinData2Problem";
import PassinData2Solution from "./components/PassingData2/PassinData2Solution";

import AllTogetherExercise1 from "./components/AllTogetherExercise1/AllTogetherExercise1";
import AllTogetherExercise2 from "./components/AllTogetherExercise2/AllTogetherExercise2";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";

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
        <li>
          <Link to="/lesson3/passing-data-exercise">
            Passing Data 1 Exercise
          </Link>
        </li>
        <li>
          <Link to="/lesson3/passing-data-exercise-solution">
            Passing Data 1 Solution
          </Link>
        </li>
        <li>
          <Link to="/lesson3/passing-data-exercise-2">
            Passing Data 2 Exercise
          </Link>
        </li>
        <li>
          <Link to="/lesson3/passing-data-exercise-2-solution">
            Passing Data 2 Solution
          </Link>
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
          <Route path="/lesson3/passing-data-exercise">
            <PassinData1Problem />
          </Route>
          <Route path="/lesson3/passing-data-exercise-solution">
            <PassinData1Solution />
          </Route>
          <Route path="/lesson3/passing-data-exercise-2">
            <PassinData2Problem />
          </Route>
          <Route path="/lesson3/passing-data-exercise-2-solution">
            <PassinData2Solution />
          </Route>
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
