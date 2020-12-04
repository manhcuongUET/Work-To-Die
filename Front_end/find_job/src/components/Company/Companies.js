import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CompanyCard } from "./CompanyCard";
import Select from "react-select";
import { RadioButton } from "../../share/RadioButton";
import axiosInstance from "../../utils/axios"

 // const [companies, setCompanies] = useState([
  //   {
  //     imgUrl: "",
  //     name: "",
  //     location: "",
  //     activeJobs: "",
  //   },
  // ]);

  const options = [
    { label: "react", value: "react" },
    { label: "react-native", value: "react-native" },
    { label: "css", value: "css" },
  ];

export const Companies = () => {
  useEffect(()=>{
    console.log("didmount");
    axiosInstance.get("/companies")
  },[])


  const onChangeSeclect=(value) => {
    console.log(value);
  }

  return (
    <Container>
      <Col lg={{ span: 8, offset: 2 }} md={{ span: 12, offset: 0 }}>
        <Select options={options} placeholder="Company..." onChange={onChangeSeclect}/>
        <div className="d-flex">
        </div>
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
        <CompanyCard name="test"/>
        <CompanyCard />
        <CompanyCard />
      </Row>
    </Container>
  );
};
