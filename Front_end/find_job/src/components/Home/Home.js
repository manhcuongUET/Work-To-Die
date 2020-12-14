import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFolderOpen,
  faUniversity,
  faCheck,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "58px",
          lineHeight: "1.03",
          letterSpacing: "-2.1px",
          padding: "40px 0px",
        }}
      >
        Phát triển đội ngũ tài năng cùng Find Jobs
      </div>
      <div>
        <img
          style={{ width: "100%", height: "500px" }}
          src="./home/home-7.jpg"
        />
      </div>
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
        <>
          <div style={{ textAlign: "center" }}>
            <div>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgb(255, 242, 64) 40%, transparent 0px)",
                  fontSize: "35px",
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

              marginTop: "30px",
            }}
          >
            <div
              className="col-6"
              style={{ backgroundImage: "url(" + "./home/home-1.jpg" + ")" }}
            >
              <h1 style={{ width: "300px", fontSize: "40px" }}>
                JOIN A COMMUNITY OF{" "}
                <span style={{ color: "rgb(236, 39, 43)" }}>1,000,000+</span>{" "}
                YOUNG TALENTS
              </h1>
            </div>
            <div className="col-6 pt-3">
              <div className="mb-3">
                <div style={{ fontWeight: "bold", fontSize: "25px" }}>
                  DISCOVER
                </div>
                <div style={{ color: "rgb(119, 119, 119)", fontSize: "20px" }}>
                  Discover different career paths and the latest job
                  opportunities
                </div>
              </div>
              <div className="mb-3">
                <div style={{ fontWeight: "bold", fontSize: "25px" }}>
                  DEVELOP
                </div>
                <div style={{ color: "rgb(119, 119, 119)", fontSize: "20px" }}>
                  Develop the right skill sets to build your dream career
                </div>
              </div>
              <div className="mb-3">
                <div style={{ fontWeight: "bold", fontSize: "25px" }}>
                  GET CONNECTED
                </div>
                <div style={{ color: "rgb(119, 119, 119)", fontSize: "20px" }}>
                  Get Connected directly with companies who reach out to you for
                  the hottest opportunities
                </div>
              </div>
            </div>
          </Row>
        </>
        <>
          <div style={{ textAlign: "center", padding: "100px 0px 30px 0px" }}>
            <div>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgb(255, 242, 64) 40%, transparent 0px)",
                  fontSize: "35px",
                }}
              >
                TOP COMPANIES
              </span>
            </div>
          </div>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <img
              style={{ width: "100px", height: "100px" }}
              src="./home/vin.png"
            />
            <img
              style={{ width: "150px", height: "100px" }}
              src="./home/fpt.jpg"
            />
            <img
              style={{ width: "150px", height: "100px" }}
              src="./home/google.jpg"
            />
            <img
              style={{ width: "150px", height: "100px" }}
              src="./home/amazon.png"
            />
            <img
              style={{ width: "150px", height: "100px" }}
              src="./home/microsoft.jpg"
            />
          </div>
        </>
        <>
          <div style={{ textAlign: "center", padding: "100px 0px 30px 0px" }}>
            <div>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgb(255, 242, 64) 40%, transparent 0px)",
                  fontSize: "35px",
                }}
              >
                CREATE A PROFILE
              </span>
            </div>
          </div>
          <Row>
            <div
              className="col-3 align-items-center"
              style={{ textAlign: "center" }}
            >
              <FontAwesomeIcon
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "20px 0px",
                  color: "#fdb81e",
                }}
                icon={faStar}
              />
              <p
                style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}
              >
                Save your favorite jobs and searches
              </p>
              <p>Receive email updates from jobs you're interested in.</p>
            </div>
            <div
              className="col-3 align-items-center"
              style={{ textAlign: "center" }}
            >
              <FontAwesomeIcon
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "20px 0px",
                  color: "#0071bc",
                }}
                icon={faFolderOpen}
              />
              <p
                style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}
              >
                Upload your resumes and documents
              </p>
              <p>Save and manage resumes and documents for your application.</p>
            </div>
            <div
              className="col-3 align-items-center"
              style={{ textAlign: "center" }}
            >
              <FontAwesomeIcon
                style={{ width: "50px", height: "50px", margin: "20px 0px" }}
                icon={faUniversity}
              />
              <p
                style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}
              >
                Make your resume searchable
              </p>
              <p>
                Your resume will be visible to recruiters searching our
                database.
              </p>
            </div>
            <div
              className="col-3 align-items-center"
              style={{ textAlign: "center" }}
            >
              <FontAwesomeIcon
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "20px 0px",
                  color: "#2e8540",
                }}
                icon={faCheck}
              />
              <p
                style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}
              >
                Apply for jobs in the Federal Government
              </p>
              <p>You can only apply online with a complete profile.</p>
            </div>
          </Row>
        </>
        <>
          <div style={{ textAlign: "center", padding: "100px 0px 30px 0px" }}>
            <div>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgb(255, 242, 64) 40%, transparent 0px)",
                  fontSize: "35px",
                }}
              >
                Here's What Your Friends Say
              </span>
            </div>
          </div>
          <Row style={{ marginBottom: "50px" }}>
            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src="./home/person-1.jpg"
                />
              </div>
              <div style={{ textAlign: "center", margin: "30px 0px" }}>
                <FontAwesomeIcon
                  style={{ color: "rgb(11, 174, 236)" }}
                  icon={faQuoteRight}
                />
              </div>
              <p style={{ padding: "0px 50px", color: "rgb(119, 119, 119)" }}>
                I didn't really know what I wanted to do and what were all the
                career paths out there - and was just exploring the careers on
                Glints - now I have discovered what I love to do and found my
                dream career!
              </p>
              <div style={{ paddingLeft: "350px" }}>Jia Ann</div>
              <div
                style={{ paddingLeft: "150px", color: "rgb(119, 119, 119)" }}
              >
                Ho Chi Minh City University of Law (ULAW)
              </div>
            </div>
            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src="./home/person-4.jpg"
                />
              </div>
              <div style={{ textAlign: "center", margin: "30px 0px" }}>
                <FontAwesomeIcon
                  style={{ color: "rgb(11, 174, 236)" }}
                  icon={faQuoteRight}
                />
              </div>
              <p style={{ padding: "0px 50px", color: "rgb(119, 119, 119)" }}>
                The platform is really convenient to reach out to companies & I
                have managed to secure 2 interviews already! I can also track my
                application status instead of wondering whether the company has
                seen or shortlisted me.
              </p>
              <div style={{ paddingLeft: "350px" }}>Zai Muhd</div>
              <div
                style={{ paddingLeft: "150px", color: "rgb(119, 119, 119)" }}
              >
                University of Engineering and Technology (UET)
              </div>
            </div>
          </Row>
        </>
      </Container>
    </>
  );
};
