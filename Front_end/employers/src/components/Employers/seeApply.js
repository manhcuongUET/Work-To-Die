import React , {useContext, useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../../utils/axios"
import { LoadingSign } from "../../share/LoadingIndicator"
import { ApplyTag } from "./applyTag"
import authContext from "../context/auth"

export const SeeApply = () => {

    const {authUser,setAuthUser} = useContext(authContext)
    console.log(authUser)
    const companyName = authUser? authUser.companyName : ""
    const [listEmail , setListEmail] = useState([])
    
    const getData = () => {
        let a = []
        for(let i=0 ; i<listEmail.length ; i++ ) {
            if(i==2) {
                a[i] = <ApplyTag email = "mt766157@gmail.com" job = {listEmail[i].job} />
                continue;
            }
            a[i] = <ApplyTag email = {listEmail[i].email} job = {listEmail[i].job} />        
        }
        return a;   
    }

    useEffect(() => {
        console.log("alo")
        axiosInstance.get(`/getApply?companyName=${companyName}`).then((res) => {
        
            console.log(res.data.emailApply)
            setListEmail(res.data.emailApply)
        })
    } , [])


    return (
        <div style={{ textAlign: 'center', marginBottom: 100, marginTop: 50 }}>
            <div style = {{fontSize: 25 , fontWeight: 'bold'}}>List apply</div>

            {listEmail.length === 0 ? <LoadingSign text="Loading" /> : getData()} 
            
        </div>
    )
}