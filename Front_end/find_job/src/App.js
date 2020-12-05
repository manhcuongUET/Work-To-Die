import "./App.css";
import React from "react";
import {Route} from "react-router-dom"
import { NavDropdown, Nav, Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { findingJob } from "./components/jobs/Jobs"
import {JobDetail} from "./components/jobs/JobDetail"

export const App = () => {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="mx-2">
              Jobs
            </Nav.Link>
            <Nav.Link href="#link">Companies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/Jobs" component={findingJob} /> 
      <Route  path = "/JobDetail" component = {JobDetail}/>
    </div>
    
  );
};

export default App;
