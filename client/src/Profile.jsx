import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';


function Profile(props) {
    const { filteredList } = props
    const [profile, setProfile] = useState([])
    const { name } = useParams()

    // const userProfile = filteredList.filter(item => {
    //     if (item.fields.name === name) {
    //         console.log(item.fields.name)
    //     } return item.fields.name.toLowerCase() === name
    // })

    useEffect(()=> {
        // console.log("Xperience", item.fields.experience)
        const userProfile = filteredList.filter(item => {
            console.log("target name", name)
            console.log("array of items", item.fields.name)
        if(item.fields.name === name || item.fields.name === `${name}\n`) {
            console.log(item.fields.name)
        }
            return item.fields.name === name || item.fields.name.toLowerCase() === `${name}\n`
        })
        setProfile(userProfile)
        console.log("Target Profile", userProfile)
    }, []);

    if (profile.length === 0) {
        return <p>Loading...</p>
    }
    


    // finalFilter.map((filter) => (
    //     <div className="justify-center" key={filter.id}> 
    //         <Link to={`/Profile/${filter.fields.name}`}><img src={filter.fields.images} height="80" width="80" className="" /></Link>
    //         <p>Name: {filter.fields.name} </p>
    //         <p>Categorey: {filter.fields.category}</p>
    //         <p>{filter.fields["review (from Reviews)"][0]}</p>
    //         {/* {filter.fields["review (from Reviews)"].map((review, index) => (
    //             <p key={index}>{review}</p>
    //         ))} */}
    //     </div>

    console.log(profile)

    return (


        profile.map((file) => (
            <div className="justify-items-center" key={profile.id}> 
                <img src={file.fields.images} height="200" width="200" className="" />
                {file.fields["review (from Reviews)"].map((review, index) => (
                    <p key={index} className="pt-10 pb-5 text-center"> {review} </p>
                ))}
            </div>
        ))
    )
}

export default Profile;