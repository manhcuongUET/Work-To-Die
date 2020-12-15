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
import "../src/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowRight, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SeeApply } from "./components/Employers/seeApply";
import { UpLoadNewJob } from "./components/Employers/UpLoadNewJob";
import { Auth } from "./components/auth/index";
import axios from "./utils/axios";
import authContext from "./components/context/auth";
import { LoadingSign } from "./share/LoadingIndicator";

function App() {
  const history = useHistory();
  // const [selectedCompany, setSelectedCompany] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [signingIn, setSigningIn] = useState(true);
  
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

  const handleClick = () => {};

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
                <Nav.Link exact as={Link} to="/sign-up" className="mx-1">
                  SIGN UP
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="mx-1">
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
            <Route path="/" component={Auth} />
          </>
        )}
      </authContext.Provider>

      <div id="footer" className="p-5">
          <Row>
            <div className="d-flex" style={{ height: "max-content" }}>
              <Col xs={4} className="aside-left">
                <img src={"/image/company-1.png"} />
                <p className="para-left">
                  Find Jobs is the #1 recruitment platform in Asia helping
                  companies build successful teams with young talent. Our
                  mission is to help companies hire the right young talent
                  effectively, and for young people to discover and develop
                  careers they love.
                </p>
                <p>
                  © 2020 Find Jobs Intern Pte Ltd & Find Jobs Vietnam Pte Ltd
                  <br></br>
                  EA Licence No: 16C7981
                </p>
              </Col>

              <Col className="ml-auto" xs={6}>
                {/* <div className="mx-auto" style={{color:"white"}}>
                  <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </div> */}
                <div className="d-flex">
                  <div className=" each-col px-0">
                    <div className="title-right">Company</div>
                    <div className="detail-right">About us</div>
                    <div className="detail-right">Hired Blog</div>
                    <div className="detail-right">Inside FInd Jobs</div>
                    <div className="detail-right">Careeers</div>
                    <div className="detail-right">Terms&Conditions</div>
                  </div>
                  <div className="each-col px-0">
                    <div className="title-right">FOR JOB SEEKERS</div>
                    <div className="detail-right">Jobs by Location</div>
                    <div className="detail-right">Jobs by Company Name</div>
                    <div className="detail-right">Jobs by Category</div>
                  </div>
                  <div className="each-col px-0">
                    <div className="title-right">BUSINESS SOLUTIONS</div>
                    <div className="detail-right">For Employers</div>
                    <div className="detail-right">Find Jobs Platform</div>
                    <div className="detail-right">TalentHunt</div>
                    <div className="detail-right">TalentHub</div>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </div>
    </div>
  );
}

export default App;
