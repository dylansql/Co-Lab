import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function FinalList(props) {
    const { finalType } = useParams();
    const [ finalFilter, setFinalFilter ] = useState([]);
    const { list } = props
    
    const experienceList = props.filteredList.filter(item => item.fields.experience === "size-low" || item.fields.experience === "size-low")

    return (
        <div>
            <h1>this is the final list component</h1>
        </div>
    )
}
