import React, { useState, useEffect, useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./JobDetail.css"
import { faBuilding, faHourglassStart, faClock, faBriefcase, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { JobsInfo } from "./JobsInfo"
import axiosInstance from "../../utils/axios"
import jobContext from "../../context/job"
import { LoadingSign } from '../../share/LoadingIndicator';


export const JobDetail = () => {
    const [similar, setSimilar] = useState([])
    const [jobInfo, setJobInfo] = useState()

    const field = "Computer Software"

    const {selectedJob , setSelectedJob} = useContext(jobContext)
    
    useEffect(() => {
        axiosInstance.get(`jobs/jobDetail?job=${selectedJob.job}&companyName=${selectedJob.companyName}`).then((res) => {
            setJobInfo(res.data[0])
            
        })
        axiosInstance.get(`jobs/field?field=${field}`).then((res) => {
            setSimilar(res.data)
        })
        // console.log(selectedJob)
    }, [])

   const renderRequirement = (a) => {
        return a.split("\n")
   }
   const email  = "aloooo@gmail.com"

   const applyJob = () => {
        axiosInstance.post(`/apply?email=${email}&companyName=${jobInfo.companyName}&job=${jobInfo.job}`)
   }

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
                            <a href = {jobInfo.company[0].website} className="companyName" target="_blank">{jobInfo.companyName}</a>
                            
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
                        <Button onClick = {applyJob} style = {{backgroundColor : "rgb(1, 126, 183)" , marginTop : 30}}>Apply this job  </Button>
                    </div>
                </div>
                <hr />
                <div className="jobDes" style = {{marginRight: 120}}>
                    <div style = {{fontSize: 20 , fontWeight: 'bold', marginBottom: 30}}>Requirement</div>
                    <ul>{renderRequirement(jobInfo.requirement).map ((item) => {
                        if(item === "") return null
                        return <li style = {{paddingBottom: 13}}>{item}</li>
                    })} </ul>
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

        </div> : <LoadingSign text = "Loading"/>}</div>
    )
}