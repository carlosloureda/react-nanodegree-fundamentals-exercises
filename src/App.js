import React from "react";
import "./App.css";

import PassingData1Problem from "./components/PassingData1/PassingData1Problem";
import PassingData1Solution from "./components/PassingData1/PassingData1Solution";

import PassingData2Problem from "./components/PassingData2/PassingData2Problem";
import PassingData2Solution from "./components/PassingData2/PassingData2Solution";

import FunctionalComponentsProblem from "./components/FunctionalComponents/Problem/FunctionalComponentsProblem";
import FunctionalComponentsSolution from "./components/FunctionalComponents/Solution/FunctionalComponentsSolution";

import ManagingState1Problem from "./components/ManagingState1/Problem/ManagingState1Problem";
import ManagingState1Solution from "./components/ManagingState1/Solution/ManagingState1Solution";

import ControlledComponents1Problem from "./components/ControlledComponents1/Problem/ControlledComponents1Problem";
import ControlledComponents1Solution from "./components/ControlledComponents1/Solution/ControlledComponents1Solution";

import ControlledComponents2Problem from "./components/ControlledComponents2/Problem/ControlledComponents2Problem";
import ControlledComponents2Solution from "./components/ControlledComponents2/Solution/ControlledComponents2Solution";

import AllTogetherExercise1Exercise from "./components/AllTogether1/Problem/AllTogetherExercise1Exercise";
import AllTogetherExercise1Solution from "./components/AllTogether1/Solution/AllTogetherExercise1Solution";
import AllTogetherExercise2Solution from "./components/AllTogether2/Solution/AllTogetherExercise2Solution";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import AllTogetherExercise2Exercise from "./components/AllTogether2/Problem/AllTogetherExercise2Exercise";

const Nav = () => {
  return (
    <nav>
      <ul>
        {/* Passing Data 1 */}
        <li>
          <Link to="/state-management/passing-data-exercise">
            Passing Data 1 Exercise
          </Link>
        </li>
        <li>
          <Link to="/state-management/passing-data-exercise-solution">
            Passing Data 1 Solution
          </Link>
        </li>
        {/* Passing Data 2 */}
        <li>
          <Link to="/state-management/passing-data-exercise-2">
            Passing Data 2 Exercise
          </Link>
        </li>
        <li>
          <Link to="/state-management/passing-data-exercise-2-solution">
            Passing Data 2 Solution
          </Link>
        </li>
        {/* Managing State */}
        <li>
          <Link to="/state-management/managing-state-exercise-1">
            Managing State Exercise
          </Link>
        </li>
        <li>
          <Link to="/state-management/managing-state-exercise-1-solution">
            Managing State Solution
          </Link>
        </li>
        {/* Functional Components */}
        <li>
          <Link to="/state-management/functional-components-exercise">
            Functional Components Exercise
          </Link>
        </li>
        <li>
          <Link to="/state-management/functional-components-solution">
            Functional Components Solution
          </Link>
        </li>
        {/* Controlled Components 1 */}
        <li>
          <Link to="/state-management/controlled-components-exercise-1">
            Controlled Components 1 Exercise
          </Link>
        </li>
        <li>
          <Link to="/state-management/controlled-components-exercise-1-solution">
            Controlled Components 1 Solution
          </Link>
        </li>
        {/* Controlled Components 2 */}
        <li>
          <Link to="/state-management/controlled-components-exercise-2">
            Controlled Components 2 Exercise
          </Link>
        </li>
        <li>
          <Link to="/state-management/controlled-components-exercise-2-solution">
            Controlled Components 2 Solution
          </Link>
        </li>
        {/* All Together 1 */}
        <li>
          <Link to="/state-management/all-together-1-exercise">All Togetherer 1 Exercise</Link>
        </li>
        <li>
          <Link to="/state-management/all-together-1-solution">All Togetherer 1 Solution</Link>
        </li>
        {/* All Together 2 */}
        <li>
          <Link to="/state-management/all-together-2-exercise">All Togetherer 2 Exercise</Link>
        </li>
        <li>
          <Link to="/state-management/all-together-2-solution">All Togetherer 2 Solution</Link>
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
          <Route path="/state-management/passing-data-exercise">
            <PassingData1Problem />
          </Route>
          <Route path="/state-management/passing-data-exercise-solution">
            <PassingData1Solution />
          </Route>

          {/* Passing Data 1 */}
          <Route path="/state-management/passing-data-exercise-2">
            <PassingData2Problem />
          </Route>
          <Route path="/state-management/passing-data-exercise-2-solution">
            <PassingData2Solution />
          </Route>

          {/* Functional Components */}
          <Route path="/state-management/functional-components-exercise">
            <FunctionalComponentsProblem />
          </Route>
          <Route path="/state-management/functional-components-solution">
            <FunctionalComponentsSolution />
          </Route>

          {/* Managing State 1 */}
          <Route path="/state-management/managing-state-exercise-1">
            <ManagingState1Problem />
          </Route>
          <Route path="/state-management/managing-state-exercise-1-solution">
            <ManagingState1Solution />
          </Route>

          {/* Controlled Components 1 */}
          <Route path="/state-management/controlled-components-exercise-1">
            <ControlledComponents1Problem />
          </Route>
          <Route path="/state-management/controlled-components-exercise-1-solution">
            <ControlledComponents1Solution />
          </Route>

          {/* Controlled Components 2 */}
          <Route path="/state-management/controlled-components-exercise-2">
            <ControlledComponents2Problem />
          </Route>
          <Route path="/state-management/controlled-components-exercise-2-solution">
            <ControlledComponents2Solution />
          </Route>

          {/* All Together 1 */}
          <Route path="/state-management/all-together-1-exercise">
            <AllTogetherExercise1Exercise />
          </Route>
          <Route path="/state-management/all-together-1-solution">
            <AllTogetherExercise1Solution />
          </Route>

          {/* All Together 2 */}
          <Route path="/state-management/all-together-2-exercise">
            <AllTogetherExercise2Exercise />
          </Route>
          <Route path="/state-management/all-together-2-solution">
            <AllTogetherExercise2Solution />
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
