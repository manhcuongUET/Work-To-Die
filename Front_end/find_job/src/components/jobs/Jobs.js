import React from 'react'
import { Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Nav, Button, Navbar, Form, Row, Col, Container } from "react-bootstrap";
import "./job.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faFilter } from '@fortawesome/free-solid-svg-icons'
import { JobsInfo } from "./JobsInfo"

export const findingJob = () => {
    return (
        <div>

            <Form className="mt-5 w-100">

                <div className="d-flex w-100 justify-content-center">
                    <Form.Group controlId="formBasicEmail" className="w-50 jobInput" >
                        <Form.Control className="lookingJob" type="text" placeholder="Finding job or company name..." />
                    </Form.Group>
                    <Button className="lookingJob-button" variant="primary" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </div>
                <div className="filterGroup">
                    <Form.Group controlId="exampleForm.ControlSelect1" className="filter">
                        <Form.Control as="select" className="filterDetail" >
                            <option>Occupation</option>
                            <option>2</option>
                        </Form.Control>
                        <Form.Control as="select" className="filterDetail">
                            <option>Located</option>
                            <option>2</option>
                        </Form.Control>
                        <Form.Control as="select" className="filterDetail">
                            <option>Salary</option>
                            <option>2</option>
                        </Form.Control>
                        <Form.Control as="select" className="filterDetail">
                            <option>Experience</option>
                            <option>2</option>
                        </Form.Control>
                        <Form.Control as="select" className="filterDetail">
                            <option>Company</option>
                            <option>2</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </Form>
            <div className="filterList">
                <div className="filterWrap">
                    <div className="filterTitle"><FontAwesomeIcon icon={faFilter} className="filterFont" size="2x" /> Filter:</div>
                    <div className="filterName">Hanoi <FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" /></div>
                    <div className="filterName">Web Developer <FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" /></div>
                    <div className="filterName">Up to 3000$ <FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" /></div>
                    <div className="filterName">Less than 1 year<FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" /></div>
                    <div className="filterName">VNG<FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" /></div>
                </div>

            </div>
            <div className="showJobList">
                <div className="showTitle d-flex">
                    <div className="jobNumber" style={{ paddingTop: 10 }}>Showing {30} jobs out of {1200} total</div>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label style={{ fontSize: 12 }}>Sorted by</Form.Label>
                        <Form.Control as="select" style={{ marginTop: -10, width: 150 }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </div>
            <div className = "containerr">
                    <Row className = "roww">
                        <Col className = "d-flex coll"><JobsInfo/></Col>
                        <Col className = "d-flex coll"><JobsInfo/></Col>
                        <Col className = "d-flex coll"><JobsInfo/></Col>
                    </Row>
                    <Row className = "roww">
                        <Col className = "d-flex coll"><JobsInfo/></Col>
                        <Col className = "d-flex coll"><JobsInfo/></Col>
                        <Col className = "d-flex coll"><JobsInfo/></Col>
                    </Row>
                    <Row className = "roww">
                        <Col className = "d-flex coll"><JobsInfo/></Col>
                        <Col className = "d-flex coll"><JobsInfo/></Col>
                        <Col className = "d-flex coll"><JobsInfo/></Col>
                    </Row>

                </div>
        </div>

    )
}

