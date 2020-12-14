import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import { NavDropdown, Nav, Button, Navbar, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./JobsInfo.css"
import { faBookmark, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
export const JobsInfo = (props) => {
    const history= useHistory()
    const {job, companyName, location, updateTime , img, onSelectedJob, salary } = props
    const handleSelectedJob=()=>{
        onSelectedJob({companyName : companyName, job : job})
        history.push("/JobDetail")
    }
    return (
        <div className="frame" onClick={handleSelectedJob}>
            <div className="info">
                <img src={img} alt="" className="logo" />
                <div className="detail">
                    <div className="carrer">{job}</div>
                    <div className="companyName">{companyName}</div>
                </div>
                <div className="bookmark"><FontAwesomeIcon icon={faBookmark} size="2x" className="bookmarkLogo" /></div>
            </div>
            <div className="located">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="mapLogo" />
                <div className="location"> {location}</div>
            </div>
            <div className="lastUpdated">
                <FontAwesomeIcon icon={faClock} size="2x" className="clockLogo" />
                <div className="timeUpdated">{updateTime}</div>

            </div>
            <div>{salary}</div>
        </div>
    )
}