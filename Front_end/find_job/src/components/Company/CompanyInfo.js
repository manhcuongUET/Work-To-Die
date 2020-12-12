import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../../css/companyInfo.css";
import axiosInstance from "../../utils/axios";
import { LoadingIndicator } from "../../share/LoadingIndicator";
import companyContext from "../../context/company";

export const CompanyInfo = () => {
  const [info, setInfo] = useState();
  // const [loading, setLoading] = useState(false);
  const { selectedCompany, setSelectedCompany } = useContext(companyContext);
  // const name = setSelectedCompany;
  useEffect(() => {
    // setLoading(true);
    try {
      axiosInstance
        .get(`/companies/info?name=${selectedCompany}`)
        .then((res) => {
          // console.log(res.data.jobs.length);
          setInfo(res.data[0]);
        });
    } catch (error) {
      console.log(error);
    }
    // finally {
    //   setLoading(false);
    // }
  }, []);

  return (
    <Container>
      {!info ? (
        <LoadingIndicator />
      ) : (
        <>
          <div className="info-container">
            <div className="top">
              <img src={`.${info.imgUrl}`} />
              <div className="description">
                <div className="name">{info.name}</div>
                <Row className="d-flex" style={{ height: "100px" }}>
                  <div className="col-1 des-title">
                    <div>Location:</div>
                    <div>Field:</div>
                  </div>
                  <div className="col-5 des-text">
                    <div>{info.location}</div>
                    <div>{info.field}</div>
                  </div>
                  <div className="col-1 des-title">Website:</div>
                  <a href={info.website}
                    className="col-5 des-text"
                    style={{ wordBreak: "break-all" }}
                    target="_blank"
                  >
                    {info.website}
                  </a>
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
                  {/* <div className="job">
                    <div className="job-name">Computer Vision Engineer</div>
                    <div className="des-title">Ha Noi</div>
                  </div>
                  <div className="job">
                    <div className="job-name">Computer Vision Engineer</div>
                    <div className="des-title">Ha Noi</div>
                  </div> */}
                  {info.jobs.length === 0 ? (
                    <div className="no-job">
                      There are no jobs by this company at the moment. Please
                      check back later!
                    </div>
                  ) : (
                    <div>
                      {info.jobs.map((job) => {
                        return (
                          <div className="job">
                            <div className="job-name">{job.job}</div>
                            <div className="des-title">{job.field}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}
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
        </>
      )}
    </Container>
  );
};
