import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CompanyCard } from "./CompanyCard";
import Select from "react-select";
import { RadioButton } from "../../share/RadioButton";
import axiosInstance from "../../utils/axios";
import { Pagination } from "./Pagination";
import CompanyCtx from "../../context/company";
import { LoadingIndicator } from "../../share/LoadingIndicator";

export const Companies = () => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [onePage, setOnePage] = useState();
  const [pagination, setPagination] = useState({
    limit: 6,
    page: 1,
    totalCompanies: 22,
  });
  const [filters, setFilters] = useState({
    limit: 6,
    page: 1,
  });

  const { selectedCompany, setSelectedCompany } = useContext(CompanyCtx);

  const options = companies.map((company) => {
    return { label: company.name, value: company._id };
  });

  //lay danh sach cong ty vao options
  //componentDidMount
  useEffect(() => {
    // setLoading(true);
    try {
      axiosInstance.get("/companies").then((res) => {
        const _totalCompanies = res.data.length;
        console.log(_totalCompanies);
        setPagination({
          ...pagination,
          totalCompanies: _totalCompanies,
        });
        setCompanies(res.data);
      });
    } catch (error) {
      console.log(error);
    } 
    // finally {
    //    setLoading(false);
    // }
  }, []);

  //compomentDidUpdate

  //load page theo tung trang
  useEffect(() => {
    const { limit, page } = filters;
    // setLoading(true);
    setOnePage()
    try {
      axiosInstance
        .get(`/companies?limit=${limit}&page=${page}`)
        .then((res) => {
          console.log(res.data);
          setOnePage(res.data);
          setPagination({ ...pagination, page: page });
        });
    } catch (error) {
      console.log(error);
    } 
    // finally {
    //   setLoading(false);
    // }
  }, [filters]);

  const onChangeOption = (selectedCompany) => {
     setOnePage();
    // setLoading(true);
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
    // finally {
    //   setLoading(false);
    // }
  };

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  const handleSeclectedCompany = (companyId) => {
    // setSelectedCompany(companyId);
    // console.log(selectedCompany);
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
        <>
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
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </>
      )}
    </Container>
  );
};
