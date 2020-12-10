import React from "react";
import { Route, useHistory, Link } from "react-router-dom";
import { Nav, Navbar,Container ,Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Companies } from "./components/Company/Companies";
import { Home } from "./components/Home/index";
import { Jobs } from "./components/jobs/Jobs"
import {JobDetail} from "./components/jobs/JobDetail"
import {FillUpForm} from "./components/Resume/FillUpForm"
import { Profile } from "./components/InvidualProfile/Profile";


export const App = () => {
  const history = useHistory();
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
        <Route exact path="/companies" component={Companies} />
        <Route path="/Jobs" component={Jobs} /> 
      <Route  path = "/JobDetail" component = {JobDetail}/>
      <Route path = "/ResumeForm" component = {FillUpForm} />
      <Route path = "/Profile" component = {Profile}/>
      
      </>
    </div>
  );
};

export default App;
