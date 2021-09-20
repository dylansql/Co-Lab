import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



export default function ReviewList(props) {
    const { type } = useParams()
    const { list } = props
    
    useEffect(() => {
        console.log(list)
        const newList = list.filter(item => item.fields.category === type || item.fields.category === `${type}\n`)
        // const experienceList = newList.filter(item => item.fields.experience === "size-low" || item.fields.experience === "size-low")    
        // console.log("Line 14: Review List", newList) 
        props.setFilteredList(newList)
    }, []);
    // console.log("Line 17", type)
    
    return (
        <>
        </>
    )
}
