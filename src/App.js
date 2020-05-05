import React from "react";
import Form from "./js/components/Form";
import TopMenu from "./js/components/TopMenu";
import Product from './js/components/Products';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  function Home() {
    return <h2>Home</h2>
  }

  function About() {
    return <h2>About</h2>
  }

  return (
    <div>
      <Router>
        <TopMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}