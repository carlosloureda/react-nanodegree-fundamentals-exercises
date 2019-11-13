import React from "react";
import "./App.css";

import PassingData1Problem from "./components/PassingData1/PassingData1Problem";
import PassingData1Solution from "./components/PassingData1/PassingData1Solution";

import PassingData2Problem from "./components/PassingData2/PassingData2Problem";
import PassingData2Solution from "./components/PassingData2/PassingData2Solution";

import AllTogetherExercise1 from "./components/AllTogetherExercise1/AllTogetherExercise1";
import AllTogetherExercise2 from "./components/AllTogetherExercise2/AllTogetherExercise2";

import FunctionalComponentsProblem from "./components/FunctionalComponents/Problem/FunctionalComponentsProblem";
import FunctionalComponentsSolution from "./components/FunctionalComponents/Solution/FunctionalComponentsSolution";

import ManagingState1Problem from "./components/ManagingState1/Problem/ManagingState1Problem";
import ManagingState1Solution from "./components/ManagingState1/Solution/ManagingState1Solution";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";

const Nav = () => {
  return (
    <nav>
      <ul>
        {/* All Together 1 */}
        <li>
          <Link to="/lesson3/all-together-1">All Togetherer 1</Link>
        </li>

        {/* All Together 2 */}
        <li>
          <Link to="/lesson3/all-together-2">All Togetherer 2</Link>
        </li>

        {/* Passing Data 1 */}
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

        {/* Passing Data 2 */}
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

        {/* Managing State 1 */}
        <li>
          <Link to="/lesson3/managing-state-exercise-1">
            Managing State 1 Exercise
          </Link>
        </li>
        <li>
          <Link to="/lesson3/managing-state-exercise-1-solution">
            Managing State 1 Solution
          </Link>
        </li>

        {/* Functional Components */}
        <li>
          <Link to="/lesson3/functional-components-exercise">
            Functional Components Exercise
          </Link>
        </li>
        <li>
          <Link to="/lesson3/functional-components-solution">
            Functional Components Solution
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
          {/* Passing Data 2 */}
          <Route path="/lesson3/passing-data-exercise">
            <PassingData1Problem />
          </Route>
          <Route path="/lesson3/passing-data-exercise-solution">
            <PassingData1Solution />
          </Route>

          {/* Passing Data 1 */}
          <Route path="/lesson3/passing-data-exercise-2">
            <PassingData2Problem />
          </Route>
          <Route path="/lesson3/passing-data-exercise-2-solution">
            <PassingData2Solution />
          </Route>

          {/* Functional Components */}
          <Route path="/lesson3/functional-components-exercise">
            <FunctionalComponentsProblem />
          </Route>
          <Route path="/lesson3/functional-components-solution">
            <FunctionalComponentsSolution />
          </Route>

          {/* Managing State 1 */}
          <Route path="/lesson3/managing-state-exercise-1">
            <ManagingState1Problem />
          </Route>
          <Route path="/lesson3/managing-state-exercise-1-solution">
            <ManagingState1Solution />
          </Route>

          {/* All Together 1 */}
          <Route path="/lesson3/all-together-1">
            <AllTogetherExercise1 />
          </Route>

          {/* All Together 2 */}
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
