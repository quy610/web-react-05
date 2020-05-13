import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Logo from '../../images/logo.jpg';
import '../../css/TopMenu.css';

function TopMenu() {
  return (
    <Navbar bg="dark" expand="md" variant="dark" fixed="top">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        HELLO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/login" className="ml-auto">Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopMenu;