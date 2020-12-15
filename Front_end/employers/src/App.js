import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Nav,
  Navbar,
  Container,
  Row,
  Col,
  Button,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import { Route, useHistory, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowRight, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SeeApply } from "./components/Employers/seeApply";
import { UpLoadNewJob } from "./components/Employers/UpLoadNewJob";
import { Auth } from "./components/auth/index";
import axios from "./utils/axios";
import authContext from "./components/context/auth";
import { LoadingSign } from "./share/LoadingIndicator";
import { Profile } from "./components/Employers/Profile"
import mailContext from "./components/context/mail"
import { ApplyTag } from "./components/Employers/applyTag";

function App() {
  const history = useHistory();
  // const [selectedCompany, setSelectedCompany] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [signingIn, setSigningIn] = useState(true);
  console.log(authUser);
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setSigningIn(false);
      return;
    }
    try {
      axios
        .post("/auth/me", null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setAuthUser(res.data);
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          setSigningIn(false);
        });
    } catch (err) {
      setSigningIn(false);
    }
  }, []);

  const handleClick = () => { };

  const handleClickSignOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
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
          <Navbar.Brand>
            <img
              src="/Untitled-1.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/upload-job" className="mx-1">
                Upload new job
              </Nav.Link>
              <Nav.Link as={Link} to="/apply-job" className="mx-1">
                Candidate Job Applications
              </Nav.Link>
            </Nav>
            {!authUser ? (
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/employers/sign-up" className="mx-1">
                  SIGN UP
                </Nav.Link>
                <Nav.Link as={Link} to="/employers/sign-in" className="mx-1">
                  SIGN IN
                </Nav.Link>
              </Nav>
            ) : (
                <Nav className="ml-auto">
                  <NavDropdown title={authUser.email} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      MY PROFILE
                  </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <FontAwesomeIcon icon={faPowerOff} />
                      <Nav.Link onClick={handleClickSignOut}>SIGN OUT</Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <authContext.Provider value={{ authUser, setAuthUser }}>
        {signingIn ? (
          <LoadingSign text="Loading ../" />
        ) : (
            <>
              <Route path="/apply-job" component={SeeApply} />
              <Route path="/upload-job" component={UpLoadNewJob} />
              <Route path="/employers" component={Auth} />
              <Route path="/profile" component={Profile} />
              <Route path = "/apply-tag" component = {ApplyTag}/>
            </>
          )}
      </authContext.Provider>
    </div>
  );
}

export default App;
