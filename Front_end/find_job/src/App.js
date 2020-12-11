import React, { useState } from "react";
import { Route, useHistory, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Companies } from "./components/Company/Companies";
import { Home } from "./components/Home/Home";
import CompanyCtx from "./context/company";
import { CompanyInfo } from "./components/Company/CompanyInfo";
import "../src/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { Jobs } from "./components/jobs/Jobs";
import { JobDetail } from "./components/jobs/JobDetail";
import { FillUpForm } from "./components/Resume/FillUpForm";
import { Profile } from "./components/InvidualProfile/Profile";

export const App = () => {
  const history = useHistory();
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/Profile" className="mx-1">
                Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/companies" className="mx-1">
                Companies
              </Nav.Link>
              <Nav.Link as={Link} to="/auth/sign-up" className="mx-1">
                SIGN IN
              </Nav.Link>
              <Nav.Link as={Link} to="/auth/sign-in" className="mx-1">
                SIGN UP
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Route component={Jobs} />
      <Route component={Companies} />
      <Route component={Auth} /> */}
      <>
        <Route exact path="/" component={Home} />
        <CompanyCtx.Provider value={(selectedCompany, setSelectedCompany)}>
          <Route exact path="/companies" component={Companies} />
          <Route path="/companies/info" component={CompanyInfo} />
        </CompanyCtx.Provider>
        <Route path="/Jobs" component={Jobs} />
        <Route path="/JobDetail" component={JobDetail} />
        <Route path="/ResumeForm" component={FillUpForm} />
        <Route path="/Profile" component={Profile} />
      </>
      <div className="footer">
        <Container className="d-flex" style={{ height: "max-content" }}>
          <div className="aside-left">
            <img src="./static/uet-logo.png" />
            <p className="para-left">
              Glints is the #1 recruitment platform in Asia helping companies
              build successful teams with young talent. Our mission is to help
              companies hire the right young talent effectively, and for young
              people to discover and develop careers they love.
            </p>
            <p>
              © 2020 Glints Intern Pte Ltd & Glints Singapore Pte Ltd<br></br>
              EA Licence No: 16C7981
            </p>
          </div>

          <div className="each-col px-0">
            <div className="title-right">Company</div>
            <div className="detail-right">About us</div>
            <div className="detail-right"> Hired Blog</div>
            <div className="detail-right">Inside Glints</div>
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
            <div className="detail-right">Glints Platform</div>
            <div className="detail-right">TalentHunt</div>
            <div className="detail-right">TalentHub</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default App;
