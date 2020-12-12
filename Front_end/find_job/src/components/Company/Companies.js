import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory, useLocation } from 'react-router-dom'

import { CompanyCard } from "./CompanyCard";
import Select from "react-select";
import { RadioButton } from "../../share/RadioButton";
import axiosInstance from "../../utils/axios";
import { Pagination } from "./Pagination";
import companyContext from "../../context/company";
import { LoadingIndicator } from "../../share/LoadingIndicator";

export const Companies = () => {
  const history = useHistory();
  const location = useLocation();
  const pageQuery = parseInt(location.search.slice(6))
  console.log(pageQuery)
  const [companies, setCompanies] = useState([]);
  const [onePage, setOnePage] = useState();
  const [pagination, setPagination] = useState({
    limit: 6,
    page: 1,
    totalCompanies: 1,
  });
  // const [filters, setFilters] = useState({
  //   limit: 6,
  //   page: 1,
  // });

  const { selectedCompany, setSelectedCompany } = useContext(companyContext);

  const options = companies.map((company) => {
    return { label: company.name, value: company._id };
  });

  //lay danh sach cong ty vao options
  //componentDidMount
  useEffect(() => {
    try {
      axiosInstance.get("/companies").then((res) => {
        const _totalCompanies = res.data.length;
        console.log(_totalCompanies);
        setPagination({
          ...pagination,
          totalCompanies: _totalCompanies
        });
        setCompanies(res.data);
      });
    } catch (error) {
      console.log(error);
    } 
  }, []);

  //compomentDidUpdate

  //load page theo tung trang
  useEffect(() => {
    // const {page, limit} = filters;
    const {limit} = pagination
    // console.log('filters', filters)
    setOnePage()
    try {
      axiosInstance
        .get(`/companies?limit=${limit}&page=${pageQuery}`)
        .then((res) => {
          console.log(res.data);
          setOnePage(res.data);
          setPagination(prevState => ({ ...prevState, page: pageQuery }));
        });
    } catch (error) {
      console.log(error);
    } 
  }, [ pageQuery]);

  const onChangeOption = (selectedCompany) => {
     setOnePage();
    console.log(selectedCompany);
    try {
      axiosInstance
        .get(`/companies?name=${selectedCompany.label}`)
        .then((res) => {
          console.log(res.data);
          setOnePage(res.data);
        });
    } catch (error) {
      console.log(error);
    } 
  };

  const handlePageChange = (newPage) => {
    // setFilters({
    //   ...filters,
    //   page: newPage,
    // });
    setPagination({...pagination, page : newPage})
    history.push('/companies?page='+ newPage)
  };

  const handleSeclectedCompany = (companyName) => {
     setSelectedCompany(companyName)
  };

  return (
    <Container>
      <Col lg={{ span: 8, offset: 2 }} md={{ span: 12, offset: 0 }}>
        <Select
          options={options}
          placeholder="Company..."
          onChange={onChangeOption}
          style={{}}
          className="my-5"
        />
        <div className="d-flex"></div>
      </Col>
      {!onePage ? (
        <LoadingIndicator />
      ) : (
        <div >
          <Row style={{ height: "max-content", minHeight: "450px" }}>
            {onePage.map((company) => {
              return (
                <CompanyCard
                  key={company._id}
                  id={company._id}
                  imgUrl={company.imgUrl}
                  name={company.name}
                  location={company.location}
                  field={company.field}
                  jobs={company.jobs.length}
                  onSelectedCompany={handleSeclectedCompany}
                />
              );
            })}
          </Row>
          <Pagination  pagination={pagination} onPageChange={handlePageChange} />
        </div>
      )}
    </Container>
  );
};
