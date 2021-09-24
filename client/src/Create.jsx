import { useState, useEffect } from 'react'
import './index.css'
import axios from 'axios'

const BASE = process.env.REACT_APP_AIRTABLE_BASE
const KEY = process.env.REACT_APP_AIRTABLE_KEY

const URL = `https://api.airtable.com/v0/${BASE}/Reviews`

const config = {
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
  };

export default function Create(props) {
    const [review, setReview] = useState("")
    const [category, setCategory] = useState("")
    const [nameList, setNameList] = useState([])
    const [name, setName] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [Artist, setArtist] = useState("")
    const { list } = props

    // fetchArtists from Api
    // update artist state
    useEffect(() => {
        function createNameList(e) {
            // console.log("cats", e)
            list.forEach((carrot) =>{
                // console.log("carrot list",carrot.fields.category)
            })
            const filteredList = list.filter((item) => {
              return  item.fields.category.trim() === category
            })
            setNameList(filteredList)
            // define filter condition
            // filter through artistList
            // updating name list state to filtered array 
        } createNameList()
    },[category]) 
    
    
    
    async function handleSubmit (e) {
        e.preventDefault();
        const fields = { review, Artist: [Artist] }
        console.log("new post", fields)
        setIsPending(true)
        let res = await axios.post(URL, {fields}, config)
        // fetch(URL, config, {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(fields)
        // }).then(() => {
        //     console.log('new post added!')
        //     setIsPending(false)
        // })
    }


    return (
        <div className="Form">
        <form onSubmit={handleSubmit}>
            <h4>Write a Review!</h4>
            <label>Category</label> 
            <select onChange={(e)=> setCategory(e.target.value)}>
                <option disabled selected={true}> - Select Category </option>
                <option value="Musician">Music</option>
                <option value="Photographer">Photography</option>
                <option value="Videographer">Videography</option>
                <option value="Producer">Producer</option>
                <option value="Studio">Studio</option>
                <option value="Venue">Venue</option>
                <option value="Audio Engineer">Audio Engineer</option>
            </select>
            <label>Name</label>
            <select onChange={(e) => {
                setName(e.target.value)
    
                setArtist(e.target.value)
                }}>
                {nameList?.map((name)=> (
                    <option key={name.id} value={name.id}>{name.fields.name}</option>
                ))}
            </select>
            <label>Review</label>
            <textarea value={review} onChange={((e)=> setReview(e.target.value))}></textarea>
            {!isPending && <button type="submit">Add Review </button>}
            {isPending && <button disabled>Adding Review... </button>}
            {/* <p>{ category }</p>
            <p>{ name }</p>
            <p>{ review }</p> */}
        </form>
        </div>
    )
}