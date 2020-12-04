import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Nav, Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" className="mx-2">
              Jobs
            </Nav.Link>
            <Nav.Link href="#link">Companies</Nav.Link>
            <Nav.Link href="#link" >SIGN UP</Nav.Link>
            <Nav.Link href="#link">SIGN IN</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Route component={Jobs} />
      <Route component={Companies} />
      <Route component={Auth} /> */}
    </div>
  );
};

export default App;
