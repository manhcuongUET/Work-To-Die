import React , {useContext} from 'react'
import Select from "react-select";
import { Route, useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import resumeMailContext from "../../context/resumeMail"


export const ApplyTag = (props) => {
    const { resumeMail, setResumeMail } = useContext(resumeMailContext)
    const {email , job} = props
    const history = useHistory()

    const gotoProfile = () => {
        setResumeMail(email)
        history.push("/profile")
    }

    return (
        <div style = {{marginTop: 40}}>
           <span style = {{fontWeight : "bold"}}>{email}</span>  has applied to your work: <span style = {{fontWeight : "bold"}}>{job}</span> , want to see his/her <a onClick = {gotoProfile} className = "here">profile</a>
        </div>
       
    )
}