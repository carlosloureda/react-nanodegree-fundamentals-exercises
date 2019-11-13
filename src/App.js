import React from "react";
import "./App.css";
import AllTogetherExercise1 from "./components/AllTogetherExercise1/AllTogetherExercise1";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/lesson3/all-together-1">All Togetherer 1</Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route path="/lesson3/all-together-1">
                <AllTogetherExercise1 />
              </Route>

              <Route path="/">
                <Nav />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
