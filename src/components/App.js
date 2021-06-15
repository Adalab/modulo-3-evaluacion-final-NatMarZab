import "../stylesheet/App.scss";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Priceing from "./Priceing.js";
import About from "./About.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/priceing">Priceing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/priceing" component={Priceing} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
