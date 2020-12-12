import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./JobDetail.css"
import { faBuilding, faHourglassStart, faClock, faBriefcase, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { JobsInfo } from "./JobsInfo"
import axiosInstance from "../../utils/axios"
export const JobDetail = () => {
    const [similar, setSimilar] = useState([])
    const [jobInfo, setJobInfo] = useState()

    const field = "Computer Software"
    const job = "Web/App Tester (QA, QC)"
    const companyName = "Lusso Enterprise Inc"



    // useEffect(() => {
    //     for (let i = 0; i < 3; i++) {
    //         if (similar.length == 3) break;
    //         setSimilar([...similar, 
    //         <JobsInfo
    //             job = "Bitch"
    //             companyName = "Vai lon luon , dau cat moi"
    //             location = "Ho Chi Minh City, Vietnam"
    //             updateTime = "Updated 2 days ago"
    //         />
    //     ])
    //     }

    //     axiosInstance.get(`jobs/jobDetail?job=${job}&companyName=${companyName}`).then((res) => {
    //         console.log(res.data)
    //         setJobInfo(res.data)
    //     }
    //     ,[])

    useEffect(() => {
        axiosInstance.get(`jobs/jobDetail?job=${job}&companyName=${companyName}`).then((res) => {
            console.log(res.data)
            setJobInfo(res.data[0])
            
        })
        axiosInstance.get(`jobs/field?field=${field}`).then((res) => {
            setSimilar(res.data)
        })

    }, [])

   

    return (
        <div>{(jobInfo && similar.length !==0)  ? <div className="d-flex mainPage">
            <div className="mainJob">
                <div className=" d-flex jobInfo">
                    <div className="logoCompany">
                        <img src={jobInfo.company[0].imgUrl} alt="" className="logoo" />
                    </div>
                    <div className="jobShowing">
                        <div className="position">{jobInfo.job}</div>
                        <div className="d-flex nameAndLocation">
                            <div className="companyName">{jobInfo.companyName}</div>
                            <li className="location">{jobInfo.company[0].location}</li>
                        </div>
                        <div className="department d-flex">
                            <div><FontAwesomeIcon icon={faBuilding} className="buidling" size="1x" /></div>
                            <div className="place">{jobInfo.field}</div>
                        </div>
                        <div className="type d-flex">
                            <div><FontAwesomeIcon icon={faHourglassStart} className="buidling" size="1x" /></div>
                            <div className="timing">{jobInfo.type}</div>
                        </div>
                        <div className="experience d-flex">
                            <div><FontAwesomeIcon icon={faBriefcase} className="buidling" size="1x" /></div>
                            <div className="yearsExperiment">{jobInfo.experience}</div>
                        </div>
                        <div className="salary d-flex">
                            <div><FontAwesomeIcon icon={faDollarSign} className="buidling" size="1x" /></div>
                    <          div className="money">Up to {jobInfo.salary} $</div>
                        </div>
                        <div className="postedTime d-flex">
                            <div><FontAwesomeIcon icon={faClock} className="buidling" size="1x" /></div>
                            <div>{jobInfo.timePost}</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="jobDes">

                </div>
            </div>
            <div className="similarJob">
                <div className="similarTitle">Similar jobs for you</div>
               <div> {similar.map(item => <div className="item">
                   <JobsInfo 
                   location={item.company[0].location}
                   job={item.job}
                   companyName={item.companyName}
                   website = {item.company[0].website}
                   img = {item.company[0].imgUrl}
                   updateTime={item.timePost}/></div>)}
                    </div>
              
            
            </div>

        </div> : <div>Loading...</div>}</div>
    )
}