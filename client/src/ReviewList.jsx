import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



export default function ReviewList(props) {
    const { type } = useParams() 
    const [filteredList, setFilteredList ] = useState([])
    const { list } = props
    
    useEffect(() => {
        console.log(list)
        const newList = list.filter(item => item.fields.category === type || item.fields.category === `${type}\n`)
        console.log("Line 14: Review List", newList)
        setFilteredList(newList)
    }, []);
    // console.log("Line 17", type)
    
    return (
        <>
        </>
    )
}
