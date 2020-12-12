import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export const Next = (props) => {

    const {pagination , onPageChange} = props

    const {limt , page , totalJobs} = pagination

    const totalPages = Math.ceil(totalJobs/limt)

    const handlePageChange = (nextPage) => {
        onPageChange(nextPage)
    }

    return (<div><Button disabled = {page >totalPages} 
        onClick ={
            () => {
                handlePageChange(page+1)
            }
        } >Next</Button></div>)
}