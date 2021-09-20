import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function FinalList(props) {
    const { finalType } = useParams();
    const [ finalFilter, setFinalFilter ] = useState([]);
    const { list } = props
    
    

    return (
        <div>
            
        </div>
    )
}
