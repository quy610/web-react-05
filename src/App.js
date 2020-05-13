import React, {useState} from "react";
import TopMenu from "./js/components/TopMenu";
import Product from './js/components/Products';
import FooterPage from './js/components/Footer';
import RegisterForm from './js/components/RegisterForm';
import LoginForm from './js/components/LoginForm';

import './css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const homeStyle = {
  'margin-top': '70px' 
};

export default function App() {
  function Home() {
    return <h2 style={homeStyle}>Home</h2>
  }

  function About() {
    return <h2 style={homeStyle}>About</h2>
  }

  return (
    <div>
      <Router>
        <TopMenu />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
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
        {/* <FooterPage /> */}
      </Router>
    </div>
  );
}