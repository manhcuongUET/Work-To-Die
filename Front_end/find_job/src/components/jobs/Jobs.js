import React, { useEffect, useState } from 'react'
import { Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Nav, Button, Navbar, Form, Row, Col, Container } from "react-bootstrap";
import "./job.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faFilter } from '@fortawesome/free-solid-svg-icons'
import { JobsInfo } from "./JobsInfo"
import axiosInstance from "../../utils/axios"


export const Jobs = () => {

    const [dataa, setDataa] = useState()
    const [id , setId] = useState([])
   

    useEffect(() => {
        axiosInstance.get("/jobs").then(res => {
            let test = res.data[0]
            setDataa({
                job: test.job,
                companyName: test.companyName,
                location: test.location,
                updateTime: test.updateTime
            });
        }).then(res => {
            console.log(dataa)
        })
    }, [])

    const getData = () => {
        let getDataById = []

        for(let i=0 ; i<9 ; i++ ) {
            getDataById[i] =   <Col className="d-flex coll"><JobsInfo
            id = {i}
            job={dataa.job}
            companyName={dataa.companyName}
            location={dataa.location}
            updateTime={dataa.updateTime} /></Col>
        }
        return getDataById
    }



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
                        <Form.Control as="select" className="filterDetail">
                            <option value = "hanoi">Hanoi</option>
                            <option value = "danang">Danang</option>
                            <option value = "hcm">HCM City</option>

                        </Form.Control>
                        <Form.Control as="select" className="filterDetail">
                            <option>Up to 700$</option>
                            <option>Up to 1000$</option>
                            <option>Up to 1200$</option>
                            <option>Up to 1500$</option>
                            <option>Up to 1500$</option>        
                        </Form.Control>
                    </Form.Group>
                </div>
            </Form>
            <div className="filterList">
                <div className="filterWrap">
                    <div className="filterTitle"><FontAwesomeIcon icon={faFilter} className="filterFont" size="2x" />Filter:</div>
                    <div className="filterName">Hanoi <FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" /></div>
                    <div className="filterName">Up to 3000$ <FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" /></div>
                </div>

            </div>
            <div className="showJobList">
                <div className="showTitle d-flex">
                    <div className="jobNumber" style={{ paddingTop: 10 }}>Showing {30} jobs out of {1200} total</div>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label style={{ fontSize: 12 }}>Sorted by</Form.Label>
                        <Form.Control as="select" style={{ marginTop: -10, width: 150 }}>
                            <option>Default</option>
                            <option>Salary</option>
                            <option>Posted time</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </div>
            <div className="containerr">
                <Row className="roww">
                    {dataa ? getData() : null}
                    
                 
                </Row>

            </div>
        </div>

    )
}

