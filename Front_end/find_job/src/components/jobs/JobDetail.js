import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./JobDetail.css"
import { faBuilding, faHourglassStart, faClock, faBriefcase, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { JobsInfo } from "./JobsInfo"
export const JobDetail = () => {
    const [similar, setSimilar] = useState([])

    // for (let i = 0; i < 3; i++) {
    //     if (similar.length == 3) break;
    //     similar.push(<JobsInfo />)
    // }

    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            if (similar.length == 3) break
            setSimilar([...similar, <JobsInfo />])
        }

    })

    return (
        <div className="d-flex mainPage">
            <div class="mainJob">
                <div className=" d-flex jobInfo">
                    <div className="logoCompany">
                        <img src="./image/test.png" alt="" className="logoo" />
                    </div>
                    <div className="jobShowing">
                        <div className="position">Performance Specialist</div>
                        <div className="d-flex nameAndLocation">
                            <div className="companyName">Galaxy Play Joint-Stock Company</div>
                            <li className="location">Ho Chi Minh City, Vietnam</li>
                        </div>
                        <div className="department d-flex">
                            <div><FontAwesomeIcon icon={faBuilding} className="buidling" size="1x" /></div>
                            <div className="place">Marketing</div>
                        </div>
                        <div className="type d-flex">
                            <div><FontAwesomeIcon icon={faHourglassStart} className="buidling" size="1x" /></div>
                            <div className="timing">Fulltime / Partime</div>
                        </div>
                        <div className="experience d-flex">
                            <div><FontAwesomeIcon icon={faBriefcase} className="buidling" size="1x" /></div>
                            <div className="yearsExperiment">More than 2 years</div>
                        </div>
                        <div className="salary d-flex">
                            <div><FontAwesomeIcon icon={faDollarSign} className="buidling" size="1x" /></div>
                            <div className="money">1000 - 2000</div>
                        </div>
                        <div className="postedTime d-flex">
                            <div><FontAwesomeIcon icon={faClock} className="buidling" size="1x" /></div>
                            <div>Posted 2 days ago  </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="jobDes">

                </div>
            </div>
            <div class="similarJob">
                <div className="similarTitle">Similar jobs for you</div>
                {similar.map(item => {
                    return <div className="item">{item}</div>;
                })}
            </div>

        </div>
    )
}