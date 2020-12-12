import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBriefcase,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import "../../css/company.css";
import CompanyCtx from "../../context/company";
import { useHistory } from "react-router-dom";

export const CompanyCard = (props) => {
  const { id, imgUrl, name, location, field, jobs, onSelectedCompany } = props;
  const { selectedCompany, setSelectedCompany } = useContext(CompanyCtx);
  const history = useHistory();

  const handleSeclectedCompany = () => {
    history.push("/companies/info");
  };

  return (
    <Col lg={4} md={6} className="my-2 px-2">
      <div className="px-3 py-3 cpn-container" onClick={handleSeclectedCompany}>
        <div className="d-flex" style={{ height: "80px" }}>
          <img src={imgUrl} className="imgUrl" />
          <div className="flex-grow-1 pl-2">
            <div className="d-flex">
              <div className="name">{name}</div>
              <div className="mx-1 ">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <div className="location">{location}</div>
          </div>
        </div>
        <div
          className="d-flex "
          style={{ height: "20px", marginBottom: "5px" }}
        >
          <div style={{ height: "100%", width: "20px" }}>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <div
            className="flex-grow-1 pl-2"
            style={{ fontSize: "15px", height: "15px" }}
          >
            {field}
          </div>
        </div>
        <div
          className="d-flex "
          style={{ height: "20px", marginBottom: "5px" }}
        >
          <div style={{ height: "100%", width: "20px" }}>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          {jobs > 0 ? (
            <div className="flex-grow-1 pl-2 active">
              {jobs === 1 ? "1 active job" : `${jobs} active jobs`}
            </div>
          ) : (
            <div className="flex-grow-1 pl-2 no-active">No active job</div>
          )}
        </div>
      </div>
    </Col>
  );
};
