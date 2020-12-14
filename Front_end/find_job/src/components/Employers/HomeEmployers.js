import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export const HomeEmployers = () => {
  return (
    <div className="App">
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #333333",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/find_jobs.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/auth/sign-up" className="mx-1">
                SIGN UP
              </Nav.Link>
              <Nav.Link as={Link} to="/auth/sign-in" className="mx-1">
                SIGN IN
              </Nav.Link>
            </Nav>
            <Nav>
              <Button>POST A JOB FOR FREE</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
