import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CompanyCard } from "./CompanyCard";
import Select from "react-select";
import { RadioButton } from "../../share/RadioButton";
import axiosInstance from "../../utils/axios";

// const [companies, setCompanies] = useState([
//   {
//     imgUrl: "",
//     name: "",
//     location: "",
//     activeJobs: "",
//   },
// ]);


export const Companies = () => {
  const [companies, setCompanies] = useState([])
  const options= companies.map((company) =>{
    return {label: company.name, value: company._id}
  })

  useEffect(() => {
    axiosInstance.get("/companies").then((res) =>{
        console.log(res.data);
        setCompanies(res.data)
    })
    axiosInstance.get("/companies?limit=10").then((res) =>{
      console.log(res.data);
  })
    
  }, []);

  const onChangeSeclect = (value) => {
    console.log(value);
  };

  return (
    <Container>
      <Col lg={{ span: 8, offset: 2 }} md={{ span: 12, offset: 0 }}>
        <Select
          options={options}
          placeholder="Company..."
          onChange={onChangeSeclect}
        />
        <div className="d-flex"></div>
      </Col>
      <Row>
        <CompanyCard
          imgUrl="./static/uet-logo.png"
          name="University of Engineering and Technology"
          location="Ha noi, Viet Nam"
          type="Education"
          activeJob="2"
        />
        <CompanyCard
          imgUrl="./static/fpt-logo.png"
          name="Financing Promoting Technology"
          location="Ha noi, Viet Nam"
          activeJob="2"
        />
        <CompanyCard name="test" />
        <CompanyCard />
        <CompanyCard />
      </Row>
    </Container>
  );
};
