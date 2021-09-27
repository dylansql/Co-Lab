import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react';

export default function StudioFinalList(props) {
    const [ finalFilter, setFinalFilter ] = useState([]);
    const { xpoType } = useParams()
    const { filteredList } = props

    useEffect(()=> {
        // console.log("Xperience", item.fields.experience)
        console.log(xpoType)
        const budgetList = filteredList.filter(item => {
        if(item.fields.budget === xpoType || item.fields.budget === `${xpoType}\n`) {
            console.log(item.fields.budget === xpoType || item.fields.budget === xpoType)
            console.log("this is the budgets")
        }
            return item.fields.budget.toLowerCase() === xpoType || item.fields.budget.toLowerCase() === `${xpoType}\n`
        })
        // console.log("line 11 in Final List", experienceList[0]?.fields["review (from Reviews)"])
        setFinalFilter(budgetList)
    }, []);
    // console.log(finalFilter)

    if (finalFilter.length === 0) {
        return <p>Loading...</p>
    }
    
    // if (finalFilter.ID === null)
    
    console.log("this is the final filter", finalFilter)

    return (
        finalFilter.map((filter) => (
            <div className="text-left">
            <div className="space-y-10" key={filter.id}> 
            <Link to={`/Profile/${filter.fields.name}`}><img src={filter.fields.images} height="200" width="200" className="" /></Link> 
            <p>Name: {filter.fields.name} </p>
            <p>Categorey: {filter.fields.category}</p>
            <p>{filter.fields["review (from Reviews)"][0]}</p>
            {/* {filter.fields["review (from Reviews)"].map((review, index) => (
                <p key={index}>{review}</p>
            ))} */}
            </div>
        </div>
    ))
    );
}
