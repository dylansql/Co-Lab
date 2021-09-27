import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react';

export default function FinalList(props) {
    const [ finalFilter, setFinalFilter ] = useState([]);
    const { xpoType } = useParams()
    const { filteredList } = props
    
    

    

    useEffect(()=> {
        // console.log("Xperience", item.fields.experience)
        const experienceList = filteredList.filter(item => {
        if(item.fields.experience === xpoType || item.fields.experience === `${xpoType}\n`) {
            console.log(item.fields.experience === xpoType || item.fields.experience === xpoType)
        }
            return item.fields.experience.toLowerCase() === xpoType || item.fields.experience.toLowerCase() === `${xpoType}\n`
        })
        console.log("line 11 in Final List", experienceList[0]?.fields["review (from Reviews)"])
        setFinalFilter(experienceList)
    }, []);
    // console.log(finalFilter)

    if (finalFilter.length === 0) {
        return <p>Loading...</p>
    }
    
    // if (finalFilter.ID === null)
    

    return (
        finalFilter.map((filter) => (
        <div className="" key={filter.id}> 
            <Link to={`/Profile/${filter.fields.name}`}><img src={filter.fields.images} height="80" width="80" className="" /></Link>
            <p>Name: {filter.fields.name} </p>
            <p>Categorey: {filter.fields.category}</p>
            <p>{filter.fields["review (from Reviews)"][0]}</p>
            {/* {filter.fields["review (from Reviews)"].map((review, index) => (
                <p key={index}>{review}</p>
            ))} */}
        </div>
    ))
    );
}
