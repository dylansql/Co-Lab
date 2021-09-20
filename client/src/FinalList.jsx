import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function FinalList(props) {
    const { finalType } = useParams();
    const [ finalFilter, setFinalFilter ] = useState([]);
    const { xpoType } = useParams()
    const { list } = props
    
    const experienceList = props.filteredList.filter(item => item.fields.experience === xpoType || item.fields.experience === xpoType)

    console.log("Final List: Line 11", experienceList)
    return (
        <div>
            <h1>this is the final list component</h1>
        </div>
    )
}
