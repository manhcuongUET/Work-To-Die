import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container } from "react-bootstrap";

export const Home = () => {
  return (
    <Container>
      <Row style={{ height: "150px", margin: "100px 0px" }}>
        <div className="col-4">
          <div style={{ fontSize: "16px" }}>
            <span>We've helped</span>
          </div>
          <div
            style={{
              fontSize: "40px",
              color: "rgb(236, 39, 43)",
              fontWeight: "bolder",
              lineHeight: "1.3",
            }}
          >
            1,318,922
          </div>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            Young Professionals To Discover Their Dream Careers
          </div>
        </div>
        <div className="col-4">
          <div style={{ fontSize: "16px" }}>
            <span>We've empowered</span>
          </div>
          <div
            style={{
              fontSize: "40px",
              color: "rgb(236, 39, 43)",
              fontWeight: "bolder",
              lineHeight: "1.3",
            }}
          >
            32,174
          </div>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            Companies Worldwide To Build Successful Teams
          </div>
        </div>
        <div className="col-4">
          <div style={{ fontSize: "16px" }}>
            <span>Explore</span>
          </div>
          <div
            style={{
              fontSize: "40px",
              color: "rgb(236, 39, 43)",
              fontWeight: "bolder",
              lineHeight: "1.3",
            }}
          >
            5,833
          </div>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            Hot Opportunities Posted Monthly
          </div>
        </div>
      </Row>
      <div style={{ textAlign: "center" }}>
        <div>
          <span
            style={{
              backgroundImage:
                "linear-gradient(to top, rgb(255, 242, 64) 40%, transparent 0px)",
              fontSize: "40px",
            }}
          >
            EXPLORE CAREERS
          </span>
        </div>
        <div style={{ color: "rgb(119, 119, 119)", fontSize: "18px" }}>
          Find out which career and profession suits you best
        </div>
      </div>

      <Row
        style={{
          height: "400px",
          backgroundImage: "./home/home-1.jpg",
          marginTop: "30px",
        }}
      >
        <div className="col-6">
          <h1 style={{ width: "300px", fontSize: "40px" }}>
            JOIN A COMMUNITY OF{" "}
            <span style={{ color: "rgb(236, 39, 43)" }}>1,000,000+</span> YOUNG
            TALENTS
          </h1>
        </div>
        <div className="col-6 pt-3">
          <div className="mb-3">
            <div style={{ fontWeight: "bold", fontSize: "25px" }}>DISCOVER</div>
            <div style={{ color: "rgb(119, 119, 119)", fontSize: "20px" }}>
              Discover different career paths and the latest job opportunities
            </div>
          </div>
          <div className="mb-3">
            <div style={{ fontWeight: "bold", fontSize: "25px" }}>DEVELOP</div>
            <div style={{ color: "rgb(119, 119, 119)", fontSize: "20px" }}>
              Develop the right skill sets to build your dream career
            </div>
          </div>
          <div className="mb-3">
            <div style={{ fontWeight: "bold", fontSize: "25px" }}>
              GET CONNECTED
            </div>
            <div style={{ color: "rgb(119, 119, 119)", fontSize: "20px" }}>
              Get Connected directly with companies who reach out to you for the
              hottest opportunities
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
