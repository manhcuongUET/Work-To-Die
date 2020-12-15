import React, { useContext, useEffect, useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import "../../css/companyInfo.css";
import axiosInstance from "../../utils/axios";
import { LoadingIndicator } from "../../share/LoadingIndicator";
import authContext from "../context/auth"
import { useHistory } from "react-router-dom";

export const UpLoadNewJob = () => {
  const history = useHistory()
  const {authUser, setAuthUser} = useContext(authContext)
  console.log(authUser);
  useEffect(()=>{
    if(!authUser){
      history.push("/")
    }
  },[])
  const convertDate = (inputFormat) => {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  };

  
 
  const [values, setValues] = useState({
    companyName: authUser ? authUser.companyName : "",
    job: "",
    type: "",
    field: "",
    salary: "",
    timePost: convertDate(new Date()),
    requirement: "",
    experience: "",
  });

  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState();

  useEffect(() => {
    axiosInstance.get(`/companies/info?name=${authUser ? authUser.companyName : ""}`).then((res) => {
      console.log(res);
      setInfo(res.data[0]);
    });
  }, [success]);

  const handelChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    setSuccess(false);
    event.preventDefault();
    const newJob = {
      companyName: authUser.companyName,
      job: values.job,
      type: values.type,
      field: values.field,
      salary: parseInt(values.salary),
      timePost: convertDate(new Date()),
      requirement: values.requirement,
      experience: values.experience,
    };
    console.log(newJob);
    axiosInstance.post("/employers/new-job", newJob).then((res) => {
      console.log(res);
      setValues({
        companyName: authUser.companyName,
        job: "",
        type: "",
        field: "",
        salary: "",
        timePost: convertDate(new Date()),
        requirement: "",
        experience: "",
      });
      setSuccess(true);
    });
  };

  return (
    <div>
    {authUser ? 
    <Container>
      <Row className="mt-3" style={{ textAlign: "left" }}>
        <div className="col-8">
          <div className="card-deco">
            <div className="card-title">Upload a new job</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Job</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={values.job}
                  name="job"
                  onChange={handelChange}
                  placeholder="Enter job"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Field</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={values.field}
                  name="field"
                  onChange={handelChange}
                  placeholder="Enter field"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={values.salary}
                  name="salary"
                  onChange={handelChange}
                  placeholder="Enter salary($)"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  required
                  as="select"
                  value={values.type}
                  name="type"
                  onChange={handelChange}
                >
                  <option value="Part-time">Part-time</option>
                  <option value="Full-time">Full-time</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={values.experience}
                  name="experience"
                  onChange={handelChange}
                  placeholder="Enter experience"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Requirement</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  value={values.requirement}
                  name="requirement"
                  onChange={handelChange}
                  rows={3}
                />
              </Form.Group>
              <button type="submit">Upload</button>
            </Form>
          </div>
        </div>
        <div className="col-4">
          <div className="card-deco">
            <div className="card-title">Uploaded jobs</div>
            {!info ? (
              <LoadingIndicator />
            ) : info.jobs.length === 0 ? (
              <div className="no-job">No uploaded job</div>
            ) : (
              <div>
                {info.jobs.map((job) => {
                  return (
                    <div className="job">
                      <div className="job-name">{job.job}</div>
                      <div className="des-title">{job.timePost}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Row>
    </Container>
    : <div></div>}
    </div>
  );
};
