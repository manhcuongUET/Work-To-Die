import React from "react";
import { Route, useHistory, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Companies } from "./components/Company/Companies";
import { Home } from "./components/Home";
import Auth from "./components/Auth";

export const App = () => {
  const history = useHistory();
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Find Job
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/jobs" className="mx-1">
                Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/companies" className="mx-1">
                Companies
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/auth/sign-up" className="mx-1">
                  SIGN UP
                </Nav.Link>
                <Nav.Link as={Link} to="/auth/sign-in" className="mx-1">
                  SIGN IN
                </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/auth/" component={Auth} />
        <Route path="/companies" component={Companies} />
      </>
    </div>
  );
};

export default App;
