import React, { useContext, useEffect, useState } from 'react'
import Select from "react-select";
import { Route, useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col } from "react-bootstrap";
import "./job.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faFilter } from '@fortawesome/free-solid-svg-icons'
import { JobsInfo } from "./JobsInfo"
import { Next } from "./Next"
import axiosInstance from "../../utils/axios"
import jobContext from "../../context/job"
import { LoadingSign } from '../../share/LoadingIndicator';



export const Jobs = () => {
    const history = useHistory()
    const { selectedJob, setSelectedJob } = useContext(jobContext)
    const [allJobs, setAllJobs] = useState([])
    const [loading, setLoading] = useState(true);
    const [onePage, setOnePage] = useState([]);
    const [onePageDefault, setOnePageDefault] = useState([])
    const [located, setLocated] = useState("vietnam")
    const [salary, setSalary] = useState(0)
    const [isFilled, setIsFilled] = useState(false)
    const [sorted, setSorted] = useState("none")

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
        console.log('locate effect')
        setOnePage([])
        

        setFilters({
            ...filters,
            page: 1
        })
        if (located.localeCompare("vietnam") != 0 || salary > 0) {
            axiosInstance.get(`/jobs/located?located=${located}&salary=${salary}`).then((res) => {
                setIsFilled(true)
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
        console.log('salary effect')
        setOnePage([])
        setOnePageDefault([])

        setFilters({
            ...filters,
            page: 1
        })

        if (located.localeCompare("vietnam") != 0 || salary > 0) {
            axiosInstance.get(`/jobs/located?located=${located}&salary=${salary}`).then((res) => {
                setIsFilled(true)
                setOnePage(res.data)
                setOnePageDefault([])
            })
        }
        else {
            setLoading(true)
            const { limit, page } = filters
            try {
                axiosInstance.get(`/jobs?limit=${limit}&page=${page}`).then((res) => {
                    setOnePage([...onePage, ...res.data])
                    setOnePageDefault([...onePage, ...res.data])
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
        setOnePageDefault([])

        axiosInstance.get(`/jobs/selected?id=${selectedJob.label}`).then((res) => {
            setOnePage(res.data)
            setOnePageDefault(res.data)
        })
    }

    useEffect(() => {
        axiosInstance.get("/jobs/all").then((res) => {
            setAllJobs(res.data);
        })
    }, [])

    useEffect(() => {
        console.log('filter effect')
        setLoading(true)
        const { limit, page } = filters
        try {
            axiosInstance.get(`/jobs?limit=${limit}&page=${page}`).then((res) => {
                setOnePageDefault([...onePageDefault, ...res.data])
                setOnePage([...onePage, ...res.data])
                setPagination({ ...pagination, page: page })
            })
        } finally {
            setLoading(false)

        }
    }, [filters])

    const getData = () => {
        let length = onePage.length
        let jobRender = [];

        for (let i = 0; i < length; i++) {
            jobRender[i] = <Col className="d-flex coll"><JobsInfo
                location={onePage[i].company[0].location}
                job={onePage[i].job}
                companyName={onePage[i].companyName}
                website={onePage[i].company[0].website}
                img={onePage[i].company[0].imgUrl}
                updateTime={onePage[i].timePost}
                salary={onePage[i].salary}
                onSelectedJob={handleSelectedJob}
            /></Col>

        }
        return jobRender
    }

    const handleSelectedJob = (job) => {
        setSelectedJob(job)
    }

    const sortOnePage = () => {
        const a =  [...onePage]
        for (let i = 0; i < a.length - 1; i++) {
            for (let j = 0; j < a.length - i - 1 ; j++) {
                if (a[j].salary < a[j + 1].salary) {
                    const temp = a[j]
                    a[j] = a[j + 1]
                    a[j + 1] = temp
                }
            }
        }
        return a
    }

    const handlesorted = (e) => {
        const {name , value} = e.target
        if(value.localeCompare("salary") === 0) {
            setOnePage(sortOnePage())
            console.log(onePage)
            console.log(onePageDefault)
        }
        else {
            setOnePage(onePageDefault)
        }
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
                    {located.localeCompare("vietnam") == 0 ? null : <div className="filterName">{located}<FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" onClick={closeLocated} /></div>}

                    {salary === 0 ? null : <div className="filterName">Up to {salary}$ <FontAwesomeIcon icon={faTimes} className="closeFont" size="2x" onClick={closeSalary} /></div>}

                    {salary != 0 || located.localeCompare("vietnam") != 0 ? <div className="filterName" style={{ color: "red" }}>Reset <FontAwesomeIcon onClick={reset} icon={faTimes} className="closeFont" size="2x" /></div> : null}
                </div>

            </div>
            <div className="showJobList">
                <div className="showTitle d-flex">
                    <div className="jobNumber" style={{ paddingTop: 10 }}>Showing {30} jobs out of {1200} total</div>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label style={{ fontSize: 12 }}>Sorted by</Form.Label>
                        <Form.Control as="select" style={{ marginTop: -10, width: 150 }} name = "a" onChange={handlesorted}>
                            <option value="none">Default</option>
                            <option value="salary">Salary</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </div>
            <div className="containerr" style = {{marginBottom: 100}}>
                <Row className="roww">
                    {onePage.length == 0 ? <LoadingSign text="Loading" /> : getData()}
                    
                </Row>
                <div>
                    {located.localeCompare("vietnam") == 0 && salary == 0 ? <Next style = {{marginBottom: 1000}} pagination={pagination} onPageChange={handlePageChange} /> : null}
                </div>
            

            </div>
        </div>

    )
}

