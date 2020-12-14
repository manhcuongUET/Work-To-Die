import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import "../../css/companyInfo.css";
import axiosInstance from "../../utils/axios";

export const UpLoadNewJob = () => {
  const  convertDate = (inputFormat) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }
  
  const _companyName = "Clevergroup"
  const [values, setValues] = useState({
    companyName: _companyName,
    job :"",
    type: "",
    field : "",
    salary : "",
    timePost: convertDate( new Date()),
    requirement : "",
    experience: ""
  })

  const handelChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

const handleSubmit = (event) => {
  event.preventDefault();
  const newJob = {
    companyName: _companyName,
    job : values.job,
    type: values.type,
    field : values.field,
    salary : values.salary,
    timePost: convertDate( new Date()),
    requirement : values.requirement,
    experience: values.experience
  }
  console.log(newJob);
  axiosInstance.post("/employers/new-job", newJob).then((res) =>{
    console.log(res);
  })
}

  return (
    <Container>
      <Row>
        <div className="col-8">
          <div className="card-deco">
            <div className="card-title">Upload a new job</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Job</Form.Label>
                <Form.Control required type="text" value={values.job} name="job" onChange={handelChange} placeholder="Enter job" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Field</Form.Label>
                <Form.Control required type="text" value={values.field} name="field" onChange={handelChange} placeholder="Enter field" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Salary</Form.Label>
                <Form.Control required type="number" value={values.salary} name="salary" onChange={handelChange} placeholder="Enter salary($)" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Type</Form.Label>
                <Form.Control required as="select" value={values.type} name="type" onChange={handelChange}>
                  <option value="Part-time">Part-time</option>
                  <option value="Full-time">Full-time</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Experience</Form.Label>
                <Form.Control required type="text" value={values.experience} name="experience" onChange={handelChange} placeholder="Enter experience" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Requirement</Form.Label>
                <Form.Control required as="textarea" value={values.requirement} name="requirement" onChange={handelChange} rows={3} />
              </Form.Group>
              <button type="submit">Upload</button>
            </Form>
          </div>
        </div>
        <div className="col-4">
          <div className="card-deco">
            <div className="card-title">Uploaded jobs</div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
