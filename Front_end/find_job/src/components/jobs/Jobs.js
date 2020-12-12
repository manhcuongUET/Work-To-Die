import React, { useEffect, useState } from 'react'
import Select from "react-select";
import { Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Nav, Button, Navbar, Form, Row, Col, Container } from "react-bootstrap";
import "./job.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faFilter } from '@fortawesome/free-solid-svg-icons'
import { JobsInfo } from "./JobsInfo"
import { Next } from "./Next"
import axiosInstance from "../../utils/axios"


export const Jobs = () => {


    const [allJobs, setAllJobs] = useState([])
    const [loading, setLoading] = useState(true);
    const [onePage, setOnePage] = useState([]);
    const [located, setLocated] = useState("vietnam")
    const [salary, setSalary] = useState(0)
    const [isFilled, setIsFilled] = useState(false)

    const [pagination, setPagination] = useState({
        limit: 6,
        page: 1,
        totalJobs: 26,
    });
    const [filters, setFilters] = useState({
        limit: 6,
        page: 1,
    });

    const handleFilterLocation = async (e) => {
        const { name, value } = e.target
        setLocated(value)
    }

    useEffect(() => {
        setOnePage([])

        setFilters({
            ...filters,
            page: 1
        })
        if (located.localeCompare("vietnam") != 0 || salary > 0) {
            axiosInstance.get(`/jobs/located?located=${located}&salary=${salary}`).then((res) => {
                setIsFilled(true)
                console.log(res.data)
                setOnePage(res.data)
            })
        }
        else {
            setLoading(true)
            const { limit, page } = filters
            try {
                axiosInstance.get(`/jobs?limit=${limit}&page=${page}`).then((res) => {
                    setOnePage([...onePage, ...res.data])
                    setPagination({ ...pagination, page: page })
                })
            } finally {
                setLoading(false)

            }
        }

    }, [located])

    const handleFilterSalary = (e) => {
        const { name, value } = e.target
        setSalary(value)
    }

    useEffect(() => {
        setOnePage([])

        setFilters({
            ...filters,
            page: 1
        })

        if (located.localeCompare("vietnam") != 0 || salary > 0) {
            axiosInstance.get(`/jobs/located?located=${located}&salary=${salary}`).then((res) => {
                setIsFilled(true)
                console.log(res.data)
                setOnePage(res.data)
            })
        }
        else {
            setLoading(true)
            const { limit, page } = filters
            try {
                axiosInstance.get(`/jobs?limit=${limit}&page=${page}`).then((res) => {
                    setOnePage([...onePage, ...res.data])
                    setPagination({ ...pagination, page: page })
                })
            } finally {
                setLoading(false)

            }
        }

    }, [salary])

    const closeLocated = () => {
        setLocated("vietnam")
    }

    const closeSalary = () => {
        setSalary(0)
    }
    const reset = () => {
        window.location.reload()
    }

    const handlePageChange = (page) => {
        setFilters({
            ...filters,
            page: page
        })
    }

    const option = allJobs.map((job) => {
        return { label: job.job, value: job._id, field: job.field }
    })

    // componentDidUpdate

    const oneChangeOption = (selectedJob) => {
        setOnePage([])

        axiosInstance.get(`/jobs/selected?id=${selectedJob.label}`).then((res) => {
            console.log(res.data)
            setOnePage(res.data)
        })
    }

    useEffect(() => {
        axiosInstance.get("/jobs/all").then((res) => {
            setAllJobs(res.data);
        })
    }, [])

    useEffect(() => {

        setLoading(true)
        const { limit, page } = filters
        try {
            axiosInstance.get(`/jobs?limit=${limit}&page=${page}`).then((res) => {
                setOnePage([...onePage, ...res.data])
                setPagination({ ...pagination, page: page })
            })
        } finally {
            setLoading(false)

        }
    }, [filters])

    const getData = () => {
        let length = onePage.length
        console.log(length)
        let jobRender = [];

        for (let i = 0; i < length; i++) {
            jobRender[i] = <Col className="d-flex coll"><JobsInfo
                location={onePage[i].company[0].location}
                job={onePage[i].job}
                companyName={onePage[i].companyName}
                website={onePage[i].company[0].website}
                img={onePage[i].company[0].imgUrl}
                updateTime={onePage[i].timePost} /></Col>
        }
        return jobRender
    }



    return (
        <div>

            <Form className="mt-5 w-100">

                {/* <div className="d-flex w-100 justify-content-center">
                    <Form.Group controlId="formBasicEmail" className="w-50 jobInput" >
                        <Form.Control className="lookingJob" type="text" placeholder="Finding job or company name..." />
                    </Form.Group>
                    <Button className="lookingJob-button" variant="primary" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </div> */}
                <Col lg={{ span: 8, offset: 2 }} md={{ span: 12, offset: 0 }}>
                    <Select
                        options={option}
                        placeholder="Select jobs you want."
                        onChange={oneChangeOption}
                        style={{}}
                        className="my-5"
                    />
                    <div className="d-flex"></div>
                </Col>
                <div className="filterGroup">
                    <Form.Group controlId="exampleForm.ControlSelect1" className="filter">
                        <Form.Control as="select" className="filterDetail" name="location" onChange={handleFilterLocation} >
                            <option value="vietnam">Vietnam</option>
                            <option value="Hanoi, Vietnam">Hanoi</option>
                            <option value="Ho Chi Minh City, Vietnam">Ho Chi Minh City</option>

                        </Form.Control>
                        <Form.Control as="select" className="filterDetail" name="salary" onChange={handleFilterSalary}>
                            <option value={0}>No limit</option>
                            <option value={700}>Up to 700$</option>
                            <option value={1000}>Up to 1000$</option>
                            <option value={1200}>Up to 1200$</option>
                            <option value={1500}>Up to 1500$</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </Form>
            <div className="filterList">
                <div className="filterWrap">
                    <div className="filterTitle"><FontAwesomeIcon icon={faFilter} className="filterFont" size="2x" />Filter:</div>
                    {located.localeCompare("vietnam") == 0 ? null : <div className="filterName">{located}<FontAwesomeIcon icon={faTimes}  className="closeFont" size="2x" onClick = {closeLocated} /></div>}

                    {salary === 0 ? null : <div className="filterName">Up to {salary}$ <FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" onClick = {closeSalary} /></div>}

                    <div className="filterName" style={{ color: "red" }}>Reset <FontAwesomeIcon onClick={reset} icon={faTimes} className="closeFont" size="2x" /></div>
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
                    {loading ? <div>Loadingg...</div> : getData()}
                </Row>

                {located.localeCompare("vietnam") == 0 && salary == 0 ? <Next pagination={pagination} onPageChange={handlePageChange} /> : null}

            </div>
        </div>

    )
}

