import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export const Next = (props) => {

    const {pagination , onPageChange} = props

    const {limt , page , totalJobs} = pagination

    const totalPages = Math.ceil(totalJobs/limt)

    const handlePageChange = (nextPage) => {
        onPageChange(nextPage)
    }

    return (<div style = {{position: 'relative'}}><Button style = {{position : 'absolute' , right : 0 , width : 100 , backgroundColor: "rgb(1, 126, 183)" }} disabled = {page >totalPages} 
        onClick ={
            () => {
                handlePageChange(page+1)
            }
        } >  Next  </Button></div>)
}