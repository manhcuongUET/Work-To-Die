import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Nav, Button, Navbar, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./JobsInfo.css"
import { faBookmark, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
export const JobsInfo = () => {
    return (
        <div className="frame">
            <div className="info">
                <img src="./image/test.png" alt="" className="logo" />
                <div className="detail">
                    <div className="carrer">A fucking bitch</div>
                    <div className="companyName">Fucking Company</div>
                </div>
                <div className="bookmark"><FontAwesomeIcon icon={faBookmark} size="2x" className="bookmarkLogo" /></div>
            </div>
            <div className="located">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="mapLogo" />
                <div className="location"> {"Ho Chi Minh City, Vietnam"}</div>
            </div>
            <div className="lastUpdated">
                <FontAwesomeIcon icon={faClock} size="2x" className= "clockLogo" />
                <div className="timeUpdated">Updated {2} days ago</div>

            </div>
        </div>
    )
}