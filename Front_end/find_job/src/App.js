import React, { useState, useEffect } from "react";
import { Route, useHistory, Link } from "react-router-dom";
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
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth } from "./components/Auth";
import AuthCtx from "./context/auth";
import { Companies } from "./components/Company/Companies";
import { Home } from "./components/Home/Home";
import { HomeEmployers } from "./components/Employers/HomeEmployers";
import CompanyCtx from "./context/company";
import { CompanyInfo } from "./components/Company/CompanyInfo";
import "../src/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Jobs } from "./components/jobs/Jobs";
import { JobDetail } from "./components/jobs/JobDetail";
import { FillUpForm } from "./components/Resume/FillUpForm";
import { Profile } from "./components/InvidualProfile/Profile";
import axios from "./utils/axios";
import { LoadingSign } from "./share/LoadingIndicator";
import jobContext from "./context/job"
import resumeMailContext from "./context/resumeMail"


export const App = () => {
  const history = useHistory();
  const [selectedCompany, setSelectedCompany] = useState(null);
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

  const handleClick = () => {
    history.push("/HomeEmployers");
  };
// bat mic a oi
  const handleClickSignOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      {!authUser ? (
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
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/Jobs" className="mx-1">
                    Jobs
                  </Nav.Link>
                  <Nav.Link as={Link} to="/companies?page=1" className="mx-1">
                    Companies
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ResumeForm" className="mx-1">
                    Create your profile
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
                <Nav>
                  <Button onClick={handleClick}>
                    FOR EMPLOYERS
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginLeft: "10px" }}
                    />
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <>
            <AuthCtx.Provider value={{ authUser, setAuthUser }}>
              {signingIn ? (
                <LoadingSign text="Loading ../" />
              ) : (
                <>
                  {" "}
                  <Route path="/auth" component={Auth} />
                  <Route exact path="/" component={Home} />
                  <Route path="/HomeEmployers" component={HomeEmployers} />
                  <CompanyCtx.Provider
                    value={{ selectedCompany, setSelectedCompany }}
                  >
                    <Route exact path="/companies" component={Companies} />
                    <Route path="/companies/info" component={CompanyInfo} />
                  </CompanyCtx.Provider>
                  <Route path="/Jobs" component={Jobs} />
                  <Route path="/JobDetail" component={JobDetail} />
                  <Route path="/ResumeForm" component={FillUpForm} />
                  <Route path="/profile" component={Profile} />
                </>
              )}
            </AuthCtx.Provider>
          </>

          <div className="footer">
            <Container className="d-flex" style={{ height: "max-content" }}>
              <div className="aside-left">
                <img src={"/logo/company-1.png"} />
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
              </div>

              <div className="each-col px-0">
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
            </Container>
          </div>
        </div>
      ) : (
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
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/Jobs" className="mx-1">
                    Jobs
                  </Nav.Link>
                  <Nav.Link as={Link} to="/companies?page=1" className="mx-1">
                    Companies
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ResumeForm" className="mx-1">
                    Create your profile
                  </Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                  <NavDropdown
                    title={authUser.username}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      MY PROFILE
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <FontAwesomeIcon icon={faPowerOff} />
                      <Nav.Link onClick={handleClickSignOut}>SIGN OUT</Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/* <Nav>
                  <Button onClick={handleClick}>
                    FOR EMPLOYERS
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginLeft: "10px" }}
                    />
                  </Button>
                </Nav> */}
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <>
            <AuthCtx.Provider value={{ authUser, setAuthUser }}>
              {signingIn ? (
                <LoadingSign text="Loading ../" />
              ) : (
                <>
                  {" "}
                  <Route path="/auth" component={Auth} />
                  <Route exact path="/" component={Home} />
                  <Route path="/HomeEmployers" component={HomeEmployers} />
                  <CompanyCtx.Provider
                    value={{ selectedCompany, setSelectedCompany }}
                  >
                    <Route exact path="/companies" component={Companies} />
                    <Route path="/companies/info" component={CompanyInfo} />
                  </CompanyCtx.Provider>
                  <Route path="/Jobs" component={Jobs} />
                  <Route path="/JobDetail" component={JobDetail} />
                  <Route path="/ResumeForm" component={FillUpForm} />
                  <Route path="/profile" component={Profile} />
                </>
              )}
            </AuthCtx.Provider>
          </>

          <div className="footer">
            <Container className="d-flex" style={{ height: "max-content" }}>
              <div className="aside-left">
                <img src={"/logo/company-1.png"} />
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
              </div>

              <div className="each-col px-0">
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
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
