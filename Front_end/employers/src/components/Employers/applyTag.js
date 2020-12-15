import React , {useContext} from 'react'
import { Route, useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import authContext from "../context/auth"


export const ApplyTag = (props) => {
    // const { resumeMail, setResumeMail } = useContext(resumeMailContext)
    const {authUser,setAuthUser} = useContext(authContext)
    const {email , job} = props
    const history = useHistory()

    const gotoProfile = () => {
        // setResumeMail(email)
        authUser.emailApply = email
        history.push("/profile")
    }

    return (
        <div style = {{marginTop: 40}}>
           <span style = {{fontWeight : "bold"}}>{email}</span>  has applied to your work: <span style = {{fontWeight : "bold"}}>{job}</span> , want to see his/her <a onClick = {gotoProfile} className = "here">profile</a>
        </div>
       
    )
}