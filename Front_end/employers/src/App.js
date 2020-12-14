import logo from "./logo.svg";
import "./App.css";
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

function App() {
  const handleClick = () => {};
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
              <Nav.Link as={Link} to="/upload-job" className="mx-1">
                Upload new job
              </Nav.Link>
              <Nav.Link as={Link} to="/apply-job" className="mx-1">
                Candidate Job Applications
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
        <Route path="/apply-job" component={SeeApply} />
        <Route path="/upload-job" component={UpLoadNewJob} />
      </>
    </div>
  );
}

export default App;
