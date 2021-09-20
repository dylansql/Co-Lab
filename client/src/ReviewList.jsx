import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'


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
    console.log("Line 17", type)
    
    return (
        <>
        {/* <div className="Experience">
            <h1>Music</h1>
            <h3>What level of experience do you need?</h3>
                <div className="size-low">
                    <Link to={`/category/${type}/xpo/size-low`}><button>I can work with little experience</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="size-mid">
                    <Link to={`/category/${type}/xpo/size-mid`}><button>I can work with medium experience</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="size-low">
                <Link to={`/category/${type}/xpo/size-high`}><button>I need high experience</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
        </div> */}
        </>
    )
}
