import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBriefcase,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import "../../css/company.css";

export const CompanyCard = (props) => {
  const { imgUrl, name, location, type, activeJob } = props;
  return (
    <Col lg={4} md={6} className="my-2 px-2">
      <div
        className="px-3 py-3 cpn-container"
      >
        <div className="d-flex" style={{ height: "80px" }}>
          <img src={imgUrl} className="imgUrl" />
          <div className="flex-grow-1 pl-2">
            <div className="d-flex">
              <div className="name">{name}</div>
              <div className="mx-1 ">
                <FontAwesomeIcon  icon={faBookmark} />
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
            <FontAwesomeIcon icon={faBuilding}  />
          </div>
          <div
            className="flex-grow-1 pl-2"
            style={{ fontSize: "15px", height: "15px" }}
          >
            {type}
          </div>
        </div>
        <div
          className="d-flex "
          style={{ height: "20px", marginBottom: "5px" }}
        >
          <div style={{ height: "100%", width: "20px" }}>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div
            className="flex-grow-1 pl-2"
            style={{ fontSize: "15px", height: "15px" }}
          >
            {activeJob == 0 ? "No active job" : `${activeJob} active jobs`}
          </div>
        </div>
      </div>
    </Col>
  );
};
