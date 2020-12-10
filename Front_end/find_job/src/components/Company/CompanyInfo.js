import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../../css/companyInfo.css";
import axiosInstance from "../../utils/axios";
import { LoadingIndicator } from "../../share/LoadingIndicator";

export const CompanyInfo = () => {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const id = "Dai hoc Cong Nghe";
  useEffect(() => {
    // setLoading(true);
    try {
      axiosInstance.get(`/companies/info?id=${id}`).then((res) => {
        console.log(res.data.jobs.length);
        setInfo(res.data);
      });
    } catch (error) {
      console.log(error.messages);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  } else {
    return (
      <Container>
        <div className="info-container">
          <div className="top">
            <img src="./static/uet-logo.png" />
            <div className="description">
              <div className="name">{info.name}</div>
              <Row className="d-flex" style={{ height: "100px" }}>
                <div className="col-1 des-title">
                  <div>Location</div>
                  <div>Field</div>
                </div>
                <div className="col-5 des-text">
                  <div>{info.location}</div>
                  <div>Education</div>
                </div>
                <div className="col-1 des-title">Website</div>
                <div className="col-5 des-text">{info.website}</div>
              </Row>
            </div>
          </div>
          <div></div>
        </div>
        <div style={{ height: "max-contet" }}>
          <Row style={{ height: "max-contet" }}>
            <div className="col-8 ">
              <div className="card-deco">
                <div className="card-title">OverView</div>
                <p>{info.overview}</p>
              </div>
              <div className="card-deco">
                <div className="card-title">Jobs</div>
                <div className="job">
                  <div className="job-name">Computer Vision Engineer</div>
                  <div className="des-title">Ha Noi</div>
                </div>
                <div className="job">
                  <div className="job-name">Computer Vision Engineer</div>
                  <div className="des-title">Ha Noi</div>
                </div>
                <div className="job">
                  <div className="job-name">Computer Vision Engineer</div>
                  <div className="des-title">Ha Noi</div>
                </div>
                <div className="job">
                  <div className="job-name">Computer Vision Engineer</div>
                  <div className="des-title">Ha Noi</div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card-deco">
                <div className="card-title">Gallery</div>
                <p>The company hasn't added any photos yet.</p>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    );
  }
};
