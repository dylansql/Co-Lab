import react from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

const BASE = process.env.REACT_APP_AIRTABLE_BASE
const KEY = process.env.REACT_APP_AIRTABLE_KEY

const URL = `https://api.airtable.com/v0/${BASE}/Artist`

const config = {
    headers: {
      Authorization: `Bearer ${KEY}`
    },
  };

export default function Create(props) {
    const [toggle, setToggle] = useState(false)
    const [posts, setPosts] = useState("")
    const [review, setReview] = useState("")
    const [category, setCategory] = useState("")
    const [nameList, setNameList] = useState([])
    const { list } = props

    // fetchArtists from Api
    // update artist state
    console.log(list)
    
    useEffect(() => {
        function createNameList(e) {
            // console.log("cats", e)
            list.forEach((carrot) =>{
                console.log(carrot.fields.category)
            })
            const filteredList = list.filter((item) => {
              return  item.fields.category.trim() === category
            })
            console.log(filteredList)
            setNameList(filteredList)
            // define filter condition
            // filter through artistList
            // updating name list state to filtered array 
        } createNameList()
    },[category]) 
    
    

    async function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            // review,
            // category,            
        }
        let res = await axios.post(URL, config)

        fetch(URL, config, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        }).then(() => {
            console.log("New Review added")
        })
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <h4>Write a Review!</h4>
            <label>Category</label> 
            <select required value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option disabled selected="true"> - Select Category </option>
                <option value="Musician">Music</option>
                <option value="Photographer">Photography</option>
                <option value="Videographer">Videography</option>
                <option value="Producer">Producer</option>
                <option value="Studio">Studio</option>
                <option value="Venue">Venue</option>
                <option value="Audio Engineer">Audio Engineer</option>
            </select>
            <label>Name</label>
            <select required value={nameList}>
                {nameList?.map((name)=> (
                    <option value={name.fields.name}>{name.fields.name}</option>
                ))}

            



            </select>
            <label>Review</label>
            <textarea required></textarea>
            <button>Add Review</button>
        </form>
        </>
    )
}